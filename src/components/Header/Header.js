import React from 'react';
import classes from './Header.module.scss';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import NavigationWidget from '../Navigation/NavigationWidget/NavigationWidget';
import FormSearch from '../../container/Widgets/Search/MainSearch/MainSearch';
import Logo from '../Logo/Logo';

const header = props => {
  const mainNavigation = [
    {
      "link" : "/",
      "name" : "Home page"
    },
    {
      "link" : "/catalog",
      "name" : "Catalog"
    },
    {
      "link" : "/blog",
      "name" : "Blog"
    },

    {
      "link" : "/blog",
      "name" : "Houses and apartments"
    },
    {
      "link": "/forum",
      "name": "Forum"
    },
    {
      "link": "care",
      "name": "Motor car"
    }
    
  ];

  return (
    <header className={classes.MainHeader}>
      <div className={classes.MainHeaderWrapper}>
        <div className={classes.MainHeaderContainer}>
          <nav className={classes.MainNavigation}>
              <NavigationItems nav={mainNavigation} />
          </nav>
          <NavigationWidget />
        </div>
      </div>

      <div className={classes.MainHeaderAction}>
        <div className={classes.MainHeaderActionContainer}>
          <div className={classes.HeaderLogo}>
            <Logo />
          </div>
          <section className={classes.HeaderSearch}>
            <FormSearch />
          </section>
        </div>
      </div>
    </header>
  );
};

export default header;
