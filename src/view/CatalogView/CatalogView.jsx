import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import FastNavCatalog from '../../container/FastNavCatalog/FastNavCatalog';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo)

class Catalog extends Component {
  state = {
    catalogs : [
      {
        icon: "igloo",
        title: "Электроника"
      },
      {
        icon: "igloo",
        title: "Электроника"
      },
      {
        icon: "igloo",
        title: "Компьютеры и сети"
      }
    ],

    hotPosition: [
      {
        tilesLable: "new",
        title: "Косметические зеркала",
        description: "Двухсторонние, раскладные и с подсветкой",
        img: "https://content.onliner.by/widget/tiles/1x4/cbccb0098de666e33f9d59890665ac2e.png"
      },
      {
        title: "Косметические зеркала",
        description: "Двухсторонние, раскладные и с подсветкой",
        img: "https://content.onliner.by/widget/tiles/1x4/cbccb0098de666e33f9d59890665ac2e.png"
      },
      {
        title: "Косметические зеркала",
        description: "Двухсторонние, раскладные и с подсветкой",
        img: "https://content.onliner.by/widget/tiles/1x4/cbccb0098de666e33f9d59890665ac2e.png"
      },
      {
        tilesLable: "new",
        title: "Косметические зеркала",
        description: "Двухсторонние, раскладные и с подсветкой",
        img: "https://content.onliner.by/widget/tiles/1x4/cbccb0098de666e33f9d59890665ac2e.png"
      },
      {
        tilesLable: "new",
        title: "Косметические зеркала",
        description: "Двухсторонние, раскладные и с подсветкой",
        img: "https://content.onliner.by/widget/tiles/1x4/cbccb0098de666e33f9d59890665ac2e.png"
      },
    ]
  }

  render() {
    let catalogNavItems = this.state.catalogs.map((i, index) => {
      return (
        <li key={index}>
          <Link to="/catalog/product">
            <span>
              <FontAwesomeIcon icon={i.icon} />
            </span>
            <span>{i.title}</span>
          </Link>
        </li>
      )
    });

    let hotPositionUI = this.state.hotPosition.map((i, index) => {
      return (
        <div key={index}>
        {/* //need fix */}
          {i.tilesLable ? <div>{i.tilesLabel}</div> : null} 
          <div>{i.title}</div>
          <div>{i.description}</div>
          <img src={i.img} alt={i.title} />
        </div>
      )
    })

    return (
      <div>
        <div>
          <ul>
            {catalogNavItems}
          </ul>
          {/* <FastNavCatalog type="line"/> */}

        </div>
        {hotPositionUI}
      </div>
      
    );
  }
}

export default Catalog;
