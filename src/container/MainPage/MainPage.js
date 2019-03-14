import React, { Component } from 'react';
// import Aux from '../../hoc/Aux/Aux';
import * as actions  from '../../store/actions/index';
import { connect } from 'react-redux';
// import axios from '../../axios-path-config';

import BundleNews from '../../components/BundleNews/BundleNews';
import TitleLink from '../../components/UI/Title/TitleLink/TitleLink';
import ToolbarCatalog from '../../container/ToolbarCatalog/ToolbarCatalog';

class MainPage extends Component {

  componentDidMount () {
    this.props.onFetchAllNews();
  }

  render() {
    return (
      <div className="NainWap">
        <ToolbarCatalog />
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
