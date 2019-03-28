import React, { Component } from 'react';

import  * as actions from '../../modules/news'
import { connect } from 'react-redux';

import BundleNews from '../../components/BundleNews/BundleNews';
import TitleLink from '../../components/UI/Title/TitleLink/TitleLink';
import FastNavCatalog from '../../containers/FastNavCatalog/FastNavCatalogContainer';

class MainPage extends Component {

    componentDidMount () {
        this.props.onFetchAllNews();
    }

    render() {
        console.log(this.props.news)
        return (
        <div className="NainWap">
            <FastNavCatalog type="line"/>
            <BundleNews type="all-post" news={this.props.news} step="8"/>
            <TitleLink>People</TitleLink>
            <BundleNews type="all-post" news={this.props.news} step="3"/>
            <TitleLink>Auto</TitleLink>
            <BundleNews type="all-post" news={this.props.news} step="3"/>
        </div>
        )
    }
}

    const mapStateToProps = state => {
    return {
        news: state.news.news,
        loading: state.news.loading,
    }
    }

    const mapDispatchToProps = dispatch => {
        return {
            onFetchAllNews: () => dispatch(actions.fetchInitAllNews())
            
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
