'use strict';

import React from 'react';

require('styles//CallToAction.css');

let messengerImage = require('../images/facebook-messenger-transparent.png');

let CallToActionComponent = (props) => (
  <div className="calltoaction-component">
    <p>Receba o menu completo no celular:</p>
	<a className="waves-effect waves-light btn" href="#"><img src={messengerImage} alt="" />RUbot no Messenger</a>
  </div>
);

CallToActionComponent.displayName = 'CallToActionComponent';

// Uncomment properties you need
// CallToActionComponent.propTypes = {};
// CallToActionComponent.defaultProps = {};

export default CallToActionComponent;
