import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import MainPage from './container/MainPage/MainPage';
import Catalog from './container/Catalog/Catalog';
import CatalogNames from './container/Catalog/CatalogNames/CatalogNames';
import Product from './container/Catalog/CatalogNames/Product/Product';

import Aux from './hoc/Aux/Aux';

import Layout from './hoc/Layout/Layout';
// import './App.css';

class App extends Component {
  render() {
    let router = (
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/catalog" exact component={Catalog} />
        <Route path="/catalog/:name" exact component={CatalogNames} />
        <Route path="/catalog/:name/:element" exact component={Product} />
        <Route path="/blog" exact component={MainBlog} />
        <Route path="/blog/:category" exact component={MainCategory} />
      </Switch>
    );

    return (
      <Aux>
        <Layout>{router}</Layout>
      </Aux>
    );
  }
}

export default withRouter(App);
