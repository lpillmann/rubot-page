'use strict';

import React from 'react';

require('styles//TodaysDate.css');

let TodaysDateComponent = (props) => (
  <div className="todaysdate-component">
  	<p>{props.date}</p>
  </div>
);

TodaysDateComponent.displayName = 'TodaysDateComponent';

// Uncomment properties you need
// TodaysDateComponent.propTypes = {};
// TodaysDateComponent.defaultProps = {};

export default TodaysDateComponent;
