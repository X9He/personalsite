import React, {Component} from 'react';
import Project from '../Project/Project'
import './ProjectHome.scss'

class projectHome extends Component {
    componentDidMount () {
    }
    render() {
        return (
            <div className='project-background'>
                <div className='project-root'>
                    <p className="proj-top-title"> My Side Projects </p>
                    <Project projColor="#7E685A" title="Road Trip Planner (React with Rails and PostgreSQL/GraphQL)" description="You input the locations, starting point and how much time you want to spend at each place,
                     this app generates the most optimal path for you and all in a nice schedule."/>
                    <Project projColor="#6F2232" title="Doodle Board (Java)" description="Created a java program using Swing for drawing shapes and lines, where drawings are recorded with in real time and can be played back, skipped
forward and back, and randomly sought."/>
                    <Project projColor="#7E685A" title="Web Crawler (Python)" description="Created a web cralwer using python, which returns all embedded urls in
a web domain specified by a user."/>
                    <Project projColor="#6F2232" title="Dungeon Crawler (C++)" description="Created a bash terminal based dungeon crawling rogue like game with two other teammates, gained valuable OOP and design pattern experience."/>
                </div>
            </div>
        );
    }
}

export default projectHome;
