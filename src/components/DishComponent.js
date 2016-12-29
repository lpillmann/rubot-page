'use strict';

import React from 'react';
import {Card, CardTitle, Row, Col, Button, Icon} from 'react-materialize';

require('styles//Dish.css');

let dishImage = require('../images/dish.jpg');

class DishComponent extends React.Component {
  render() {
    return (
      <div className="dish-component">
        <Row>
          <Col offset="m4" m={4} s={12}>
              <Card header={<CardTitle reveal image={dishImage} waves='light'/>}
                  title={this.props.name}
                  reveal={<p>{this.props.reveal}</p>}>
                  <p>{this.props.description}</p>
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
