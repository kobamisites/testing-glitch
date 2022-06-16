export function structured(node, spec = {}) {
  const { structure = 'div', tagName = 'H' } = spec

  const newStructure = Array.from(node.children).reduce((acc, el) => {
    if (el.tagName.startsWith(tagName)) {
      acc.appendChild(document.createElement(structure))
      acc.children[acc.children.length - 1].appendChild(processStructure({ el, ...spec }))
      return acc
    }

    if (acc.children.length) {
      acc.children[acc.children.length - 1].appendChild(el)
    } else {
      acc.appendChild(el)
    }

    return acc
  }, document.createDocumentFragment())

  node.replaceChildren(newStructure)

  return {
    destroy() {
      return
    }
  }

  // Add new features here
  function processStructure(context) {
    let { el, structure } = context
    // Make el into a summary tag
    if (structure === 'details') {
      const summary = document.createElement('summary')
      summary.textContent = el.textContent
      el = summary
    }
    // Make headings all one smaller than in markdown, i.e. h1 -> h2, h2 -> h3
    if (structure === 'nested') {
      const newHeadingNumber = Number(el.tagName.split('').pop()) + 1
      const heading = document.createElement('H' + newHeadingNumber)
      heading.textContent = el.textContent
      el = heading
    }

    return el
  }
}
