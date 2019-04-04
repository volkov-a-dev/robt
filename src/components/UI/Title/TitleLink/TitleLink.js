
import React from 'react';
// import classes from './Title.module.scss';
import classes from './TitleLink.module.scss';

const title = props => {
    let tatleBlock;
    switch (props.tag) {
        case 'h1':
            tatleBlock = <h1 className={classes.Title}>{props.children}</h1>
            break;
        case 'h2':
            tatleBlock = <h2 className={classes.Title}>{props.children}</h2>
        break;

        default:
            tatleBlock = <h2 className={classes.Title}>{props.children}</h2>
            break;
    }
    return (
        <>
            {tatleBlock}
        </>
    )
}

export default title;
