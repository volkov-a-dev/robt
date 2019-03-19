import React from 'react';

import classes from './CompareBtn.module.scss';
import { Link }  from 'react-router-dom';


const compareBtn = props => {
    return (
        <div className={classes["compare-button"]}>
            <div className={classes["compare-button__wrap"]}>
                <div className={classes["compare-button__container"]}>
                    <div className={classes["compare-button__container-state"]}>
                        <Link to="/compare" className={classes["compare-button__sub"]}>10 товаров</Link>
                        <button className={classes["compare-button__clear"]}>X</button>    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default compareBtn;