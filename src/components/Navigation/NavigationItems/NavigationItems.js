import React from 'react';
import classes from './NavigationItems.module.scss';

import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = props => {
  const navMenu = props.nav.map((i, index) => {
    if( i.link === "/") {
      return (
        <NavigationItem exact key={index} link={i.link} ><span>{i.name}</span></NavigationItem>
      )
    } else {
      return (
        <NavigationItem  key={index} link={i.link} ><span>{i.name}</span></NavigationItem>
      )
    }
  });

  return (
    <ul className={classes['nav-top-menu']}>
      {navMenu}
    </ul>
  )
};

export default navigationItems;
