import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { axiosMain } from '../../../axios-path-config';
import classes from './CatalogNames.module.scss';
import FilterCatalog from './FilterCatalog/FilterCatalog';

import ProductPreView from '../CatalogNames/Product/ProductPreView/ProductPreView';
class CatalogNames extends Component {
  state = {
    products: []
  }

  componentDidMount() {
    axiosMain.get('/category-phone')
        .then(response => {
            this.setState({products: response.data.products})
        })
        .catch(error => {
            console.log(error)
        });   
  }

  render() {
    let product;

    if (this.state.products) {
      product = this.state.products.map(product => {
        return <ProductPreView key={product.id} {...this.props} {...product} />
      })
    }
    return (
      <div>
        <h1>Мобильные телефоны</h1>

        <div className={classes["shema-grid"]}>
          <div className={classes["shema-grid__left-column"]}>wrap 1
            <FilterCatalog />
          </div>
          <div className={classes["shema-grid__center-column"]}>
            <div className={classes["schema-products"]}>
              {product}
            </div>
          </div>
        </div>
      
      </div>
    )
  }
}

export default CatalogNames;
