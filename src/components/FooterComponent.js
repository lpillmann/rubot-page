'use strict';

import React from 'react';

require('styles//Footer.css');

let FooterComponent = (props) => (
  <div className="footer-component">
    <p>Oferecimento: <a href="http://hackinggigs.com/">Hacking Gigs</a></p>
    <ul className="icons">
      <li><a href="https://github.com/hackinggigs"><span className="fa fa-github"></span></a></li>
      <li><a href="https://www.facebook.com/PRUBot-1841712192718317/?fref=ts"><span className="fa fa-facebook-square"></span></a></li>
      <li><a href="http://hackinggigs.com/"><span className="fa fa-rss"></span></a></li>
    </ul>
  </div>
);

FooterComponent.displayName = 'FooterComponent';

// Uncomment properties you need
// FooterComponent.propTypes = {};
// FooterComponent.defaultProps = {};

export default FooterComponent;
