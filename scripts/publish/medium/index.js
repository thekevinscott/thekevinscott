const helpers = require('../common')
// const fs = require('fs');
const remarkMedium = require('./remark-medium')
const client = require('./client')

const publishToMedium = async pathsToPosts => {
  console.log(`=========== MEDIUM ===========`)
  for (let path of pathsToPosts) {
    try {
      console.log(`----------- ${path.split('/').pop()} -----------`)
      const transformedPost = await helpers.transformPostFromPath(
        path,
        remarkMedium
      )
      // console.log(transformedPost)
      const { frontmatter, postUrl } = transformedPost;
      console.log(
        `Creating post "${frontmatter.title}" (${postUrl}) on medium ...`
      );
      // fs.writeFileSync('/www/thekevinscott/foo.txt', transformedPost.content);
      const response = await client.createPost(transformedPost)
      console.log(
        `Published to medium: ${response.url}\n${JSON.stringify(response)}`
      )
    } catch (ex) {
      console.log(ex)
    }
  }
}

module.exports = publishToMedium
