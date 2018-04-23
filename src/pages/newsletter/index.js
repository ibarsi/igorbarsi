import React from 'react';

import SignupForm from '../../components/SignupForm';

const Newsletter = () => {
    return <div className='content-container'>
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
