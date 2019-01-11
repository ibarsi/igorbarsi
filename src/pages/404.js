import React from 'react';
import { Helmet } from 'react-helmet';

const NotFoundPage = () => {
  const title = 'Not Found - 404';
  const description =
    'Oops! Page not found :( Please return to www.igorbarsi.com.';

  return (
    <div>
      <Helmet>
        <title>{title}</title>

        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
      </Helmet>

      <div className="content-container">
        <header>
          <h1 className="title">Oops! Page not found <span role="img" aria-label="Emoji">😞</span></h1>
        </header>

        <p className="paragraph paragraph--intro">
          Looks like we weren't able to find the page you were looking for.
          Sorry about that!
        </p>
      </div>
    </div>
  );
};
export default NotFoundPage;
