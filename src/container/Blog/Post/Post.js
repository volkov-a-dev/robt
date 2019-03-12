import React, { Component } from 'react';
// import axios from '../../../axios';

// import './Posts.css';

// import Post from '../../../components/Post/Post';

class Post extends Component {
    // state = {
    //     posts: [],
    // }

    // postSelectedHandler = (id) => {
    //     this.setState({selectedPostId: id})
    // }

    // componentDidMount() {
    //     axios.get('/news')
    //         .then(response => {
    //             const posts = response.data.slice(0, 4);
    //             const updatePosts = posts.map(post => {
    //                 return {
    //                     ...post,
    //                     author: 'Max'
    //                 }
    //             })
    //             this.setState({posts: updatePosts})
    //             // console.log(response)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //             this.setState({error: true})
    //         });   
    // }


    render() {
        // let posts = <p style={{textAlign: 'center'}}>Something went wrong</p>
        
        // if (!this.state.error) {
        //     posts = this.state.posts.map(post => {
        //         return <Post 
        //             key={post.id} 
        //             title={post.title} 
        //             clicked={() => this.postSelectedHandler(post.id)}
        //             author={post.author} />;
        //     })
        // }
        return (
            <section className="Post">
                testst
                {/* {posts} */}
            </section>
        )
    }
}

export default Post;