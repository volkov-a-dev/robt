import React, { Component } from 'react';


class MainBlog extends Component {
    
    render() {
        return (
            <div>
                <h1>MainBlog</h1>
                <a href="/blog/:category"> category</a>
            </div>
        )
    }
}

export default MainBlog;