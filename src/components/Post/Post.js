import React, {Component} from 'react';
import './Post.scss'


class post extends Component {
    componentDidMount () {
    }
    render() {
        return (
            <div className='post-container'>
                <p className='title'>{this.props.title}</p>
                <p className='content'>{this.props.content}</p>
            </div>
        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}

export default post;
