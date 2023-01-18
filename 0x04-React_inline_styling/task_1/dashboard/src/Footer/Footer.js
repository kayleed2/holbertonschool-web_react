import React from 'react';
import { getFullYear } from '../utils/utils';
import { getFooterCopy } from '../utils/utils';
import './Footer.css';

function Footer() {
  return (
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(0)}</p>
      </footer>
  );
}

export default Footer;
