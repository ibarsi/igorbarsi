import React from 'react';

import * as signupFormStyles from './signup-form.module.css';

export const SignupForm = () => (
  <form
    action="https://igorbarsi.us18.list-manage.com/subscribe/post?u=23241cc8c91d313ea62d65da5&amp;id=bd5c8a81b8"
    method="post"
    id="mc-embedded-subscribe-form"
    name="mc-embedded-subscribe-form"
    className="validate"
    target="_blank"
    noValidate
  >
    <div className={signupFormStyles.container}>
      <input
        className={signupFormStyles.input}
        type="email"
        name="EMAIL"
        placeholder="Email Address"
        required
      />
      <div className={signupFormStyles.hiddenInput} aria-hidden="true">
        <input
          type="text"
          name="b_23241cc8c91d313ea62d65da5_bd5c8a81b8"
          tabIndex="-1"
          value=""
        />
      </div>
      <input
        className={signupFormStyles.button}
        type="submit"
        value="Subscribe"
        name="subscribe"
      />
    </div>
  </form>
);
