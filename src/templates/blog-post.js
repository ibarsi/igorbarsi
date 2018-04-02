import React from 'react';
import Helmet from 'react-helmet';
import moment from 'moment';

import { BASE_URL } from '../config';

import './blog-post.css';

export const Template = ({ data, location }) => {
    const post = data.markdownRemark;

    const url = `${ BASE_URL }${ location.pathname }`;
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
                            <svg className='social__icon social__icon--twitter' version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 612 612' xmlSpace='preserve'>
                                <g>
                                    <g>
                                        <path d='M612,116.258c-22.525,9.981-46.694,16.75-72.088,19.772c25.929-15.527,45.777-40.155,55.184-69.411
                                            c-24.322,14.379-51.169,24.82-79.775,30.48c-22.907-24.437-55.49-39.658-91.63-39.658c-69.334,0-125.551,56.217-125.551,125.513
                                            c0,9.828,1.109,19.427,3.251,28.606C197.065,206.32,104.556,156.337,42.641,80.386c-10.823,18.51-16.98,40.078-16.98,63.101
                                            c0,43.559,22.181,81.993,55.835,104.479c-20.575-0.688-39.926-6.348-56.867-15.756v1.568c0,60.806,43.291,111.554,100.693,123.104
                                            c-10.517,2.83-21.607,4.398-33.08,4.398c-8.107,0-15.947-0.803-23.634-2.333c15.985,49.907,62.336,86.199,117.253,87.194
                                            c-42.947,33.654-97.099,53.655-155.916,53.655c-10.134,0-20.116-0.612-29.944-1.721c55.567,35.681,121.536,56.485,192.438,56.485
                                            c230.948,0,357.188-191.291,357.188-357.188l-0.421-16.253C573.872,163.526,595.211,141.422,612,116.258z' />
                                    </g>
                                </g>
                            </svg>
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
