import React from 'react';

import classes from './PostPreview.module.scss';


const postPreview = props => {
    return (
        <article className={classes.PostPreview}>
            <h1 className={classes.PostPreviewTitle}>{props.title}</h1>
            <p className={classes.PostPreviewDescription}>{props.description}</p>
            <i 
                className={classes.PostPreviewBgImg} 
                style={{backgroundImage: "url(" + props.imgBg +  ")"}}></i>
            <a 
                className={classes.PostPreviewLink} 
                href={props.url.link}>{props.url.name}</a>
        </article>
    )
}

export default postPreview;