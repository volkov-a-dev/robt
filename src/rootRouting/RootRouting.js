import React, { Component, Suspense } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Layout from '../container/Layout/Layout';

const MainPage = React.lazy(() => import('../view/HomePageView/HomePageView'));
const CatalogView = React.lazy(() => import('../view/CatalogView/CatalogView'));
const CatalogProductView = React.lazy(() => import('../view/CatalogProductView/CatalogProductView'));

// const MainBlog = React.lazy(() => import('../../Blog/Blog'));

// const MainCategory = React.lazy(() =>  import('../../Blog/Category/Category'));
// const Post = React.lazy(() => import('../../Blog/Post/Post'));
// const Product = React.lazy(() => import('../../Catalog/CatalogSpecificProduct/Product/Product'));
// const Compare = React.lazy(() => import('../../Catalog/Сompare/Сompare'));
// const CompareTable = React.lazy(() => import('../../Catalog/Сompare/CompareTable/CompareTable'));
// const Forum = React.lazy(() => import('../../Forum/Forum'));
// const AutoBMain = React.lazy(() => import('../../AutoBMain/AutoBMain'));
// const AutoBMark = React.lazy(() => import('../../AutoBMain/AutoBMark/AutoBMark'));

class RootRoute extends Component {

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
                path="/catalog" 
                exact
                render={() => (
                <Suspense fallback={null}>
                    <CatalogView/>
                </Suspense>
            )} />

            <Route path="/catalog/:name" exact 
                render={() =>
                <Suspense fallback={null}>
                    <CatalogProductView />
                    {/* <Compare /> */}
                </Suspense>
                }
            />
            
            
            {/* <Route 
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
                path="/catalog/:name/:element"
                render={() => (
                <Suspense fallback={null}>
                    <Product />
                    <Compare />
                </Suspense>
                )}/>

            <Route 
                path="/compare" 
                render={() => (
                <Suspense fallback={null}>
                    <CompareTable/>
                </Suspense>
                )}/>

            <Route 
                path="/forum" 
                render={() => (
                <Suspense fallback={null}>
                    <Forum/>
                </Suspense>
                )}/> */}
            {/* <Route 
                path="/ab"
                exact
                render={() => (
                <Suspense fallback={null}>
                    <AutoBMain/>
                </Suspense>
                )}/> */}
            {/* <Route 
                path="/ab/:mark" 
                render={() => (
                <Suspense fallback={null}>
                    <AutoBMark/>
                </Suspense>
                )}/> */}
                

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

export default withRouter(RootRoute);
