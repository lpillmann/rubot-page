'use strict';

import React from 'react';

require('styles//TodaysDate.css');

String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

class TodaysDateComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()}
  }

  componentDidMount() {
    this.setState({
      date: new Date()
    });
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div className="todaysdate-component">
        <p>{this.state.date.toLocaleDateString('pt-BR', {weekday: 'long'}).capitalizeFirstLetter() + ', ' + this.state.date.toLocaleDateString('pt-BR')}</p>
      </div>  
      );
  }
}

TodaysDateComponent.displayName = 'TodaysDateComponent';

// Uncomment properties you need
// TodaysDateComponent.propTypes = {};
// TodaysDateComponent.defaultProps = {};

export default TodaysDateComponent;
