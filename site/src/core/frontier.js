import { get } from 'svelte/store'
import { page } from '@/core/router'

export function appendScripts(document, htmlString) {
  const tag = 'script'
  const appendToBody = _appendToBody(document, tag)

  getDataFromHtmlString(htmlString, {tags: [tag]})
  .forEach(appendToBody)
}

export function _appendToBody(document, element) {
  return (spec) => {
      const {src, ...attrs} = spec
      let el = document.createElement(element)
      el.src = src
      Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, value))
      document.body.appendChild(el)
    }
}

export function getPageClasses() {
  return get(page).path.slice(1).split('/').join('_')
}

export function getDataFromHtmlString(htmlString, options={}) {
  const {tags} = options

  function getFromRegex(string, regex) {
    return Array.from(string.matchAll(regex), (m) => m[0].trim())
  }
  function getAttrs(array) {
    return array.map((attr) => attr.split("=").map((i) => i.split('"').join('')))
  }


  const tagRegex = new RegExp(/<.+?>/g)
  const attrReg = new RegExp(/\s+(\w+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^><"'\s]+)))?(?=(?:\s+\w+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^><"'\s]+))?)*\s*\/?\s*>)/g)

  return getFromRegex(htmlString, tagRegex).filter((tag) => tags.some((t) => tag.startsWith('<' + t)))
  // .map(t => console.log(t))
  .map((tag) => getFromRegex(tag, attrReg))
  // arr = [] of attr strings  'type="hidden"'
  .map((arr) =>  getAttrs(arr).reduce((acc, [key, value]) => (acc[key] = value, acc), {}))
}
