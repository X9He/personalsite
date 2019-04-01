import React, {Component} from 'react';
import './Project.scss'


class project extends Component {
    render() {
        return (
            <div style={{backgroundColor: this.props.projColor}} className='project-container'>
                {/*<div className="project-left">*/}
                {/*    <img src={this.props.imgSource} />*/}
                {/*</div>*/}
                <div className="project-right">
                    <p className='proj-title'>{this.props.title}</p>
                    <p className='proj-description'>{this.props.description}</p>
                </div>
            </div>
        );
    }
}

export default project;
