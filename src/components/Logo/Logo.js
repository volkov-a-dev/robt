import React from 'react';

import burgerLogo from '../../assets/images/icon/logo.svg';
import classes from './Logo.module.scss';

const logo = props => (
  <div className={classes.Logo}>
    <img src={burgerLogo} alt="my burger" />
  </div>
);

export default logo;
