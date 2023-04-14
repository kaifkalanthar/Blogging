import React, { useState } from 'react';

const NavBar = () => {
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!clicked ? true : !clicked);
    }
    return (
        <div className="nav-container">
            <h1 className="nav-logo">{`{}.com`}</h1>
            <ul className="menu-lists" style={clicked ? { display: 'inline' } : {}}>
                <li className="menu-list"><a href="#" className="menu-item">Home</a></li>
                <li className="menu-list"><a href="#" className="menu-item">Blogs</a></li>
            </ul>
            <button className='btn' id='nav-btn'>SignIn</button>
            <i
                className={!clicked ? 'fa fa-bars' : 'fa fa-times'}
                onClick={handleClick}
                id='toggle'
            />
        </div>
    );
}

export default NavBar;