import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedIn: localStorage.getItem("loggedIn") || sessionStorage.getItem("loggedIn")
        }
    }
    render() {
        return (
            <nav>
                <ul>
                    <li className="head"><Link to="/">Moms Cook Book</Link></li>
                    <li><Link to="/recipe">Recipes</Link></li>
                    {(this.state.loggedIn) ?
                        <li><Link to="/profile">Profile</Link></li>
                        :
                        <li><Link to="/signup">Sign Up</Link></li>
                    }
                    {(this.state.loggedIn) ?
                        <div></div>
                        :
                        <li><Link to="/login">Login</Link></li>
                    }
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
        )
    }
}

export default Nav;