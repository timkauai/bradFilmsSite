const path = require('path');

exports.createPages = ({
    boundActionCreators,
    graphql
}) => {
    const {
        createPage
    } = boundActionCreators

    const postTemplate = path.resolve('src/templates/albumPage.js');

    return graphql(`
        {
            allMarkdownRemark {
                edges {
                    node {
                        html 
                        id 
                        frontmatter {
                            path
                            title
                            location
                            dates
                        }
                    }
                }
            }
        }
    `).then(res => {
        if (res.errors) {
            return Promise.reject(res.errors)
        }

        res.data.allMarkdownRemark.edges.forEach(({
            node
        }) => {
            if (node.frontmatter.path != "/" && node.frontmatter.path != "/projects") {
                createPage({
                    path: node.frontmatter.path,
                    component: postTemplate
                })
            }
        })
    })
}