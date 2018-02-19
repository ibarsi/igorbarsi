import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import moment from 'moment';

import './blog.css';

const groupPostsByYear = posts => {
    console.log(posts);

    return posts
    .reduce((acc, { node: post } = {}) => {
        if (!post || !post.frontmatter.title || !post.frontmatter.date) { return acc; }

        const year = moment(post.frontmatter.date).year();

        return Object.assign({}, acc, {
            [ year ]: [ ...acc[ year ] || [], post ],
        });
    }, {});
};

const Blog = ({ data }) => {
    const { edges: posts } = data.allMarkdownRemark;

    const groupedPosts = groupPostsByYear(posts);

    return (
        <div className='content-container blog'>
            <Helmet title='Igor Barsi - Blog' />

            {
                Object.keys(groupedPosts)
                .sort((a, b) => b - a)
                .map(key => {
                    const postsForYear = groupedPosts[ key ];

                    console.log(groupedPosts);
                    console.log(postsForYear);

                    return (
                        <div key={ key }>
                            <h2>
                                { key }
                            </h2>

                            <ul className='blog__list'>
                                {
                                    postsForYear
                                    .map(post => {
                                        return (
                                            <li key={ post.id }
                                                className="blog__list-item">
                                                <BlogListItem { ...post } />
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                    );
                })
            }
        </div>
    );
};

const BlogListItem = ({ frontmatter }) => {
    const date = moment(frontmatter.date).format('MMMM d');

    return (
        <div className="blog__list-item-content">
            <span className="blog__list-item-date">
                { date }
            </span>

            <Link to={ frontmatter.path }
                className='blog__list-item-link'>
                { frontmatter.title }
            </Link>
        </div>
    );
};

export default Blog;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date
            path
          }
        }
      }
    }
  }
`;
