import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = ({ user }) => {
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!clicked ? true : !clicked);
    }

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location = "/";
    }
    return (
        <div className="nav-container">
            <h1 className="nav-logo">{`{}.com`}</h1>
            <ul className="menu-lists" style={clicked ? { display: 'inline' } : {}}>
                <li className="menu-list"><NavLink to='/' className="menu-item">Home</NavLink></li>
                <li className="menu-list"><NavLink to="/blog" className="menu-item">Blogs</NavLink></li>
                {user && <li className="menu-list"><NavLink className="menu-item">{user.name}</NavLink></li>}
                {user && <li className="menu-list"><NavLink to='/logout' className="menu-item">Logout</NavLink></li>}
                {user && user.isAdmin && <li className="menu-list"><NavLink to='/publish' className="menu-item">Write</NavLink></li>}
            </ul>
            {!user && <NavLink to='/login' className='btn' id='nav-btn'>SignIn</NavLink>}
            <i
                className={!clicked ? 'fa fa-bars' : 'fa fa-times'}
                onClick={handleClick}
                id='toggle'
            />
        </div>
    );
}

export default NavBar;