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
                    <Project projColor="#4E4E50" title="Java Doodle Board" description="This paint application achieves painting by tracking mouse down and drag movements on the canvas. It was done in intellij.
                    Key features:
- slider has ticks to indicate the end of each line (continus mouse drag movement until mouse is released)
- if you slide to anywhere on the slider and continue drawing, all lines after the tick you're at is destroyed and canvas will only add new lines you are drawing
- you can save and load painting projects (no extension restriction)
- you can play your drawing from any point on the tick"/>
                    <Project projColor="#6F2232" title="Road Trip Planner" description="You input the locations, starting point and how much time you want to spend at each place,
                     this app generates the most optimal path for you and all in a nice schedule."/>
                </div>
            </div>
        );
    }
}

export default projectHome;
