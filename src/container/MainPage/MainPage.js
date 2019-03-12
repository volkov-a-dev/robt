import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import BundleNews from '../../components/BundleNews/BundleNews';
import Title from '../../components/UI/Title/Title';
class MainPage extends Component {
  render() {
    return (
      <div className="NainWap">
        <a href="/catalog">catalog</a>
          <BundleNews type="all-post"/>
          <Title>People</Title>
          <BundleNews type=""/>
          <Title>Auto</Title>
          <BundleNews type=""/>
          <section>Category news</section>
      </div>
    )
  }
}

export default MainPage;
