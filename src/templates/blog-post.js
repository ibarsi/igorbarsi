import React from 'react';
import Helmet from 'react-helmet';
import moment from 'moment';

import { TwitterIcon } from '../components/Icons';
import { buildPageTitle } from '../utils';
import { BASE_URL } from '../config';

import './blog-post.css';

export const Template = ({ data, location }) => {
    const post = data.markdownRemark;

    const url = `${ BASE_URL }${ location.pathname }`;
    const title = buildPageTitle(post.frontmatter.title);
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
                    By Igor Barsi <span className='separator'></span> { moment(post.frontmatter.date).format('MMMM Do, YYYY') }
                </span>
            </header>

            <div className='blog-post__content'
                dangerouslySetInnerHTML={{ __html: post.html }}/>

            <hr className='blog-post__hard-break' />

            <footer className='blog-post__footer'>
                <p>
                    Thanks for taking the time to read this post!
                </p>

                <p>
                    If you liked what you read and think others might enjoy it too, please share below.
                </p>

                <ul className='blog-post__share_list'>
                    <li className='blog-post__share-list-item'>
                        <a href={ `https://twitter.com/intent/tweet?url=${ url }&text=${ post.frontmatter.title }&via=igorbarsi` } title='Share Post to Twitter' target='blank'>
                            <TwitterIcon />
                        </a>
                    </li>
                </ul>
            </footer>
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
