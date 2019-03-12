
import React from 'react';
import classes from './Title.module.scss';
import Aux from '../../../hoc/Aux/Aux';

const title = props => {
    let tatleBlock;
    switch (props.tag) {
        case 'h1':
            tatleBlock = <h1>{props.children}</h1>
            break;
        case 'h2':
            tatleBlock = <h2>{props.children}</h2>
        break;

        default:
            tatleBlock = <h2>{props.children}</h2>
            break;
    }
    return (
        <Aux >
            {tatleBlock}
        </Aux>
    )
}

export default title;
