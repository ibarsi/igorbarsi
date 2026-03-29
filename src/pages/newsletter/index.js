import React from 'react';

import { Layout } from '../../layouts';
import { SignupForm } from '../../components/SignupForm';
import { Seo } from '../../components/Seo';
import { buildPageTitle } from '../../utils';

const Newsletter = ({ location }) => {
  return (
    <Layout location={location}>
      <div className="content-container">
        <h1 className="title">Stay in the Loop</h1>

        <hr />

        <p className="paragraph">
          <span role="img" aria-label="Emoji">
            🌟
          </span>{' '}
          I feel very lucky to have the priviledge to share my knowledge and
          opinions with such a broad audience!
        </p>

        <p className="paragraph">
          <span role="img" aria-label="Emoji">
            🌍
          </span>{' '}
          Together, I believe we can continually broaden our reach and impact
          the world by delivering the highest quality content that&apos;s
          guaranteed to deliver value and leave a lasting impact.
        </p>

        <p className="paragraph">
          <span role="img" aria-label="Emoji">
            👇🏼
          </span>{' '}
          Want to stay up-to-date? Great! Please enter your email and sign up
          below for notifications of my latest work.
        </p>

        <SignupForm />
      </div>
    </Layout>
  );
};

export default Newsletter;

export const Head = ({ location }) => (
  <Seo
    description="Subscribe to get updates on my latest work."
    pathname={location.pathname}
    title={buildPageTitle('Free Subscription')}
  />
);
