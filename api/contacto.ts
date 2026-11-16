import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createClient } from '@supabase/supabase-js'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // 1. Validar método HTTP
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({
      success: false,
      error: `Método ${req.method} no permitido. Utilice POST.`
    })
  }

  try {
    // 2. Extraer y normalizar cuerpo de la petición
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body || {}
    const { nombre, telefono, email, sector, mensaje } = body

    // 3. Validar campos obligatorios y formato
    if (!nombre || typeof nombre !== 'string' || !nombre.trim()) {
      return res.status(400).json({
        success: false,
        error: 'El campo "nombre" es obligatorio.'
      })
    }

    if (!email || typeof email !== 'string' || !email.trim()) {
      return res.status(400).json({
        success: false,
        error: 'El campo "email" es obligatorio.'
      })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({
        success: false,
        error: 'El formato de correo electrónico no es válido.'
      })
    }

    // 4. Obtener credenciales privadas de Supabase del entorno del servidor
    const supabaseUrl = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL
    const supabaseKey = 
      process.env.SUPABASE_SERVICE_ROLE_KEY || 
      process.env.SUPABASE_ANON_KEY || 
      process.env.VITE_SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseKey) {
      console.error('[API /contacto] Error: Faltan variables de entorno de Supabase en el servidor.')
      return res.status(500).json({
        success: false,
        error: 'Error de configuración del servidor. Por favor comuníquese por teléfono o email directo.'
      })
    }

    // 5. Inicializar cliente de Supabase en el backend
    const supabase = createClient(supabaseUrl, supabaseKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false
      }
    })

    // 6. Insertar el lead de forma segura
    const { error: dbError } = await supabase
      .from('leads')
      .insert([
        {
          nombre: nombre.trim(),
          telefono: telefono ? String(telefono).trim() : null,
          email: email.trim().toLowerCase(),
          sector: sector ? String(sector).trim() : null,
          mensaje: mensaje ? String(mensaje).trim() : null,
          estado: 'pendiente'
        }
      ])

    if (dbError) {
      console.error('[API /contacto] Error al insertar en Supabase:', dbError)
      return res.status(500).json({
        success: false,
        error: 'No se pudo guardar la consulta en la base de datos.'
      })
    }

    // 7. Respuesta exitosa
    return res.status(200).json({
      success: true,
      message: 'Consulta registrada con éxito en 4S Clima.'
    })

  } catch (error: any) {
    console.error('[API /contacto] Error inesperado en el servidor:', error)
    return res.status(500).json({
      success: false,
      error: 'Ocurrió un error inesperado al procesar su solicitud.'
    })
  }
}
