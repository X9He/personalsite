import React, {Component} from 'react';
import Post from '../Post/Post'
import FullPost from '../FullPost/FullPost'
import axios from 'axios';
import {Route} from "react-router-dom";


class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null
    };

    componentDidMount () {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.setState({posts: response.data});
                console.log(response)
            });
    }

    postSelectedHandler (postId) {
        this.setState({selectedPostId: postId})
    }

    render() {
        const posts = this.state.posts.map(post => {
            return <Post key={post.id}
                         title={post.title}
                         content={post.body} clicked={() => this.postSelectedHandler(post.id)}/>
        });
        return (
            <div>
                <h1> My Blog </h1>
                {posts}
                {/*<FullPost id={this.state.selectedPostId}/>*/}
            </div>
        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}

export default Blog;
