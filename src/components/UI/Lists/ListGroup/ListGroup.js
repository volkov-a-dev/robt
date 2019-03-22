import React from 'react';
// import classes from './ListGroup.module.scss';

import ListItem from '../ListItem/ListItem';

const listGroup = props => {

    let listItem;
    console.log(props)

    if (props.listItems && props.listItems.length >= 0) {
        listItem = props.listItems.map((i,index) => {
            return (
                <ListItem
                    key={index} 
                    item={i} 
                    style={props.uiView} />
            )
        })
    }

    let title = (props.mainTitle && props.mainTitle.length > 0) ? <div className="list-group__title">{props.mainTitle}</div> : null;
    let list = listItem ? <ul className="list list_group "> {listItem} </ul> : null;

    return (
        <div className="list-group">
            { title }
            { list }
        </div>
    )
}

export default listGroup;