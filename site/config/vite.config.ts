import { svelte } from '@sveltejs/vite-plugin-svelte'
import viteMainJs from 'vite-main-js'
import windiCSS from 'vite-plugin-windicss'
import frontierPlugin from '@frontierjs/vite-plugin-frontier'
import { resolve } from 'path'
import { minify } from 'html-minifier'
import { defineConfig } from 'vite'
import { config as envConfig } from 'dotenv'
import svelteConfig from './svelte.config'

const nodeEnv = process.env.NODE_ENV
const root = resolve(__dirname, '../')
const frontier = frontierPlugin.default

// Load test or production
if (process.env.NODE_ENV !== 'development') {
  envConfig({ path: resolve(root, `./.env.${nodeEnv}`) })
}

// load default / development
envConfig({path: resolve(root, './env') })

console.log('VITE_API_URL', process.env.VITE_API_URL)

// https://vitejs.dev/config/
export default defineConfig(async ({ command, mode }) => {
  const indexReplace = () => {
    return {
      name: 'html-transform',
      transformIndexHtml(html) {
        return minify(html, {
          collapseWhitespace: true
        })
      }
    }
  }
  const isProduction = mode === 'production'

  let exampleData
  // if (process.env.NODE_ENV === 'development' && process.env.EXAMPLE_DATA_PATH) {
  //   const data = await import(process.env.EXAMPLE_DATA_PATH)
  //   exampleData = data.examples
  // }
  return {
    server: {
      open: false,
      port: process.env.PORT || 8000,
      host: process.env.VITE_HOST_APP ? true : false,
      hmr: {
        overlay: true
      }
    },
    build: {
      polyfillDynamicImport: false,
      cssCodeSplit: false,
      minify: isProduction,
    },
    resolve: {
      alias: {
        '@': resolve(root, '/src'),
        '@content': resolve(root, './content'),
        '@settings': resolve(root, './content/settings')
      }
    },
    plugins: [
      frontier({
        root,
        nodeEnv: process.env.NODE_ENV || 'development',
        exampleData
      }),
      viteMainJs(),
      // https://github.com/windicss/vite-plugin-windicss/blob/main/packages/plugin-utils/src/options.ts
      indexReplace(),
      svelte(svelteConfig),
      windiCSS({
        config: './config/windi.config.js'
      }),
    ]
  }
})
