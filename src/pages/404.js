import React from 'react';

import { Layout } from '../layouts';
import { Seo } from '../components/Seo';

const NotFoundPage = ({ location }) => {
  return (
    <Layout location={location}>
      <div className="content-container">
        <header>
          <h1 className="title">
            Oops! Page not found{' '}
            <span role="img" aria-label="Emoji">
              😞
            </span>
          </h1>
        </header>

        <p className="paragraph paragraph--intro">
          Looks like we weren&apos;t able to find the page you were looking for.
          Sorry about that!
        </p>
      </div>
    </Layout>
  );
};
export default NotFoundPage;

export const Head = ({ location }) => (
  <Seo
    description="Oops! Page not found :( Please return to www.igorbarsi.com."
    pathname={location.pathname}
    title="Not Found - 404"
  />
);
