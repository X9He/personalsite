import React from 'react';
import { NavLink } from 'react-router-dom'
import resume from '../../assets/pdf/Evan_s_Resume.pdf'
import './NavBar.scss';


const navbar = ()  => {
    return (
        <div className="navbarEvan">
            <p className="name">Evan He</p>
            <div className="nav-items-container">
                <NavLink className="navbar-item" activeClassName="active" to="/home">Home</NavLink>
                <NavLink className="navbar-item" activeClassName="active" to="/projects">Side Projects</NavLink>
                <NavLink className="navbar-item" activeClassName="active" target="_blank" to={resume}>Resume</NavLink>
                <NavLink className="navbar-item" activeClassName="active" to="/school">School</NavLink>
                <NavLink className="navbar-item" activeClassName="active" to="/blog">Blog</NavLink>
            </div>
        </div>
    )
};

export default navbar;
