import React, {Component} from 'react';
import './Project.scss'


class project extends Component {
    render() {
        return (
            <div className='project-container'>
                <img src={this.props.imgSource} />
                <p className='title'>{this.props.title}</p>
                <p className='description'>{this.props.description}</p>
            </div>
        );
    }
}

export default project;
