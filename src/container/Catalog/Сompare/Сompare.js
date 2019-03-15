import React, { Component } from 'react';
import classes from './Сompare.module.scss';
class Сompare extends Component {

    componentDidMount() {
     
    }

    render() {
        return (
            <div className={classes["compare-button"]}>
                <div className={classes["compare-button__wrap"]}>
                    <div className={classes["compare-button__container"]}>
                        <div className={classes["compare-button__container-state"]}>
                        <a href="/" className={classes["compare-button__sub"]}>Chfdytybt</a>
                        <button className={classes["compare-button__clear"]}>X</button>    
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Сompare;
