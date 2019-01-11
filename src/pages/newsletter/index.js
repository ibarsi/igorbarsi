import React from 'react';
import Helmet from 'react-helmet';

import { SignupForm } from '../../components/SignupForm';
import { buildPageTitle } from '../../utils';

const Subscription = () => {
  const title = buildPageTitle('Free Subscription');
  const description = 'Subscribe to get updates on my latest work.';

  return (
    <div className="content-container">
      <Helmet>
        <title>{title}</title>

        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
      </Helmet>

      <h1 className="title">Stay in the Loop</h1>

      <hr />

      <p className="paragraph">
        <span role="img" aria-label="Emoji">🌟</span> I feel very lucky to have the priviledge to share my knowledge and
        opinions with such a broad audience!
      </p>

      <p className="paragraph">
        <span role="img" aria-label="Emoji">🌍</span> Together, I believe we can continually broaden our reach and impact
        the world by delivering the highest quality content that's guaranteed to
        deliver value and leave a lasting impact.
      </p>

      <p className="paragraph">
        <span role="img" aria-label="Emoji">👇🏼</span> Want to stay up-to-date? Great! Please enter your email and sign up
        below for notifications of my latest work.
      </p>

      <SignupForm />
    </div>
  );
};

export default Subscription;
