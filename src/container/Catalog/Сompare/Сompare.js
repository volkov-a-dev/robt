import React, { Component } from 'react';
import classes from './Сompare.module.scss';
import { Link } from 'react-router-dom'

class Сompare extends Component {

    componentDidMount() {
     
    }

    render() {
        return (
            <div className={classes["compare-button"]}>
                <div className={classes["compare-button__wrap"]}>
                    <div className={classes["compare-button__container"]}>
                        <div className={classes["compare-button__container-state"]}>
                        
                        <Link to="/compare" className={classes["compare-button__sub"]}>Chfdytybt</Link>
                        <button className={classes["compare-button__clear"]}>X</button>    
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Сompare;
