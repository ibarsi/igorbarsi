import React from 'react';

import {
  GitHubIcon,
  LinkedInIcon,
  MediumIcon,
  StackOverflowIcon,
  TwitterIcon,
} from '../Icons';

import socialLinkStyles from './social-links.module.css';

export const SocialLinks = () => (
  <ul className={socialLinkStyles.list}>
    <li className={socialLinkStyles.listItem}>
      <a
        href="http://stackoverflow.com/story/igor-barsi"
        title="Igor Barsi - StackOverflow Story"
        target="blank"
      >
        <StackOverflowIcon />
      </a>
    </li>
    <li className={socialLinkStyles.listItem}>
      <a
        href="https://github.com/ibarsi"
        title="Igor Barsi - GitHub"
        target="blank"
      >
        <GitHubIcon />
      </a>
    </li>
    <li className={socialLinkStyles.listItem}>
      <a
        href="https://twitter.com/igorbarsi"
        title="Igor Barsi - Twitter"
        target="blank"
      >
        <TwitterIcon />
      </a>
    </li>
    <li className={socialLinkStyles.listItem}>
      <a
        href="https://medium.com/@igorbarsi"
        title="Igor Barsi - Medium"
        target="blank"
      >
        <MediumIcon />
      </a>
    </li>
    <li className={socialLinkStyles.listItem}>
      <a
        href="https://www.linkedin.com/in/ibarsi/"
        title="Igor Barsi - LinkedIn"
        target="blank"
      >
        <LinkedInIcon />
      </a>
    </li>
  </ul>
);
