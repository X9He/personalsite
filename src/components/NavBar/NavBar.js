import React from 'react';
import { Link } from 'react-router-dom'
import './NavBar.scss';


const navbar = ()  => {
    return (
        <div className="navbarEvan">
            <Link className="navbar-item" to="/home">Home</Link>
            <Link className="navbar-item" to="/projects">Side Projects</Link>
            <Link className="navbar-item" to="/resume">Resume</Link>
            <Link className="navbar-item" to="/school">School</Link>
            <Link className="navbar-item" to="/blog">Blog</Link>
        </div>
    )
};

export default navbar;
