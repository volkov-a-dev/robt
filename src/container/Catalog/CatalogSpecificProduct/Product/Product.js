import React, { Component } from 'react';
import { axiosMain } from '../../../../axios-path-config';
import classes from './Product.module.scss';
class Product extends Component {
  state = {
    product: []
  }
  
  componentDidMount() {

    let idProduct = window.location.hash.replace('#', '');
    axiosMain.get('/product/' + idProduct)
      .then(response => {
          this.setState({product: response.data.product})
      })
      .catch(error => {
          console.log(error)
      });   
  }

  
  render() {
    // console.log(this.state.product.children.)
    return (
      <div className={classes['product']}>
        <div className={classes['product__header']}>
        {/* <!--Path --> */}
          <div className="">breadcrumbs</div>
            <ol className="breadcrumbs__list" itemScope="" itemType="http://schema.org/BreadcrumbList">
              <li className="breadcrumbs__item" itemScope="" itemProp="itemListElement" itemType="http://schema.org/ListItem">
                <a className="breadcrumbs__link" href="/" rel="nofollow" itemProp="item">
                    <span itemProp="name">Каталог и цены</span>
                    <meta itemProp="position" content="1" />
                </a>
              </li>
            </ol>
        </div>
        {/* <!--/Path --> */}
        {/* <!--Heading--> */}
        <div className="catalog-masthead">
          <h1 className="catalog-masthead__title">{this.state.product['full_name']}</h1>
          <div className="catalog-masthead-controls">
            <ul className="catalog-masthead-controls__list">
              <li className="catalog-masthead-controls__item">
                <button className="catalog-masthead__compare">Add</button>
              </li>
            </ul>
          </div>
        </div>
        {/* <!--/Heading--> */}
        <div className={classes['product__main']}>
          <div className="product-primary">
            <div className="offers-description">
              <figure className="offers-description__figure">
                <div className="offers-description__preview">
                  {/* <img alt="10 Lite 3GB/32GB HRX-LX1 (небесный голубой)" id="device-header-image" 
                    className="offers-description__image" src={this.state.product} 
                    title="Honor 10 Lite 3GB/32GB HRX-LX1 (небесный голубой)" /> */}
                </div>
              </figure>
            </div>`
          </div>
        </div>

  
        <div>
          <div>{this.state.product.description}</div>
          <div>right colume</div>
        </div>
      </div>  
    );
  }
}

export default Product;
