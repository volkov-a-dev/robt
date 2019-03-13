import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import MainPage from './container/MainPage/MainPage';
import Catalog from './container/Catalog/Catalog';
import CatalogNames from './container/Catalog/CatalogNames/CatalogNames';
import Product from './container/Catalog/CatalogNames/Product/Product';

import MainBlog from './container/Blog/Blog';
import MainCategory from './container/Blog/Category/Category';
import Post from './container/Blog/Post/Post';

import Aux from './hoc/Aux/Aux';

import Layout from './hoc/Layout/Layout';
// import './App.css';

class App extends Component {
  render() {
    let router = (
      <Aux >
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/blog"  component={MainBlog} />
          <Route path="/blog/:category"  component={MainCategory} />
          <Route path="/blog/:category/:post"  component={Post} />
          <Route path="/catalog" exact component={Catalog} />
          <Route path="/catalog/:name" exact component={CatalogNames} />
          <Route path="/catalog/:name/:element"  component={Product} />
        </Switch>
      </Aux>
    );

    return (
      <Aux>
        <Layout>{router}</Layout>
      </Aux>
    );
  }
}

export default withRouter(App);
