import React from 'react';

const listItem = props => {

    let listITem;

    // console.warn(props)
    switch (props.style) {
        case "icon-auth":
            listITem = 
                <li className="topic__element">
                    <div className="topic__element-icon">!</div>
                    <h3 className="topic__element-title">
                        <a href="/" className="topic__element-title-link">{props.item.title}</a>
                    </h3>
                    <span className="topic__element-author">{props.item.auth}</span>
                </li>;
            break;
    
        default:
            listITem =  <li></li>;
            break;
    }
    
    return (
        <>
            {listITem}
        </>
    )
}

export default listItem;