import React from 'react';


import { Link }  from 'react-router-dom';
import classes from './CompareBtn.module.scss';

const compareBtn = props => {
    let viewStyle = [classes["compare-button__container"]];
    if ( props.view ) {
        viewStyle = [classes["compare-button__container"], classes["compare-button__container_active"]]; 
    }

    let removeBtn = [classes["compare-button__container-state"], classes["compare-button__container-state_remove"]];
    let showBtn =   [classes["compare-button__container-state"], classes["compare-button__container-state_show"]];

    return (
        <div className={classes["compare-button"]}>
            <div className={classes["compare-button__wrap"]}>
                <div className={viewStyle.join(' ')}>
                    <div className={showBtn.join(' ')}>
                        <Link to="/compare" className={classes["compare-button__sub"]}>{props.name}</Link>
                        <button
                            onClick={props.click}
                            className={classes["compare-button__clear"]}>X</button>    
                    </div>
                    <div className={removeBtn.join(' ')}>
                        <button
                            onClick={props.click}
                            className={classes["compare-button__clear"]}>Очистить список сравнения</button>    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default compareBtn;