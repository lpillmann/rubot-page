require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import {Card, CardTitle, Row, Col, Button, Icon} from 'react-materialize';
//import "react-materialize";

let pigeonImage = require('../images/pigeon.png');
let dishImage = require('../images/dish.jpg');

//let dish = {'name' : 'Almôndegas', 'description' : 'Bolinhas de carne com ou sem molho dependendo da nossa sorte'};

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
    var date = this.props.date;  

    return (
      <div className="date">
        <p>{date}</p>
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

class DishCard extends React.Component {
  render() {
    var dishName = this.props.name;
    var dishDescription = this.props.description;  

    return (
      <div className="dish-card">
        <Row>
          <Col offset="m4" m={4} s={12}>
              <Card header={<CardTitle reveal image={"images/dish.jpg"} waves='light'/>}
                  title={dishName}
                  reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                  <p>{dishDescription}</p>
              </Card>
          </Col>
        </Row>
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
          <li><a href="https://github.com/hackinggigs"><span className="fa fa-github"></span></a></li>
          <li><a href=""></a><span className="fa fa-facebook-square"></span></li>
          <li><a href=""></a><span className="fa fa-rss"></span></li>
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
        <TodayDate date="Terça-feira (27/12/2016)"/>
        <DishCard name='Almôndegas' description='Bolinhas de carne com ou sem molho dependendo da nossa sorte' />
        <CallToAction />
        <Footer />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};


export default AppComponent;
