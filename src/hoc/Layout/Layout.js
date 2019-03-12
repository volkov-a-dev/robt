import React from 'react';
import classes from './Layout.module.scss';
import Aux from '../Aux/Aux';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const layout = props => {
  return (
    <Aux>
      <Header />
      <div className={classes.content}>
        <div className={classes.contentWrap}>
          {props.children}
        </div>
      </div>
      <Footer />
    </Aux>
  );
};

export default layout;
