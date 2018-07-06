import React from 'react';
import { Helmet } from 'react-helmet';

import SignupForm from '../components/SignupForm';
import SocialLinks from '../components/SocialLinks';
import { buildPageTitle } from '../utils';

const IndexPage = () => {
  const title = buildPageTitle();
  const description =
    'Igor Barsi is a software developer and writer focused on effective engineering and leadership. You can find links to his writing and work here at igorbarsi.com.';

  return (
    <div>
      <Helmet>
        <title>{title}</title>

        <meta name="description" content={description} />
        <meta property="og:title" content={title} />

        <link
          rel="stylesheet"
          href="//assets.juicer.io/embed.css"
          media="all"
          type="text/css"
        />
        <script type="text/javascript" src="//assets.juicer.io/embed.js" />
      </Helmet>

      <div className="content-container">
        <header>
          <h1 className="title">Hi, I'm Igor Barsi 👋🏼</h1>
        </header>

        <hr />

        <p className="paragraph paragraph--intro">
          👨🏽‍💻 I’m a software developer and writer focused on effective
          engineering and leadership.
        </p>
        <p className="paragraph paragraph--intro">
          👨🏽‍🏫 My goal is to share the lessons and concepts I've learned over the
          years that focus on the “soft” side of what we do to build routines
          and practices that ultimately shape our life and work.
        </p>
        <p className="paragraph paragraph--intro">
          ✍🏼 Much of my writing consists of opinion posts targeted at engineers.
          However, the core concepts are far reaching and applicable to diverse
          disciplines and walks of life.
        </p>
        <p className="paragraph paragraph--intro">
          😄 I don’t have all the answers, but I’m happy to share what I have
          learned in hopes that my thoughts and experiences might impact readers
          in a positive way!
        </p>

        <h2 className="title title--sub">Join Us Now</h2>

        <p className="paragraph paragraph--intro">
          🌟 I feel very lucky to have the priviledge to share my knowledge and
          opinions with such a broad audience!
        </p>

        <p className="paragraph paragraph--intro">
          🌍 Together, I believe we can continually broaden our reach and impact
          the world by delivering the highest quality content that's guaranteed
          to deliver value and leave a lasting impact.
        </p>

        <p className="paragraph paragraph--intro">
          👇🏼 Ready to join us? Great! Please enter your email and sign up for my
          free newsletter below.
        </p>

        <div>
          <SignupForm />
        </div>

        <SocialLinks />
      </div>

      <ul className="juicer-feed" data-feed-id="igorbarsi">
        <h1 className="referral">
          <a href="https://www.juicer.io">Powered by Juicer</a>
        </h1>
      </ul>
    </div>
  );
};
export default IndexPage;
