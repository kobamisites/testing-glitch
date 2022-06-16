/**
 * This plugin will eventually become its own package so keep that in mind when developing
 * For now, it is easier to just develop as part of the ksite template
 */

import { readFileSync, existsSync } from 'fs'
import { resolve, dirname } from 'path'
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

  // Merge Site Settings in the markdown files
  mergeSiteSettings({tree, file, siteSettings})

  // Sanitize markdown files that have html with svelte brackets
  sanitizeMarkdownFiles({tree, file, contentRoot, blocksRoot})

  // Add import statements to markdown blocks
  addImportStatementsToMarkdownFiles({tree, file})
}

function mergeSiteSettings(context) {
  const {tree, file, siteSettings} = context
  if (file.filename.endsWith('.md')) {
    visit(tree, mergeSettings)
  }

  // replace settings merge fields in md files with values from the settings file
  // e.g. {business_name} is replaced with the actual business name from settings/site.md
  function mergeSettings(node) {
    Object.keys(siteSettings).forEach(key => {
      const searchFor = `{${key}}`
      node.value = node.value?.replaceAll(searchFor, siteSettings[key] || '')
    })
  }
}

function sanitizeMarkdownFiles(context) {
  const {tree, file, contentRoot, blocksRoot} = context

  if (!file.filename.startsWith(contentRoot)) {
    if (file.filename.startsWith(blocksRoot) && file.filename.endsWith('.md') && tree.children[0]) {
      tree.children.forEach((node) => {
        // Sanitize html blocks except for scripts tags
        if (node.type === 'html' && !node.value.startsWith('<script>')) {
          node.value = node.value.replace(/\{/g, '&lbrace;')
          node.value = node.value.replace(/\}/g, '&rbrace;')
        }
      })
      // TODO: add layout false to block files
      // const node = tree.children[0]
      // const fileStartsWithYaml = node.type === 'yaml'
      // node.value = 'layout: false\n' + node.value
      // console.log(node.value)
      return
    } else {
      return // we ignore files that are outside of content folder
    }
  }
}

function addImportStatementsToMarkdownFiles(context) {
  const {tree, file} = context

  const fileStartsWithScriptTag = tree.children[0]?.value?.startsWith('<script>')
  if (fileStartsWithScriptTag) {
    return // we ignore files that already have a script tag defined
  }

  const componentList = []
  const scriptTag = {
    type: "html",
    value: ""
  }

  visit(tree, 'html', addImportStatements)

  function addImportStatements(node) {
    const regex = /<(?<component>[A-Z]\S*)(?:[\s\S]*\/>|\/>)/g
    const checker = new RegExp(regex.source)

    node.value = node.value.split('\n').map((value) => {
      if (checker.test(value)) {
        const matches = [...value.matchAll(regex)]
        const {component} = matches[0].groups
        if (!componentList.find(c => c === component)) {
          componentList.push(component)
          // console.log({component})
          // scriptTag.value += `\n\timport ${component} from '../blocks/${component}.md'`
          let cmpPath = `${component}.svelte`
          const contentPath = 'content/blocks/' + cmpPath
          const blocksPath = 'blocks/' + cmpPath
          const relativeFilePath = file.filename.replace(root + '/content/', '').replace('.md', '')
          const fileStub = relativeFilePath.replaceAll('/', '-')
          const dir = dirname(file.filename)
        // Check for custom page fragment at same level as page
          const sameFile = file.filename === resolve(dir, `_${component}.md`)
          if (!sameFile && existsSync(resolve(dir, `_${component}.md`))) {
            const pagesPath = dir.replace(root, '').replace('/', '@')
            value = `<SectionBlock Component={${component}} metadata={${component}Meta} context='${fileStub}' name='${component}' />`
            scriptTag.value += `\n\timport ${component}, {metadata as ${component}Meta} from '${pagesPath}/_${component}.md'`
        // Check for reusable custom block in content/blocks
          } else if (existsSync(resolve(root, `content/blocks/${component}.md`))) {
            value = `<SectionBlock Component={${component}} metadata={${component}Meta} context='${fileStub}' name='${component}' />`
            scriptTag.value += `\n\timport ${component}, {metadata as ${component}Meta} from '@content/blocks/${component}.md'`
        // Check for custom Svelte File in content/blocks
          } else if (existsSync(resolve(root, contentPath))) {
             scriptTag.value += `\n\timport ${component} from '@${contentPath}'`
        // Default to Ksite svelte block for matching block md file
          } else {
             scriptTag.value += `\n\timport ${component} from '@/${blocksPath}'`
          }
        }
      }

      return value
    }).join('\n')
  }

  // console.log(file.filename, componentList)

  if (componentList.length) {
    let needsSectionBlockScriptTag = tree.children.some(({type, value}) => type === 'html' && value.includes('<SectionBlock'))
    if (needsSectionBlockScriptTag) {
      scriptTag.value += `\n\timport SectionBlock from '@/blocks/SectionBlock.svelte'`
    }
    scriptTag.value = '<script>' + scriptTag.value + '\n</script>'
    tree.children.push(scriptTag)
  }
}
