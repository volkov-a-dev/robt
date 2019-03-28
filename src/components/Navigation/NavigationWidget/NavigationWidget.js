import React from 'react';
import classes from './NavigationWidget.module.scss';
// import ExchangeRates from '../../../container/Widgets/ExchangeRates/ExchangeRates';
// import Weather from '../../';
// import Quantity from '../../Cart/Quantity/Quantity';

const navigationWidget = props => {
    return (
        <>
            <ul className={classes['nav-top-widgets']}>
                <li className={classes['nav-top-widgets__element']}>
                    {/* <ExchangeRates type="number"  currency="usd"/> */}
                </li>
                <li className={classes['nav-top-widgets__element']}>
                    {/* <Weather /> */}
                </li>
            </ul>
            <ul className={classes['nav-top-widgets']}>
                <li>
                    {/* <Quantity />  */}
                </li>
            </ul>
            
        </>
    )
}

export default navigationWidget;
