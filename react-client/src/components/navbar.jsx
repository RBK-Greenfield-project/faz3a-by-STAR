import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import Add from './sara.jsx';

class Navbar extends Component {
    render(){
        return(
            <nav className="navBar">
                <ul>
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/aboud/">About</NavLink></li>
                    <li><NavLink to="/sara/">Contact</NavLink></li>
                </ul>
            </nav>
        );
    }
}
export default Navbar;