import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Aux from './hoc/Aux/Aux';
import Layout from './hoc/Layout/Layout';
import asyncComponent from './hoc/asyncComponent/asyncComponent';

import CatalogSpecificProduct from './container/Catalog/CatalogSpecificProduct/CatalogSpecificProduct';
import Сompare from './container/Catalog/Сompare/Сompare';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo)

const asyncMainPage = asyncComponent(() => {
  return import('./container/MainPage/MainPage');
});
const asyncCatalog = asyncComponent(() => {
  return import('./container/Catalog/Catalog');
});
const asyncMainBlog = asyncComponent(() => {
  return import('./container/Blog/Blog');
});
const asyncProduct = asyncComponent(() => {
  return import('./container/Catalog/CatalogSpecificProduct/Product/Product');
});
const asyncCompareTable = asyncComponent(() => {
  return import('./container/Catalog/Сompare/CompareTable/CompareTable');
});
const asyncPost = asyncComponent(() => {
  return import('./container/Blog/Post/Post');
});
const asyncMainCategory = asyncComponent(() => {
  return import('./container/Blog/Category/Category');
});
// import './App.css';


class App extends Component {
  render() {
    let router = (
      <Aux >
        <Switch>
          <Route path="/" exact component={asyncMainPage} />
          <Route path="/blog"  component={asyncMainBlog} />
          <Route path="/blog/:category"  component={asyncMainCategory} />
          <Route path="/blog/:category/:post"  component={asyncPost} />
          <Route path="/catalog" exact component={asyncCatalog} />
          
          <Route path="/catalog/:name" exact 
            render={props =>
              <div>
                <CatalogSpecificProduct />
                <Сompare />
              </div>
            }
            />
          
          <Route path="/catalog/:name/:element"  component={asyncProduct} />
          <Route path="/compare" component={asyncCompareTable} />
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
