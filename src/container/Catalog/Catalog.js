import React, { Component } from 'react';

class Catalog extends Component {
  render() {
    return (
      <div>
         <a href="/catalog/product">product</a>
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
