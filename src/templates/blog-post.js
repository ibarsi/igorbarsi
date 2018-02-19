import React from 'react';
import Helmet from 'react-helmet';
import moment from 'moment';

import './blog-post.css';

export const Template = ({ data }) => {
    const post = data.markdownRemark;

    const title = `Igor Barsi | ${ post.frontmatter.title }`;
    const description = post.excerpt;

    return <article>
        <Helmet>
            <title>
                { title }
            </title>
            <meta name='description' content={ description } />

            <meta property='og:title' content={ title } />
            <meta property='og:description' content={ description } />
            <meta property='og:type' content='article' />
            <meta property="article:author" content="https://www.facebook.com/IgorBarsi" />
            <meta property="article:publisher" content="https://www.facebook.com/IgorBarsi" />
        </Helmet>

        <div className='content-container blog-post__markdown'>
            <header className='blog-post__header'>
                <h1 className='blog-post__header-headline'>
                    {post.frontmatter.title}
                </h1>

                <span className='blog-post__header-byline'>
                    By Igor Barsi <span className='blog-post__header-byline-separator'>|</span> { moment(post.frontmatter.date).format('MMMM d') }
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
            excerpt(pruneLength: 250)
            frontmatter {
                date
                path
                title
            }
        }
    }
`;
