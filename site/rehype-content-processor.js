/**
 * This plugin will eventually become its own package so keep that in mind when developing
 * For now, it is easier to just develop as part of the ksite template
 */

import { readFileSync, existsSync } from 'fs'
import { resolve } from 'path'
import fm from 'front-matter'
import { visit } from 'unist-util-visit'

const root = process.cwd()

/** get site settings for merging fields **/
let settingsFile = readFileSync((resolve(root, './content/settings/site.md')), {encoding:'utf8', flag:'r'})
let siteSettings = fm(settingsFile).attributes

const contentRoot = resolve(root, './content/pages')
const blocksRoot = resolve(root, './content/blocks')
// console.log({contentRoot, blocksRoot})


export default (options) => (tree, file) => {
  // Add target="self" to a's that aren't in Routify pages
  addTargetSelfToMediaLinks({tree, file})

}

function addTargetSelfToMediaLinks(context) {
  const {tree} = context
  visit(tree, 'element', addTargetAttr)

  function addTargetAttr(node) {
    if (node.tagName !== 'a') return

    node.properties.class = 'content-link'
    const regex = /^\/media/
    if (node.properties?.href.match(regex)) {
      node.properties.target = 'self'
      node.properties.class += ' internal'
    }
  }
}