import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import Header from '../components/Header';

import './normalize.css';
import './main.css';

const TemplateWrapper = ({ children }) => <div>
    <Helmet>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <title>
            Igor Barsi | Breaking the web, one coffee-less commit at a time!
        </title>
        <meta name="description" content="Igor Barsi's personal site." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="theme-color" content="#000000" />

        <link rel="manifest" href="/manifest.json" />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <link rel="shortcut icon" href="/favicon.ico" />

        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Oswald:400,700" />
    </Helmet>

    <div className='content-container'>
        <Header />

        <main>
            { children() }
        </main>
    </div>
</div>;

TemplateWrapper.propTypes = {
    children: PropTypes.func,
};

export default TemplateWrapper;
