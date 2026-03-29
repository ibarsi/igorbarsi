import React from 'react';

import {
  GitHubIcon,
  LinkedInIcon,
  MediumIcon,
  StackOverflowIcon,
  TwitterIcon,
} from '../Icons';

import * as socialLinkStyles from './social-links.module.css';

export const SocialLinks = () => (
  <ul className={socialLinkStyles.list}>
    <li className={socialLinkStyles.listItem}>
      <a
        href="http://stackoverflow.com/story/igor-barsi"
        title="Igor Barsi - StackOverflow Story"
        target="_blank"
        rel="noreferrer"
      >
        <StackOverflowIcon />
      </a>
    </li>
    <li className={socialLinkStyles.listItem}>
      <a
        href="https://github.com/ibarsi"
        title="Igor Barsi - GitHub"
        target="_blank"
        rel="noreferrer"
      >
        <GitHubIcon />
      </a>
    </li>
    <li className={socialLinkStyles.listItem}>
      <a
        href="https://twitter.com/igorbarsi"
        title="Igor Barsi - Twitter"
        target="_blank"
        rel="noreferrer"
      >
        <TwitterIcon />
      </a>
    </li>
    <li className={socialLinkStyles.listItem}>
      <a
        href="https://medium.com/@igorbarsi"
        title="Igor Barsi - Medium"
        target="_blank"
        rel="noreferrer"
      >
        <MediumIcon />
      </a>
    </li>
    <li className={socialLinkStyles.listItem}>
      <a
        href="https://www.linkedin.com/in/ibarsi/"
        title="Igor Barsi - LinkedIn"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedInIcon />
      </a>
    </li>
  </ul>
);
