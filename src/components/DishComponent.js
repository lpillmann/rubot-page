'use strict';

import React from 'react';
import {Card, CardTitle, Row, Col, Button, Icon} from 'react-materialize';

require('styles//Dish.css');

let dishImage = require('../images/dish.jpg');

let DishComponent = (props) => (
  <div className="dish-component">
    <Row>
      <Col offset="m4" m={4} s={12}>
          <Card header={<CardTitle reveal image={dishImage} waves='light'/>}
              title={props.name}
              reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
              <p>{props.description}</p>
          </Card>
      </Col>
    </Row>
  </div>
);

DishComponent.displayName = 'DishComponent';

// Uncomment properties you need
// DishComponent.propTypes = {};
// DishComponent.defaultProps = {};

export default DishComponent;
