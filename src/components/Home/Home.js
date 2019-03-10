import React from 'react';
import logo from '../../assets/img/home-background.jpg' // relative path to image
import './Home.scss';


const home = ( ) => {
    return (
        <div>
            <div>
                <img src={logo} className="home-container"/>
                <div className="center-text">
                    <h1>Welcome to Evan's Website</h1>
                    <h3>Developer, Self-Starter, Learner</h3>
                </div>
            </div>
        </div>
    )
};

export default home;
