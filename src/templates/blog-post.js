import React from 'react';
import Helmet from 'react-helmet';
import moment from 'moment';

import './blog-post.css';

export const Template = ({ data }) => {
    const post = data.markdownRemark;

    return <article>
        <Helmet title={`Igor Barsi - ${ post.frontmatter.title }`} />

        <div className='content-container blog-post__markdown'>
            <header>
                <h1>
                    {post.frontmatter.title}
                </h1>

                <span className='blog-post__byline'>
                    By Igor Barsi | { moment(post.frontmatter.date).format('MMMM d') }
                </span>
            </header>

            <div dangerouslySetInnerHTML={{ __html: post.html }}/>
        </div>
    </article>;
};

export default Template;

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        path
        title
      }
    }
  }
`;
