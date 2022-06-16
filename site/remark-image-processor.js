// https://stackoverflow.com/questions/69166462/cant-require-remark-and-rehype-plugins-for-gatsby-plugin-mdx
require = require('esm')(module)
const {visit} = require('unist-util-visit')
const {resolve} = require('path')


module.exports = (options) => (tree, file) => {
  const contentRoot = resolve(__dirname, '@content')
  if (!file.filename.startsWith(contentRoot)) {
    return // we ignore files that are outside of content folder
  }

  visit(tree, 'image', copyImages)
  // console.log(file.filename)

  function copyImages(node) {
    const {url, alt} = node
    // console.log(node)
    if (url.startsWith('https')) {
      const fileName = alt.replace(/ /g, '-')
      const newPath = __dirname + 'images/' + fileName
      console.log({newPath})
      // const file = fs.createWriteStream(newPath)
      https.get(url, (res) => res.pipe(file))
      node.url = newPath
    }
  }
}