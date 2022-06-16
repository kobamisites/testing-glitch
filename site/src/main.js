import HMR from '@roxi/routify/hmr'
import App from '@/App.svelte'

import '@/core/preload'

import 'virtual:frontier'

import 'virtual:windi.css'
import 'virtual:windi-devtools'

import '@settings/fonts.scss'
import '@/app.scss'
import '@settings/styles.scss'


const app = HMR(App, { target: document.body }, 'app')

export default app
