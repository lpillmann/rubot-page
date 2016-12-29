'use strict';

import React from 'react';

require('styles//Header.css');
let pigeonImage = require('../images/pigeon.png');

let HeaderComponent = (props) => (
  <div className="header-component">
    <img src={pigeonImage} alt="RUbot pigeon" />
    <h1>RUbot</h1>
    <h2>O chatbot mais querido da UFSC</h2>
    <h3>O que tem no RU hoje?</h3>
  </div>
);

HeaderComponent.displayName = 'HeaderComponent';

// Uncomment properties you need
// HeaderComponent.propTypes = {};
// HeaderComponent.defaultProps = {};

export default HeaderComponent;
