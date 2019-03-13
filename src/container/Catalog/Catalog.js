import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Catalog extends Component {
  render() {
    return (
      <div>
        <Link to="/catalog/product">About</Link>
        <h1>Catalog page</h1>
        <ul>
          <li>
            <span>Icon</span>
            <span>Электрика</span>
          </li>
          <li>
            <span>Icon</span>
            <span>Компьютеры и сети </span>
          </li>
        </ul>
      </div>
      
    );
  }
}

export default Catalog;
