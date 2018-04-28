import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import { BASE_URL, FB_APP_ID } from '../config';
import Header from '../components/Header';
import Footer from '../components/Footer';

import './normalize.css';
import './main.css';

const TemplateWrapper = ({ children, location }) => {
  const url = `${BASE_URL}${location.pathname}`;

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="theme-color" content="#000000" />

        <link rel="manifest" href="/manifest.json" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-16x16.png"
          sizes="16x16"
        />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="canonical" href={url} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@igorbarsi" />
        <meta name="twitter:creator" content="@igorbarsi" />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="profile" />
        <meta property="og:site_name" content="Igor Barsi" />
        <meta
          property="og:image"
          content={`${BASE_URL}/default_share_image.jpg`}
        />
        <meta property="fb:app_id" content={FB_APP_ID} />

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Oswald:400,700"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Lato:400,700"
        />
      </Helmet>

      <Header />

      <main className="site-container">{children()}</main>

      <Footer />
    </div>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
