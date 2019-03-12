import React from 'react';
import classes from './Footer.module.scss';

const footer = props => {

  return (
    <footer className={classes.footer}>
      <div className={classes['footer__wrap']}>
        <div className={classes['footer__row']}>
          <ul className={[classes['footer__list'], classes['footer-nav']].join(' ')}>
            <li className={classes['footer-nav__link']}>Catalog</li>
            <li className={classes['footer-nav__link']}>News</li>
            <li className={classes['footer-nav__link']}>...</li>
          </ul>
        </div>
        <div className={[classes['footer__row'], classes['footer__row_m-l']].join(' ')}>
          <div className={classes['footer-copy']}>© 2018—2019 FSR</div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
