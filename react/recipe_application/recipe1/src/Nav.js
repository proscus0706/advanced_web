import React, {Component} from 'react';
import './Nav.css';

class Nav extends Component {
    render() {
        return (
            <div className='navBar'>
                <a className='logo'>Recipe App</a>
                <ul className='nav-links'>
                    <li><a href="#">New Recipe</a></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
        );
    }
}

export default Nav;