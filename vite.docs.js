import { defineConfig } from 'vite'
import jsconfigPaths    from 'vite-jsconfig-paths'
import svgr             from 'vite-plugin-svgr'
import react            from '@vitejs/plugin-react'
import define           from  './vite.defs.js'
import fs               from 'node:fs'

const https = {
  key:  fs.readFileSync('etc/certs/badger-react-ui.local.wardley.org.key'),
  cert: fs.readFileSync('etc/certs/badger-react-ui.local.wardley.org.crt'),
}

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    jsconfigPaths({ root: '../' })
  ],
  root: 'web',
  base: '/badger-react-ui',
  envDir: '../',
  define,
  build: {
    emptyOutDir: true,
    outDir: '../docs',
    chunkSizeWarningLimit: 1800
  },
  server: {
    host: 'badger-react-ui.local.wardley.org',
    port: 3012,
    https
  }
})

