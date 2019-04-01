import React from 'react';

import classes from './Input.module.scss';

const input = props => {
    
    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            
            
        </div>
    )
};

export default input;
