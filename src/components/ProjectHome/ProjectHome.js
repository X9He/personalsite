import React, {Component} from 'react';
import Project from '../Project/Project'
import './ProjectHome.scss'

class projectHome extends Component {
    componentDidMount () {
    }
    render() {
        return (
            <div className='project-root'>
                <p> My Side Projects </p>
                <Project title="Java Doodle Board" description="stuff"/>
                <Project title="Road Trip Planner" description="stuff"/>
            </div>
        );
    }
}

export default projectHome;
