import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // 1. Validar método HTTP
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).json({ error: `Método ${req.method} no permitido` })
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body || {}
    const { nombre, telefono, email, sector, mensaje } = body

    if (!nombre || !email) {
      return res.status(400).json({ error: 'Nombre y correo electrónico son obligatorios.' })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(String(email).trim())) {
      return res.status(400).json({ error: 'El formato de correo electrónico no es válido.' })
    }

    // 2. Conectar con Supabase
    const supabaseUrl = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL
    const supabaseServiceKey = 
      process.env.SUPABASE_SERVICE_ROLE_KEY || 
      process.env.SUPABASE_ANON_KEY || 
      process.env.VITE_SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseServiceKey) {
      console.error('Error: Faltan variables de entorno de Supabase en el servidor.')
      return res.status(500).json({ error: 'Error de configuración del servidor.' })
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey, {
      auth: { persistSession: false, autoRefreshToken: false }
    })

    // 3. Guardar en Supabase (para verlo en la app interna de 4S Clima)
    const { error: dbError } = await supabase
      .from('leads')
      .insert([
        {
          nombre: String(nombre).trim(),
          telefono: telefono ? String(telefono).trim() : null,
          email: String(email).trim().toLowerCase(),
          sector: sector ? String(sector).trim() : null,
          mensaje: mensaje ? String(mensaje).trim() : null,
          estado: 'pendiente'
        }
      ])

    if (dbError) {
      console.error('Error en Supabase:', dbError)
      return res.status(500).json({ error: 'Error al registrar la consulta en la base de datos.' })
    }

    // 4. Enviar correos con Resend usando el dominio verificado
    const resendApiKey = process.env.RESEND_API_KEY
    if (resendApiKey) {
      const resend = new Resend(resendApiKey)
      try {
        // Correo 1: Notificación al equipo de 4S Clima (aferreyra y contacto)
        await resend.emails.send({
          from: '4S Clima Web <noreply@mail.cuatroeseclima.com>',
          to: ['aferreyra@cuatroeseclima.com', 'contacto@cuatroeseclima.com'],
          replyTo: String(email).trim(),
          subject: `Nueva consulta web: ${nombre} - Sector: ${sector || 'General'}`,
          html: `
            <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
              <h2 style="color: #1a56db; border-bottom: 2px solid #1a56db; padding-bottom: 10px;">Nueva consulta desde el formulario web</h2>
              <p>Has recibido un nuevo mensaje de potencial cliente:</p>
              <ul>
                <li><strong>Nombre:</strong> ${nombre}</li>
                <li><strong>Teléfono:</strong> ${telefono || 'No especificado'}</li>
                <li><strong>Correo:</strong> ${email}</li>
                <li><strong>Sector:</strong> ${sector || 'No especificado'}</li>
              </ul>
              <p><strong>Mensaje:</strong></p>
              <p style="background-color: #f9fafb; padding: 12px; border-radius: 6px;">${mensaje || 'Sin mensaje adicional.'}</p>
            </div>
          `
        })

        // Correo 2: Confirmación automática al CLIENTE
        await resend.emails.send({
          from: '4S Clima <noreply@mail.cuatroeseclima.com>',
          to: [String(email).trim()],
          replyTo: 'contacto@cuatroeseclima.com',
          subject: 'Hemos recibido tu consulta - 4S Clima',
          html: `
            <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
              <h2 style="color: #1a56db; border-bottom: 2px solid #1a56db; padding-bottom: 10px;">¡Gracias por contactarte con 4S Clima!</h2>
              <p>Hola <strong>${nombre}</strong>,</p>
              <p>Hemos recibido tu consulta sobre <strong>${sector || 'nuestros servicios'}</strong>. Nuestro equipo de ingeniería técnica se pondrá en contacto contigo dentro de las 48 horas hábiles.</p>
              <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
              <p style="font-size: 13px; color: #555;"><strong>4S Clima</strong> - CABA, Buenos Aires</p>
            </div>
          `
        })
      } catch (emailErr) {
        console.warn('Aviso: El lead se guardó en Supabase pero falló el envío de email en Resend:', emailErr)
      }
    }

    return res.status(200).json({ success: true, message: 'Consulta procesada con éxito.' })

  } catch (err: any) {
    console.error('Error interno del servidor:', err)
    return res.status(500).json({ error: 'Error interno del servidor.' })
  }
}
