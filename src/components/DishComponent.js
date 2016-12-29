'use strict';

import React from 'react';
import axios from 'axios';
import {Card, CardTitle, Row, Col, Button, Icon} from 'react-materialize';

require('styles//Dish.css');

let dishImage = require('../images/dish.jpg');

axios.request({withCredentials: false});

class DishComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {menu: ''}
  }

  componentDidMount() {
    var _this = this;
    this.serverRequest =
      axios
        .get("https://pru-bot.herokuapp.com/api/menu")
        .then(res => {
          _this.setState({
            menu:  res.data[4] // Selecting a random weekday. TODO: logic for today's menu + image
          })
        });
    console.log(this.state.dish);
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  render() {
    return (
      <div className="dish-component">
        <Row>
          <Col offset="m4" m={4} s={12}>
              <Card header={<CardTitle reveal image={dishImage} waves='light'/>}
                  title={this.state.menu.main_dish}
                  reveal={
                    <p>
                    Acompanhamento: {this.state.menu.basics} <br /><br /> 
                    Salada: {this.state.menu.salad} <br /><br />
                    Sobremesa: {this.state.menu.dessert} <br /><br />
                    </p>
                  }>
                  <p>E como complemento... <b>{this.state.menu.side_dish}</b></p>
              </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

DishComponent.displayName = 'DishComponent';

// Uncomment properties you need
// DishComponent.propTypes = {};
// DishComponent.defaultProps = {};

export default DishComponent;
