import React from 'react';

import { BASE_URL, FB_APP_ID } from '../../config';

const DEFAULT_IMAGE = '/default_share_image.jpg';

export const Seo = ({
  description,
  image = DEFAULT_IMAGE,
  pathname = '/',
  title,
  type = 'website',
}) => {
  const url = `${BASE_URL}${pathname}`;
  const imageUrl = image.startsWith('http') ? image : `${BASE_URL}${image}`;

  return (
    <>
      <html lang="en" />
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="theme-color" content="#f3efe6" />
      <meta name="description" content={description} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@igorbarsi" />
      <meta name="twitter:creator" content="@igorbarsi" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="Igor Barsi" />
      <meta property="og:title" content={title} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      {FB_APP_ID && <meta property="fb:app_id" content={FB_APP_ID} />}

      <title>{title}</title>
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
    </>
  );
};
