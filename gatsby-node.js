const path = require("path")


exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const productTemplate = path.resolve('./src/templates/product.jsx')
    const result = await graphql(`
    query MyNodeQuery {
        allDbJson {
          nodes {
            id
            name
            price
            quantity
            url {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    `)
    result.data.allDbJson.nodes.forEach(node=>{
        createPage({
            path:`/shop/${node.name}`,
            component:productTemplate,
            context:{
                product: node.id
            }
        })
    })
}

