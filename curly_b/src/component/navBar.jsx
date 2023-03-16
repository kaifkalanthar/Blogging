import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../style/navbar.css';
import logo from '../external/logo.png';

class NavBar extends Component {
    state = { clicked: false };

    handleOnClick = () => {
        this.setState({ clicked: !this.state.clicked });
    }
    render() {
        const { clicked } = this.state;
        return (
            <React.Fragment>
                <nav id="navbar">
                    <Link to='/'><img src={logo} alt='not-found' /></Link>
                    <div id="menu-container">
                        <ul id="menu-lists" className={clicked ? "#menu-lists active" : "menu-lists"}>
                            <li id="menu-list"><NavLink id="menu-item" to='/'>Home</NavLink></li>
                            <li id="menu-list"><NavLink id="menu-item" to='/blog'>Blog</NavLink></li>
                            <li id="menu-list"><NavLink id="menu-item" to='/sign-up'>SignUp</NavLink></li>
                            <li id="menu-list"><NavLink id="menu-item" to='/sign-in'>Login</NavLink></li>
                        </ul>
                    </div>
                    <div id="mobile">
                        <i className={!clicked ? 'fas fa-bars' : 'fas fa-times'}
                            onClick={this.handleOnClick}
                            id="toggle">
                        </i>
                    </div>
                </nav>
            </React.Fragment >
        );
    }
}

export default NavBar;