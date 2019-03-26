import React from 'react';
import logo from '../../assets/img/home-background.jpg' // relative path to image
import './Home.scss';


const home = ( ) => {
    return (
        <div>
            <div>
                <img src={logo} className="home-container"/>
                <div className="center-text">
                    <p className="full-name">Evan He</p>
                    <h3>Developer, Self-Starter, Learner</h3>
                </div>
            </div>
        </div>
    )
};

export default home;
