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

    // 3. Guardar en Supabase (para la aplicación de gestión de 4S Clima)
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

    // 4. Enviar correos transaccionales con Resend (Plantillas corporativas estilo ERP)
    const resendApiKey = process.env.RESEND_API_KEY
    if (resendApiKey) {
      const resend = new Resend(resendApiKey)
      const currentYear = new Date().getFullYear()

      try {
        // CORREO 1: Notificación interna sobria para el equipo de 4S Clima
        await resend.emails.send({
          from: '4S Clima Web <noreply@mail.cuatroeseclima.com>',
          to: ['aferreyra@cuatroeseclima.com', 'contacto@cuatroeseclima.com'],
          replyTo: String(email).trim(),
          subject: `Nueva Consulta Web: ${nombre} · Sector ${sector || 'General'}`,
          html: `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="es">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Notificación Interna de Consulta - 4S Clima</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f6f8; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f4f6f8; padding: 32px 14px;">
    <tr>
      <td align="center">
        <!-- Contenedor Principal (600px máx) -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
          
          <!-- Línea de acento institucional superior -->
          <tr>
            <td style="background-color: #0284c7; height: 4px; line-height: 4px; font-size: 4px;">&nbsp;</td>
          </tr>

          <!-- Cabecera Corporativa con Logo Oficial -->
          <tr>
            <td style="padding: 24px 30px; border-bottom: 1px solid #e2e8f0; background-color: #ffffff;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="left" valign="middle">
                    <img src="https://raw.githubusercontent.com/OnlyAlayy/4S-Clima/main/public/logo-clean.png" alt="4S Clima" width="54" height="55" style="display: block; border: 0; outline: none; text-decoration: none; width: 54px; height: 55px; max-width: 54px;" />
                  </td>
                  <td align="right" valign="middle" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
                    <div style="font-size: 11px; font-weight: 700; color: #0284c7; text-transform: uppercase; letter-spacing: 0.5px;">Portal Web · Leads</div>
                    <div style="font-size: 11px; color: #64748b; margin-top: 3px;">Notificación Interna</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Cuerpo del Correo -->
          <tr>
            <td style="padding: 28px 30px;">
              
              <!-- Título del mensaje -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 22px;">
                <tr>
                  <td>
                    <h2 style="margin: 0 0 6px 0; font-size: 18px; font-weight: 700; color: #0f172a; line-height: 1.3;">Nueva consulta técnica recibida</h2>
                    <p style="margin: 0; font-size: 13px; color: #64748b; line-height: 1.5;">Se ha registrado una solicitud de contacto a través del sitio web oficial (<strong>cuatroeseclima.com</strong>):</p>
                  </td>
                </tr>
              </table>

              <!-- Estructura de Datos del Lead -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; margin-bottom: 24px; font-size: 13px;">
                <tr>
                  <td style="padding: 12px 18px; width: 35%; color: #64748b; font-weight: 600; border-bottom: 1px solid #edf2f7;">Nombre y Apellido</td>
                  <td style="padding: 12px 18px; color: #0f172a; font-weight: 700; border-bottom: 1px solid #edf2f7;">${nombre}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 18px; color: #64748b; font-weight: 600; border-bottom: 1px solid #edf2f7;">Correo Electrónico</td>
                  <td style="padding: 12px 18px; border-bottom: 1px solid #edf2f7;">
                    <a href="mailto:${email}" style="color: #0284c7; text-decoration: none; font-weight: 600;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 18px; color: #64748b; font-weight: 600; border-bottom: 1px solid #edf2f7;">Teléfono</td>
                  <td style="padding: 12px 18px; border-bottom: 1px solid #edf2f7;">
                    ${telefono ? `<a href="tel:${telefono}" style="color: #0f172a; text-decoration: none; font-weight: 600;">${telefono}</a>` : '<span style="color: #94a3b8; font-style: italic;">No especificado</span>'}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 18px; color: #64748b; font-weight: 600;">Sector de Interés</td>
                  <td style="padding: 12px 18px; color: #0f172a; font-weight: 600;">
                    <span style="display: inline-block; background-color: #e0f2fe; color: #0369a1; padding: 3px 10px; border-radius: 4px; font-size: 12px; font-weight: 600;">${sector || 'General'}</span>
                  </td>
                </tr>
              </table>

              <!-- Caja de Requerimiento Técnico -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 26px;">
                <tr>
                  <td style="padding-bottom: 8px;">
                    <span style="font-size: 11px; font-weight: 700; color: #475569; text-transform: uppercase; letter-spacing: 0.5px;">Mensaje / Requerimiento Técnico:</span>
                  </td>
                </tr>
                <tr>
                  <td style="background-color: #ffffff; border: 1px solid #cbd5e1; border-left: 3px solid #0284c7; border-radius: 4px; padding: 16px 18px; color: #1e293b; font-size: 13px; line-height: 1.6; white-space: pre-wrap;">${mensaje || 'Sin mensaje adicional.'}</td>
                </tr>
              </table>

              <!-- Botones de Acción Funcionales -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="left">
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td align="center" style="border-radius: 6px; background-color: #0f172a;">
                          <a href="mailto:${email}?subject=Respuesta a su consulta técnica · 4S Clima" target="_blank" style="display: inline-block; padding: 11px 22px; font-size: 13px; font-weight: 600; color: #ffffff; text-decoration: none; border-radius: 6px; letter-spacing: 0.3px;">Responder por Email</a>
                        </td>
                        ${telefono ? `
                        <td style="width: 12px;"></td>
                        <td align="center" style="border-radius: 6px; background-color: #f1f5f9; border: 1px solid #cbd5e1;">
                          <a href="tel:${telefono}" target="_blank" style="display: inline-block; padding: 11px 20px; font-size: 13px; font-weight: 600; color: #0f172a; text-decoration: none; border-radius: 6px;">Llamar por Teléfono</a>
                        </td>
                        ` : ''}
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer Institucional -->
          <tr>
            <td style="padding: 20px 30px; background-color: #f8fafc; border-top: 1px solid #e2e8f0; text-align: left; font-size: 11px; color: #94a3b8; line-height: 1.6;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="color: #64748b;">
                    <strong>4S Clima</strong> · Climatización, Refrigeración y Ventilación Industrial<br />
                    Av. Córdoba 1432 8B, CABA · <a href="https://cuatroeseclima.com" style="color: #0284c7; text-decoration: none;">cuatroeseclima.com</a> · <a href="https://instagram.com/cuatroeseclima" target="_blank" style="color: #0284c7; text-decoration: none;">@cuatroeseclima</a>
                  </td>
                  <td align="right" style="color: #94a3b8; font-size: 11px;">
                    Registro automático · © ${currentYear}
                  </td>
                </tr>
              </table>
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

        // CORREO 2: Confirmación formal al CLIENTE
        await resend.emails.send({
          from: '4S Clima <noreply@mail.cuatroeseclima.com>',
          to: [String(email).trim()],
          replyTo: 'contacto@cuatroeseclima.com',
          subject: 'Hemos recibido tu consulta · 4S Clima',
          html: `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="es">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Hemos recibido tu consulta - 4S Clima</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f6f8; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f4f6f8; padding: 32px 14px;">
    <tr>
      <td align="center">
        <!-- Contenedor Principal (600px máx) -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
          
          <!-- Línea de acento institucional -->
          <tr>
            <td style="background-color: #0284c7; height: 4px; line-height: 4px; font-size: 4px;">&nbsp;</td>
          </tr>

          <!-- Cabecera Institucional con Logo Oficial -->
          <tr>
            <td style="padding: 24px 30px; border-bottom: 1px solid #e2e8f0; background-color: #ffffff;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="left" valign="middle">
                    <img src="https://raw.githubusercontent.com/OnlyAlayy/4S-Clima/main/public/logo-clean.png" alt="4S Clima" width="54" height="55" style="display: block; border: 0; outline: none; text-decoration: none; width: 54px; height: 55px; max-width: 54px;" />
                  </td>
                  <td align="right" valign="middle" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
                    <div style="font-size: 11px; font-weight: 700; color: #0284c7; text-transform: uppercase; letter-spacing: 0.5px;">Ingeniería Térmica</div>
                    <div style="font-size: 11px; color: #64748b; margin-top: 3px;">Recepción de Consulta</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Cuerpo -->
          <tr>
            <td style="padding: 30px;">
              <h1 style="margin: 0 0 14px 0; color: #0f172a; font-size: 20px; font-weight: 700;">¡Gracias por contactarse con 4S Clima!</h1>
              <p style="margin: 0 0 20px 0; color: #475569; font-size: 14px; line-height: 1.6;">
                Estimado/a <strong>${nombre}</strong>, le confirmamos que hemos recibido su consulta referida a <strong>${sector || 'nuestros servicios y proyectos'}</strong>.
              </p>

              <!-- Caja de Compromiso de Respuesta -->
              <div style="background-color: #f0f9ff; border: 1px solid #bae6fd; border-left: 3px solid #0284c7; border-radius: 6px; padding: 16px 18px; margin-bottom: 24px;">
                <div style="color: #0369a1; font-weight: 700; font-size: 13px; margin-bottom: 4px;">Compromiso de respuesta técnica</div>
                <div style="color: #0c4a6e; font-size: 13px; line-height: 1.5;">
                  Nuestro equipo de ingeniería térmica evaluará sus requerimientos y se pondrá en contacto con usted dentro de las próximas <strong>48 horas hábiles</strong>.
                </div>
              </div>

              <!-- Bloque de Trayectoria -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 24px; background-color: #f8fafc; border-radius: 6px; border: 1px solid #e2e8f0;">
                <tr>
                  <td width="50%" align="center" style="border-right: 1px solid #e2e8f0; padding: 14px 10px;">
                    <div style="font-size: 18px; font-weight: 800; color: #0284c7;">31 Años</div>
                    <div style="font-size: 11px; color: #64748b; text-transform: uppercase; font-weight: 600; margin-top: 3px;">Trayectoria en Obras Térmicas</div>
                  </td>
                  <td width="50%" align="center" style="padding: 14px 10px;">
                    <div style="font-size: 15px; font-weight: 800; color: #0f172a;">Carrier · Příhoda</div>
                    <div style="font-size: 11px; color: #64748b; text-transform: uppercase; font-weight: 600; margin-top: 3px;">Representantes en Bs. As.</div>
                  </td>
                </tr>
              </table>

              <!-- Canales Directos -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-top: 1px solid #e2e8f0; padding-top: 20px;">
                <tr>
                  <td style="font-weight: 700; color: #0f172a; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; padding-bottom: 12px;">
                    Canales de atención directa:
                  </td>
                </tr>
                <tr>
                  <td>
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="font-size: 13px; color: #64748b; line-height: 1.6;">
                      <tr>
                        <td valign="middle" style="width: 24px; padding-bottom: 8px;">
                          <img src="https://raw.githubusercontent.com/OnlyAlayy/4S-Clima/main/public/icons/pin.png" alt="Ubicación" width="16" height="16" style="display: block; border: 0; width: 16px; height: 16px;" />
                        </td>
                        <td valign="middle" style="padding-bottom: 8px;">
                          <strong>Oficinas:</strong> Av. Córdoba 1432 8B, CABA, Buenos Aires
                        </td>
                      </tr>
                      <tr>
                        <td valign="middle" style="width: 24px; padding-bottom: 8px;">
                          <img src="https://raw.githubusercontent.com/OnlyAlayy/4S-Clima/main/public/icons/mail.png" alt="Email" width="16" height="16" style="display: block; border: 0; width: 16px; height: 16px;" />
                        </td>
                        <td valign="middle" style="padding-bottom: 8px;">
                          <strong>Email:</strong> <a href="mailto:contacto@cuatroeseclima.com" style="color: #0284c7; text-decoration: none; font-weight: 600;">contacto@cuatroeseclima.com</a>
                        </td>
                      </tr>
                      <tr>
                        <td valign="middle" style="width: 24px; padding-bottom: 8px;">
                          <img src="https://raw.githubusercontent.com/OnlyAlayy/4S-Clima/main/public/icons/globe.png" alt="Sitio Web" width="16" height="16" style="display: block; border: 0; width: 16px; height: 16px;" />
                        </td>
                        <td valign="middle" style="padding-bottom: 8px;">
                          <strong>Sitio Web:</strong> <a href="https://cuatroeseclima.com" style="color: #0284c7; text-decoration: none; font-weight: 600;">cuatroeseclima.com</a>
                        </td>
                      </tr>
                      <tr>
                        <td valign="middle" style="width: 24px;">
                          <img src="https://raw.githubusercontent.com/OnlyAlayy/4S-Clima/main/public/icons/instagram.png" alt="Instagram" width="16" height="16" style="display: block; border: 0; width: 16px; height: 16px;" />
                        </td>
                        <td valign="middle">
                          <strong>Instagram:</strong> <a href="https://instagram.com/cuatroeseclima" target="_blank" style="color: #0284c7; text-decoration: none; font-weight: 600;">@cuatroeseclima</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 18px 30px; background-color: #f8fafc; border-top: 1px solid #e2e8f0; text-align: left; font-size: 11px; color: #94a3b8; line-height: 1.5;">
              Este es un correo automático de confirmación. Si desea agregar detalles técnicos a su consulta, simplemente responda a este mensaje.<br />
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
