import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import AppContext from '../App/AppContext';

export default function Footer() {
  return (
    <AppContext.Consumer>
      {(context) => (
        <p>
          Copyright {getFullYear()}
          {' - '}
          {getFooterCopy()}
          {context.user.isLoggedIn ? (
            <p>
              <a href="#">Contact us</a>
            </p>
          ) : null}
        </p>
      )}
    </AppContext.Consumer>
  );
}
