import React, {Component} from 'react';
import Card from './Card.js';
import {term} from './SearchBar.js';

class CardMatrix extends Component {
  constructor() {
        super();
        this.state = { num: ''}
    }
  render() {
    return(
      <div className="CardMatrix">
        <div className="CardRow1">
        <Card/>
        <Card/>
        <Card/>
        </div>
        <div className="CardRow2">
        <Card/>
        <Card/>
        <Card/>
        </div>
      </div>
    );
  }
}

export default CardMatrix
