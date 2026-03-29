import React, { Fragment } from 'react';

import { Layout } from '../layouts';
import { SignupForm } from '../components/SignupForm';
import { SocialLinks } from '../components/SocialLinks';
import { RecentBlogPosts } from '../components/RecentBlogPosts';
import { Seo } from '../components/Seo';
import { buildPageTitle } from '../utils';
import { FEATURE_SWITCHES } from '../config';
import * as homeStyles from './index.module.css';

const title = buildPageTitle();
const description =
  'Igor Barsi is a software developer and writer focused on effective engineering and leadership. You can find links to his writing and work here at igorbarsi.com.';

const IndexPage = ({ location }) => {
  return (
    <Layout location={location}>
      <div className={homeStyles.page}>
        <section className={homeStyles.hero}>
          <div className={homeStyles.heroIntro}>
            <p className={homeStyles.eyebrow}>
              Software developer, writer, and engineering lead
            </p>
            <h1 className="title">
              Ideas for building better teams, habits, and software.
            </h1>
            <p className={`paragraph paragraph--intro ${homeStyles.summary}`}>
              I write about the human side of engineering: delivery, leadership,
              communication, and the routines that shape durable technical work.
            </p>

            <div className={homeStyles.heroActions}>
              <a href="/blog" className={homeStyles.primaryAction}>
                Read the blog
              </a>
              <a
                href="https://www.linkedin.com/in/ibarsi/"
                className={homeStyles.secondaryAction}
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>

          <aside className={homeStyles.heroPanel}>
            <p className={homeStyles.panelLabel}>What you will find here</p>
            <ul className={homeStyles.panelList}>
              <li>Practical writing for engineers and leaders</li>
              <li>Lessons on process, clarity, and collaboration</li>
              <li>Thoughtful opinions shaped by real delivery work</li>
            </ul>
          </aside>
        </section>

        <section className={homeStyles.storyGrid}>
          <article className={homeStyles.storyCard}>
            <p className={homeStyles.cardEyebrow}>Focus</p>
            <h2 className={homeStyles.cardTitle}>
              Effective engineering over empty motion.
            </h2>
            <p className="paragraph">
              Much of my writing is aimed at engineers, but the themes travel
              well: clear communication, disciplined habits, and systems that
              help people do meaningful work together.
            </p>
          </article>

          <article className={homeStyles.storyCard}>
            <p className={homeStyles.cardEyebrow}>Approach</p>
            <h2 className={homeStyles.cardTitle}>
              Opinionated, practical, and grounded.
            </h2>
            <p className="paragraph">
              I do not claim to have all the answers. I share what has proven
              useful, where teams tend to struggle, and the patterns that seem
              to compound over time.
            </p>
          </article>
        </section>

        <section className={homeStyles.postsSection}>
          <div className={homeStyles.sectionHeading}>
            <div>
              <p className={homeStyles.eyebrow}>Latest writing</p>
              <h2 className={homeStyles.sectionTitle}>Recent blog posts</h2>
            </div>
            <a href="/blog" className={homeStyles.sectionLink}>
              View all posts
            </a>
          </div>

          <RecentBlogPosts limit={3} />
        </section>

        <section className={homeStyles.contactSection}>
          <div className={homeStyles.contactCopy}>
            <p className={homeStyles.eyebrow}>Elsewhere</p>
            <h2 className={homeStyles.sectionTitle}>
              Follow the work outside the blog.
            </h2>
            <p className="paragraph">
              The site should feel more alive than it used to, but the core goal
              stays the same: publish useful ideas and make them easy to find.
            </p>
          </div>

          <div className={homeStyles.socialWrap}>
            <SocialLinks />
          </div>
        </section>

        {FEATURE_SWITCHES.NEWSLETTER && (
          <section className={`${homeStyles.newsletter} content-container`}>
            <div className={homeStyles.sectionHeading}>
              <div>
                <p className={homeStyles.eyebrow}>Stay in the loop</p>
                <h2 className={homeStyles.sectionTitle}>
                  Get notified when new writing goes live.
                </h2>
              </div>
            </div>

            <p className="paragraph">
              If you want updates without checking back manually, subscribe and
              I will send new posts your way.
            </p>

            <Fragment>
              <SignupForm />
            </Fragment>
          </section>
        )}
      </div>
    </Layout>
  );
};
export default IndexPage;

export const Head = ({ location }) => (
  <Seo description={description} pathname={location.pathname} title={title} />
);
