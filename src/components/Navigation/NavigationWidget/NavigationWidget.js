import React from 'react';
import classes from './NavigationWidget.module.scss';
import ExchangeRates from '../../Widgets/ExchangeRates/ExchangeRates';
import Weather from '../../Widgets/Weather/Weather';
import Quantity from '../../Cart/Quantity/Quantity';
import Aux from '../../../hoc/Aux/Aux';

const navigationWidget = props => {
    return (
        <Aux >
            <ul className={classes['nav-top-widgets']}>
                <li className={classes['nav-top-widgets__element']}>
                    <ExchangeRates />
                </li>
                <li className={classes['nav-top-widgets__element']}>
                    <Weather />
                </li>
            </ul>
            <ul className={classes['nav-top-widgets']}>
                <li>
                    <Quantity /> 
                </li>
            </ul>
            
        </Aux>
    )
}

export default navigationWidget;
