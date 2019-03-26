import React from 'react';
import logo from '../../assets/img/background.jpg' // relative path to image
import './Home.scss';


const home = ( ) => {
    return (
        <div>
            <div>
                <div className="home-container"/>
                <div className="center-text">
                    <p className="full-name home-page-text-color">Evan He</p>
                    <h3 className="home-page-text-color">Developer, Self-Starter, Learner</h3>
                </div>
            </div>
        </div>
    )
};

export default home;
