import React from 'react';
import Helmet from 'react-helmet';

import SignupForm from '../../components/SignupForm';
import { buildPageTitle } from '../../utils';

const Newsletter = () => {
    const title = buildPageTitle('Free Newsletter');
    const description = 'Sign up for this free newsletter that will teach you the skills you need to become an effective software engineer and leader through shared lessons and concepts.';

    return <div className='content-container'>
        <Helmet>
            <title>
                { title }
            </title>

            <meta name='description' content={ description } />
            <meta property='og:title' content={ title } />
        </Helmet>
        <h1 className='title'>
          Join my Weekly Newsletter
        </h1>

        <hr />

        <p className='paragraph'>
            {'Join us in our quest to expand our knowledge of software engineering and leadership by sharing lessons and concepts that focus on the “soft” side of what we do to build routines and practices that ultimately shape our life and work.'}
        </p>

        <p className='paragraph'>
            {'Just enter your email address below and click'} <b>SUBSCRIBE</b>.
        </p>

        <SignupForm />
    </div>;
};

export default Newsletter;
