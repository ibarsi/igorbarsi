import React from 'react';
import Helmet from 'react-helmet';

export const Template = ({ data }) => {
    const post = data.markdownRemark;

    return <div>
        <Helmet title={`Igor Barsi - ${ post.frontmatter.title }`} />

        <div>
            <h1>
                {post.frontmatter.title}
            </h1>

            <div dangerouslySetInnerHTML={{ __html: post.html }}
            />
        </div>
    </div>;
};

export default Template;

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
