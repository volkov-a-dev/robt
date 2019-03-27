import React from 'react';
import classes from './Layout.module.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const layout = props => {
  return (
    <>
      <Header />
      <div className={classes.content}>
        <div className={classes.contentWrap}>
          {props.children}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default layout;
