import React from 'react';

import {
  StackOverflowIcon,
  GitHubIcon,
  TwitterIcon,
  MediumIcon,
  LinkedInIcon,
} from '../Icons';

import './social-links.css';

const SocialLinks = () => (
  <ul className="clearfix social__list">
    <li className="social__list-item">
      <a
        href="http://stackoverflow.com/story/igor-barsi"
        title="Igor Barsi - StackOverflow Story"
        target="blank"
      >
        <StackOverflowIcon />
      </a>
    </li>
    <li className="social__list-item">
      <a
        href="https://github.com/ibarsi"
        title="Igor Barsi - GitHub"
        target="blank"
      >
        <GitHubIcon />
      </a>
    </li>
    <li className="social__list-item">
      <a
        href="https://twitter.com/igorbarsi"
        title="Igor Barsi - Twitter"
        target="blank"
      >
        <TwitterIcon />
      </a>
    </li>
    <li className="social__list-item">
      <a
        href="https://medium.com/@igorbarsi"
        title="Igor Barsi - Medium"
        target="blank"
      >
        <MediumIcon />
      </a>
    </li>
    <li className="social__list-item">
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

export default SocialLinks;
