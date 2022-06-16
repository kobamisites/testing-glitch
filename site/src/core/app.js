import { writable } from 'svelte/store'

export const currentUser = writable(null)
export const currentAccount = writable(null)

export const apiUrl = import.meta.env.VITE_API_URL
export const embedsUrl = import.meta.env.VITE_EMBEDS_URL

const message = writable({})

export const appMessage = {
  subscribe: message.subscribe,
  set: (msg) => {
    msg.type = msg.type || 'info'
    message.set(msg)
    setTimeout(() => message.set({}), 1200)
  },
}

export const pageLayout = writable('standard')
export const title = writable(null)
export const sidebarState = writable('hidden')

export function copyText(text, event) {
  let styling = 'background:white;margin:0 1rem;padding:1rem;'
  if (event) {
    styling += `left:${event.clientX - 90}px;top:${event.clientY - 50}px`
  }

  navigator.clipboard.writeText(text)
  document.body.insertAdjacentHTML(
    'beforeend',
    `
      <div id="copy-text" class="rounded shadow text-sm absolute" style="${styling}"> Copied!</div>
    `
  )
  setTimeout(() => {
    document.getElementById('copy-text').remove()
  }, 1500)
}
