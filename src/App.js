import React, { Component, Suspense } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import asyncComponent from './hoc/asyncComponent/asyncComponent';

import CatalogSpecificProduct from './container/Catalog/CatalogSpecificProduct/CatalogSpecificProduct';
import Compare from './container/Catalog/Сompare/Сompare';



// const asyncCatalog = asyncComponent(() => {
//   return import('./container/Catalog/Catalog');
// });

// import './App.css';

const MainPage = React.lazy(() => import('./container/MainPage/MainPage'));
const MainBlog = React.lazy(() => import('./container/Blog/Blog'));
const Catalog = React.lazy(() => import('./container/Catalog/Catalog'));
const MainCategory = React.lazy(() =>  import('./container/Blog/Category/Category'));
const Post = React.lazy(() => import('./container/Blog/Post/Post'));

const Product = asyncComponent(() => import('./container/Catalog/CatalogSpecificProduct/Product/Product'));
const CompareTable = asyncComponent(() => import('./container/Catalog/Сompare/CompareTable/CompareTable'));


class App extends Component {
  render() {
    let router = (
      <>
        <Switch>
          <Route 
            path="/" 
            exact 
            render={() => (
              <Suspense fallback={null}>
                <MainPage />
              </Suspense>
            )}/>
          <Route 
            path="/blog"
            exact
            render={() => (
              <Suspense fallback={null}>
                <MainBlog />
              </Suspense>
          )}/>
          <Route 
            path="/blog/:category"
            render={() => (
              <Suspense fallback={null}>
                <MainCategory/>
              </Suspense>
          )}/>
          <Route 
            path="/blog/:category/:post"
            render={() => (
              <Suspense fallback={null}>
                <Post />
              </Suspense>
          )} />

          <Route 
            path="/catalog" 
            exact
            render={() => (
              <Suspense fallback={null}>
                <Catalog/>
              </Suspense>
            )} />
          
          <Route path="/catalog/:name" exact 
            render={() =>
              <div>
                <CatalogSpecificProduct />
                <Compare />
              </div>
            }
            />
          
          <Route 
            path="/catalog/:name/:element"
            render={() => (
              <Suspense fallback={null}>
                <Product />
              </Suspense>
            )}/>

          <Route 
            path="/compare" 
            render={() => (
              <Suspense fallback={null}>
                <CompareTable/>
              </Suspense>
            )}/>
        </Switch>
      </>
    );

    return (
      <>
        <Layout>{router}</Layout>
      </>
    );
  }
}

export default withRouter(App);
