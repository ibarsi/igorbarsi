const path = require('path');

/*
 * Implement the Gatsby API “createPages”. This is called once the
 * data layer is bootstrapped to let plugins create pages from data.
 */
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve('src/templates/blog-post.js');
  const result = await graphql(`
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
  `);

  if (result.errors) {
    throw result.errors;
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const { path: currentPath } = node.frontmatter;

    createPage({
      path: currentPath,
      component: blogPostTemplate,
      context: {
        postPath: currentPath,
      },
    });
  });
};
