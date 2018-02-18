import React from 'react';
import { Helmet } from 'react-helmet';

const IndexPage = () => <div>
    <Helmet>
        <link rel="stylesheet" href="//assets.juicer.io/embed.css" media="all" type="text/css" />
        <script type="text/javascript" src="//assets.juicer.io/embed.js"></script>
    </Helmet>

    <ul className='juicer-feed' data-feed-id='igorbarsi'>
        <h1 className='referral'>
            <a href='https://www.juicer.io'>
                Powered by Juicer
            </a>
        </h1>
    </ul>
</div>;

export default IndexPage;
