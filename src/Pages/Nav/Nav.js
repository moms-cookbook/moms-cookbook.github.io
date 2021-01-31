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
                <h2>Moms Cook Book</h2>
                <ul>
                    <li><Link to="/">Anasayfa</Link></li>
                    <li><Link to="/about">Hakkında</Link></li>
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
                </ul>
            </nav>
        )
    }
}

export default Nav;