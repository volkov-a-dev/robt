import React, { Component, Suspense } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Layout from '../containers/Layout/LayoutContainer';

const MainPage = React.lazy(() => import('../view/HomePageView/HomePageView'));
const CatalogView = React.lazy(() => import('../view/CatalogView/CatalogView'));
const CatalogProductView = React.lazy(() => import('../view/CatalogProductView/CatalogProductView'));
const ProductView = React.lazy(() => import('../view/ProductView/ProductView'));
const AutoBMain = React.lazy(() => import('../view/AutoMotoMainPageView/AutoMotoMainPageView'));
const AutoMotoListsView = React.lazy(() => import('../view/AutoMotoListsView/AutoMotoListsView'));
const CompareTableView = React.lazy(() => import('../view/CompareTableView/CompareTableView'))
const ForumView = React.lazy(() => import('../view/ForumView/ForumView'));

const CompareBtnContainer = React.lazy(() => import('../containers/CompareBtn/CompareBtnContainer'))
const BlogView = React.lazy(() => import('../view/BlogView/BlogView'));
const BlogCategoryView = React.lazy(() => import('../view/BlogCategoryView/BlogCategoryView'));
const BlogPostView = React.lazy(() => import('../view/BlogPostView/BlogPostView'));

// const Post = React.lazy(() => import('../../Blog/Post/Post'));
// const Product = React.lazy(() => import('../../Catalog/CatalogSpecificProduct/Product/Product'));
// const Compare = React.lazy(() => import('../../Catalog/Сompare/Сompare'));
// const CompareTable = React.lazy(() => import('../../Catalog/Сompare/CompareTable/CompareTable'));

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
                        <CompareBtnContainer />
                    </Suspense>
                    }
                />
            
            <Route 
                path="/catalog/:name/:element"
                render={() => (
                <Suspense fallback={null}>
                    <ProductView />
                    <CompareBtnContainer />
                </Suspense>
                )}/>
            <Route 
                path="/ab"
                exact
                render={() => (
                <Suspense fallback={null}>
                    <AutoBMain/>
                </Suspense>
                )}/>
            <Route 
                path="/ab/:mark" 
                render={() => (
                <Suspense fallback={null}>
                    <AutoMotoListsView/>
                </Suspense>
                )}/>
            <Route 
                path="/compare" 
                render={() => (
                <Suspense fallback={null}>
                    <CompareTableView/>
                </Suspense>
                )}/>
            
            <Route 
                path="/forum" 
                render={() => (
                <Suspense fallback={null}>
                    <ForumView/>
                </Suspense>
                )}/> 
            <Route 
                path="/blog"
                exact
                render={() => (
                <Suspense fallback={null}>
                    <BlogView />
                </Suspense>
            )}/>
            <Route 
                path="/blog/:category"
                exact
                render={() => (
                <Suspense fallback={null}>
                    <BlogCategoryView />
                </Suspense>
            )}/>

            <Route 
                path="/blog/:category/:post"
                render={() => (
                <Suspense fallback={null}>
                    <BlogPostView />
                </Suspense>
            )} />
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
