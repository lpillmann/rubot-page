require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let pigeonImage = require('../images/pigeon.png');
let dishImage = require('../images/dish.jpg');

// RUbot components
class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <img src={pigeonImage} alt="RUbot pigeon" />
        <h1>RUbot</h1>
        <h3>O que tem no RU hoje?</h3>
      </div>
      );
  }
}

class NavigationMenu extends React.Component {
  render() {
    return (
      <div className="navbar">
        <ul>
          <li><a href="#">Cardápio do dia</a></li>
          <li><a href="#">Sobre</a></li>
        </ul>
      </div>
      );
  }
}

class TodayDate extends React.Component {
  render() {
    return (
      <div className="date">
        <p>(use a prop here)</p>
      </div>
      );
  }
}

class Dish extends React.Component {
  render() {
    return (
      <div className="dish">
        <img src={dishImage} alt="Today's dish" />
        <h2>(Dish name)</h2> 
        <p>(Dish description)</p>
      </div>
      );
  }
}

class CallToAction extends React.Component {
  render() {
    return (
      <div className="call-to-action">
        <p>Receba o menu completo no celular</p>
        <a href="#"><button type="button">Chatbot no messenger</button></a>
      </div>
      );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <p>Oferecimento: <a href="http://hackinggigs.com/">Hacking Gigs</a></p>
        <ul className="icons">
          <li><a href=""></a></li>
          <li><a href=""></a></li>
        </ul>
      </div>
      );
  }
}



// Main component
class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Header />
        <NavigationMenu />
        <TodayDate />
        <Dish />
        <CallToAction />
        <Footer />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};








export default AppComponent;
