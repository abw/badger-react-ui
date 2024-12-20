import { defineConfig } from 'vite'
import jsconfigPaths    from 'vite-jsconfig-paths'
import svgr             from 'vite-plugin-svgr'
import react            from '@vitejs/plugin-react'
import define           from  './vite.defs.js'
import mdx              from '@mdx-js/rollup'
import rehypeCodeProps  from 'rehype-mdx-code-props'
import fs               from 'node:fs'

const https = {
  key:  fs.readFileSync('etc/certs/badger-react-ui.local.wardley.org-key.pem'),
  cert: fs.readFileSync('etc/certs/badger-react-ui.local.wardley.org.pem'),
}

export default defineConfig({
  plugins: [
    {
      enforce: 'pre',
      ...mdx({
        rehypePlugins: [rehypeCodeProps],
        providerImportSource: '@mdx-js/react'
      })
    },
    react({
      include: /\.(jsx|mdx)$/
    }),
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

