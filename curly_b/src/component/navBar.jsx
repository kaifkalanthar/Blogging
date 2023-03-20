import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../style/navbar.css';
import logo from '../external/logo.png';

class NavBar extends Component {
    state = {
        clicked: false,
        userInfo: null,
    };

    componentDidMount() {
        fetch('http://localhost:4000/profile', {
            credentials: 'include'
        }).then(res => {
            if (res.status >= 200 && res.status < 300) {
                return res.json()
            } else {
                throw new Error();
            }
        }).then(userInfo => {
            this.setState({ userInfo });
            console.log(userInfo);
        })
            .catch(err => console.log('fetch() failed'));

    }

    handleOnClick = () => {
        this.setState({ clicked: !this.state.clicked });
    }

    logout() {
        fetch('http://localhost:4000/logout', {
            credentials: 'include',
            method: 'POST',
        });
        const { userInfo } = this.state;
        this.setState({ userInfo: null })
    }

    render() {
        const { clicked, userInfo } = this.state;
        return (
            <React.Fragment>
                <nav id="navbar">
                    <Link to='/'><img src={logo} alt='not-found' /></Link>
                    <div id="menu-container">
                        <ul id="menu-lists" className={clicked ? "#menu-lists active" : "menu-lists"}>
                            <li id="menu-list"><NavLink id="menu-item" to='/'>Home</NavLink></li>
                            <li id="menu-list"><NavLink id="menu-item" to='/blog'>Blog</NavLink></li>
                            {!userInfo && (
                                <>
                                    <li id="menu-list"><NavLink id="menu-item" to='/sign-up'>SignUp</NavLink></li>
                                    <li id="menu-list"><NavLink id="menu-item" to='/login'>Login</NavLink></li>
                                </>
                            )}

                            {userInfo && (
                                <>
                                    <li id="menu-list"><NavLink id="menu-item" to='/profile'>{userInfo.username}</NavLink></li>
                                    <li id="menu-list"><NavLink id="menu-item" to='/logout' onClick={this.logout}>Logout</NavLink></li>
                                </>
                            )}


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