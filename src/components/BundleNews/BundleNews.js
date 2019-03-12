import React from 'react';
import Aux from '../../hoc/Aux/Aux';

let bundleNews = (props) => {
    let blocks;

    switch (props.type) {
        case 'all-post':
            blocks = <div>All posts</div>
            break;
    
        default:
            blocks = <div>....</div>
            break;
    }
    return(
        <Aux>
            {blocks}
        </Aux>
    );
}

export default bundleNews;