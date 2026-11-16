import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import handler from './api/contacto'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  Object.assign(process.env, env)

  return {
    plugins: [
      tailwindcss(),
      react(),
      {
        name: 'local-api-middleware',
        configureServer(server) {
          server.middlewares.use('/api/contacto', (req, res) => {
            let body = ''
            req.on('data', chunk => { body += chunk })
            req.on('end', async () => {
              try {
                if (body) {
                  (req as any).body = JSON.parse(body)
                }
              } catch {
                (req as any).body = {}
              }
              const vercelRes: any = {
                status(code: number) {
                  res.statusCode = code
                  return this
                },
                setHeader(name: string, value: string) {
                  res.setHeader(name, value)
                  return this
                },
                json(data: any) {
                  res.setHeader('Content-Type', 'application/json')
                  res.end(JSON.stringify(data))
                }
              }
              await handler(req as any, vercelRes)
            })
          })
        }
      }
    ]
  }
})
