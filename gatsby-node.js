const path = require('path');

/*
 * Implement the Gatsby API “createPages”. This is called once the
 * data layer is bootstrapped to let plugins create pages from data.
 */
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('src/templates/blog-post.js');

    // Query for markdown nodes to use in creating pages.
    resolve(
      graphql(`
        {
          allMarkdownRemark(limit: 1000) {
            edges {
              node {
                frontmatter {
                  path
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        // Create pages for each markdown file.
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          const { path: currentPath } = node.frontmatter;

          createPage({
            path: currentPath,
            component: blogPostTemplate,
          });
        });
      }),
    );
  });
};
