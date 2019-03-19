import React from 'react';
import PostPreview from './PostPreview/PostPreview';
// import * as actions  from '../../store/actions/index';
// import { connect } from 'react-redux';
import classes from './BundleNews.module.scss';

let bundleNews = (props) => {
    let blocks;

    switch (props.type) {
        case 'all-post':
            blocks = 
                <div className={[classes.Row, classes.RowThree].join(' ')}>
                    {
                        Object.keys(props.news).map((i, index) => {
                            if (index < props.step) {
                                let post = props.news[i];

                                return (
                                    <PostPreview 
                                        key={index}
                                        title={post.title}
                                        description={post.description}
                                        imgBg={post.urlToImage}
                                        url= {{
                                            link: '/tetet',
                                            name: '..sdsd'
                                        }}
                                    />
                                )
                            }
                            
                            return null;
                        })
                    }
                </div>
            break;
    
        default:
            blocks = <div>....</div>
            break;
    }

    return(
        <>
            {blocks}
        </>
    );
}

export default bundleNews;