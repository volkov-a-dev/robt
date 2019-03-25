import React from "react";

import classes from "./Button.module.scss";

const button = props => {
    return (
        <button 
            onClick={props.click}
            className={props.classStyle}>{props.children}</button>
    )
}

export default button;