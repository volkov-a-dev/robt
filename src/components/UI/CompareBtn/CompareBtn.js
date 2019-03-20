import React from 'react';

import classes from './CompareBtn.module.scss';
import { Link }  from 'react-router-dom';


const compareBtn = props => {
    console.log(props)
    let viewStyle = [classes["compare-button__container"]];
    if ( props.view ) {
        viewStyle = [classes["compare-button__container"], classes["compare-button_active"]]; 
    }
    
    return (
        <div className={classes["compare-button"]}>
            <div className={classes["compare-button__wrap"]}>
                <div className={viewStyle.join(' ')}>
                    <div className={classes["compare-button__container-state"]}>
                        <Link to="/compare" className={classes["compare-button__sub"]}>{props.name}</Link>
                        <button className={classes["compare-button__clear"]}>X</button>    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default compareBtn;