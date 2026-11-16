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

    // 4. Enviar correos con Resend usando diseño corporativo de alta presentación
    const resendApiKey = process.env.RESEND_API_KEY
    if (resendApiKey) {
      const resend = new Resend(resendApiKey)
      const currentYear = new Date().getFullYear()

      try {
        // CORREO 1: Notificación ejecutiva para el equipo de 4S Clima (aferreyra y contacto)
        await resend.emails.send({
          from: '4S Clima Web <noreply@mail.cuatroeseclima.com>',
          to: ['aferreyra@cuatroeseclima.com', 'contacto@cuatroeseclima.com'],
          replyTo: String(email).trim(),
          subject: `🔔 Nueva Consulta Web: ${nombre} · Sector ${sector || 'General'}`,
          html: `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f1f5f9; padding: 30px 15px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06); border: 1px solid #e2e8f0;">
          
          <!-- Header Corporativo -->
          <tr>
            <td style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 28px 32px; border-bottom: 4px solid #1d4ed8;">
              <table width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <span style="font-size: 26px; font-weight: 900; color: #ffffff; letter-spacing: 2px;">4S <span style="color: #60a5fa;">CLIMA</span></span>
                    <div style="color: #94a3b8; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin-top: 4px; font-weight: 600;">Panel Web · Notificación de Lead</div>
                  </td>
                  <td align="right">
                    <span style="background-color: #1d4ed8; color: #ffffff; font-size: 11px; font-weight: 700; padding: 6px 14px; border-radius: 20px; text-transform: uppercase; letter-spacing: 1px;">Nuevo Contacto</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Contenido -->
          <tr>
            <td style="padding: 32px;">
              <h1 style="margin: 0 0 12px 0; color: #0f172a; font-size: 20px; font-weight: 700;">Nueva consulta recibida en la web</h1>
              <p style="margin: 0 0 24px 0; color: #64748b; font-size: 14px; line-height: 1.5;">Un potencial cliente ha completado el formulario de contacto oficial en <strong>cuatroeseclima.com</strong>:</p>
              
              <!-- Ficha de Datos del Cliente -->
              <table width="100%" cellspacing="0" cellpadding="0" style="background-color: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0; margin-bottom: 24px; overflow: hidden;">
                <tr>
                  <td style="padding: 14px 20px; border-bottom: 1px solid #e2e8f0; width: 35%; color: #64748b; font-size: 13px; font-weight: 600;">Nombre y Apellido</td>
                  <td style="padding: 14px 20px; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-size: 14px; font-weight: 700;">${nombre}</td>
                </tr>
                <tr>
                  <td style="padding: 14px 20px; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px; font-weight: 600;">Correo Electrónico</td>
                  <td style="padding: 14px 20px; border-bottom: 1px solid #e2e8f0; font-size: 14px; font-weight: 600;">
                    <a href="mailto:${email}" style="color: #1d4ed8; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 14px 20px; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px; font-weight: 600;">Teléfono</td>
                  <td style="padding: 14px 20px; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-size: 14px; font-weight: 600;">
                    ${telefono ? `<a href="tel:${telefono}" style="color: #0f172a; text-decoration: none; font-weight: 700;">${telefono}</a>` : '<span style="color: #94a3b8; font-style: italic;">No especificado</span>'}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 14px 20px; color: #64748b; font-size: 13px; font-weight: 600;">Sector de Interés</td>
                  <td style="padding: 14px 20px; color: #1d4ed8; font-size: 14px; font-weight: 700;">
                    <span style="background-color: #dbeafe; color: #1e40af; padding: 4px 10px; border-radius: 6px; font-size: 12px; font-weight: 700;">${sector || 'General'}</span>
                  </td>
                </tr>
              </table>

              <!-- Mensaje / Detalle -->
              <div style="margin-bottom: 28px;">
                <div style="font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">Mensaje o requerimiento:</div>
                <div style="background-color: #ffffff; border-left: 4px solid #1d4ed8; padding: 16px 20px; border-radius: 4px 8px 8px 4px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); border-top: 1px solid #e2e8f0; border-right: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0; color: #334155; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${mensaje || 'Sin detalles adicionales.'}</div>
              </div>

              <!-- Botones de Acción Rápida -->
              <table width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td align="center" style="padding-top: 6px;">
                    <a href="mailto:${email}?subject=Respuesta a su consulta en 4S Clima" style="display: inline-block; background-color: #1d4ed8; color: #ffffff; font-size: 14px; font-weight: 700; padding: 13px 28px; border-radius: 8px; text-decoration: none; margin-right: 10px; box-shadow: 0 2px 8px rgba(29, 78, 216, 0.25);">Responder por Email</a>
                    ${telefono ? `<a href="tel:${telefono}" style="display: inline-block; background-color: #f1f5f9; color: #0f172a; font-size: 14px; font-weight: 700; padding: 13px 24px; border-radius: 8px; text-decoration: none; border: 1px solid #cbd5e1;">Llamar por Teléfono</a>` : ''}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Pie del Correo Interno -->
          <tr>
            <td style="background-color: #f8fafc; padding: 18px 32px; border-top: 1px solid #e2e8f0; text-align: center; color: #94a3b8; font-size: 12px; line-height: 1.5;">
              Lead guardado automáticamente en la base de datos de 4S Clima.<br>
              © ${currentYear} 4S Clima · Todos los derechos reservados.
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
          `
        })

        // CORREO 2: Confirmación formal y de bienvenida para el CLIENTE
        await resend.emails.send({
          from: '4S Clima <noreply@mail.cuatroeseclima.com>',
          to: [String(email).trim()],
          replyTo: 'contacto@cuatroeseclima.com',
          subject: 'Hemos recibido tu consulta · 4S Clima',
          html: `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f1f5f9; padding: 35px 15px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06); border: 1px solid #e2e8f0;">
          
          <!-- Header Formal -->
          <tr>
            <td style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 36px 32px; text-align: center; border-bottom: 4px solid #1d4ed8;">
              <span style="font-size: 30px; font-weight: 900; color: #ffffff; letter-spacing: 3px; display: block;">4S <span style="color: #60a5fa;">CLIMA</span></span>
              <div style="color: #cbd5e1; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; margin-top: 8px; font-weight: 600;">
                Climatización · Refrigeración · Ventilación Industrial
              </div>
            </td>
          </tr>

          <!-- Cuerpo Principal -->
          <tr>
            <td style="padding: 36px 32px;">
              <h1 style="margin: 0 0 16px 0; color: #0f172a; font-size: 22px; font-weight: 700;">¡Gracias por contactarse con 4S Clima!</h1>
              <p style="margin: 0 0 20px 0; color: #475569; font-size: 15px; line-height: 1.6;">
                Estimado/a <strong>${nombre}</strong>, le confirmamos que hemos recibido con éxito su consulta referida a <strong>${sector || 'nuestros servicios y proyectos'}</strong>.
              </p>

              <!-- Caja de Compromiso de Respuesta -->
              <div style="background-color: #eff6ff; border: 1px solid #bfdbfe; border-left: 4px solid #1d4ed8; border-radius: 8px; padding: 18px 20px; margin-bottom: 28px;">
                <div style="color: #1e40af; font-weight: 700; font-size: 14px; margin-bottom: 4px;">Compromiso de respuesta técnica</div>
                <div style="color: #1e3a8a; font-size: 14px; line-height: 1.5;">
                  Nuestro equipo de ingeniería técnica está evaluando sus requerimientos y se pondrá en contacto con usted dentro de las próximas <strong>48 horas hábiles</strong>.
                </div>
              </div>

              <!-- Bloque de Respaldo y Trayectoria -->
              <table width="100%" cellspacing="0" cellpadding="0" style="margin-bottom: 28px; background-color: #f8fafc; border-radius: 10px; border: 1px solid #e2e8f0; overflow: hidden;">
                <tr>
                  <td width="50%" align="center" style="border-right: 1px solid #e2e8f0; padding: 16px 12px;">
                    <div style="font-size: 20px; font-weight: 900; color: #1d4ed8;">31 Años</div>
                    <div style="font-size: 11px; color: #64748b; text-transform: uppercase; font-weight: 600; margin-top: 4px;">Trayectoria en Obras Térmicas</div>
                  </td>
                  <td width="50%" align="center" style="padding: 16px 12px;">
                    <div style="font-size: 16px; font-weight: 900; color: #0f172a;">Carrier · Příhoda</div>
                    <div style="font-size: 11px; color: #64748b; text-transform: uppercase; font-weight: 600; margin-top: 4px;">Representantes en Bs. As.</div>
                  </td>
                </tr>
              </table>

              <!-- Canales de Contacto Directo -->
              <div style="border-top: 1px solid #e2e8f0; padding-top: 24px; color: #64748b; font-size: 13px; line-height: 1.8;">
                <div style="font-weight: 700; color: #0f172a; margin-bottom: 8px; text-transform: uppercase; font-size: 11px; letter-spacing: 1px;">Canales de atención directa:</div>
                <div>📍 <strong>Oficinas:</strong> Av. Córdoba 1432 8B, CABA, Buenos Aires</div>
                <div>✉️ <strong>Email:</strong> <a href="mailto:contacto@cuatroeseclima.com" style="color: #1d4ed8; text-decoration: none;">contacto@cuatroeseclima.com</a></div>
                <div>🌐 <strong>Sitio Web:</strong> <a href="https://cuatroeseclima.com" style="color: #1d4ed8; text-decoration: none; font-weight: 600;">cuatroeseclima.com</a></div>
              </div>
            </td>
          </tr>

          <!-- Footer del Correo -->
          <tr>
            <td style="background-color: #f8fafc; padding: 22px 32px; border-top: 1px solid #e2e8f0; text-align: center; color: #94a3b8; font-size: 12px; line-height: 1.5;">
              Este es un correo automático de confirmación. Si desea agregar detalles o documentación técnica a su consulta, simplemente responda a este mensaje.<br><br>
              © ${currentYear} <strong>4S Clima</strong> · Todos los derechos reservados.
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
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
