import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

class Nav extends Component {
    render() {
        return (
            <nav>
                <h2>Moms Cook Book</h2>
                <ul>
                    <li><Link to="/">MainPage</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        )
    }
}

export default Nav;