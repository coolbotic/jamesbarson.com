//  See: https://www.gatsbyjs.org/docs/node-apis/

exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
  const config = getConfig()
  if (stage.startsWith("develop") && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "react-dom": "@hot-loader/react-dom",
    }
  }
}

const path = require(`path`)

const makeRequest = (graphql, request) =>
  new Promise((resolve, reject) => {
    resolve(
      graphql(request).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        return result
      })
    )
  })

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const getBlog = makeRequest(
    graphql,
    `
  {
    allContentfulBlog(
      filter: { node_locale: { eq: "en-US" } }
      sort: { order: DESC, fields: createdAt }
    ) 
    {
      edges {
        node {
          id
          slug
        }
      }
    }
  } 
  
  `
  ).then(result => {
    result.data.allContentfulBlog.edges.forEach(({ node }) => {
      createPage({
        path: `blog/${node.slug}`,
        component: path.resolve(`src/templates/blog.js`),
        context: {
          id: node.id,
        },
      })
    })
  })

  return Promise.all([getBlog])
}
