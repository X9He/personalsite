import React, {Component} from 'react';


class fullpost extends Component {
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

export default fullpost;
