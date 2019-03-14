import React, { Component } from 'react';
import classes from './Сompare.module.scss';
class Сompare extends Component {

    render() {
        return (
            <div className={classes["compare-button"]}>
                <div className={classes["compare-button__wrap"]}>
                    <a href="/" className={classes["compare-button__sub"]}>X</a>
                    <button className={classes["compare-button__clear"]}></button>
                </div>
            </div>
        )
    }
}

export default Сompare;