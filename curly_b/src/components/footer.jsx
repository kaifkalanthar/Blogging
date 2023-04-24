import React from 'react';
import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';
import dribble from '../assets/dribble.svg';
import twitter from '../assets/twitter.svg';

const Footer = () => {
    return (
        <footer className="footer-container">
            <h1 className="footer-header">{`2099. { }.com All rights reserved.`}</h1>
            <ul className="social-lists">
                <li className="social-list"><img src={github} alt=">" className="social-icons" /></li>
                <li className="social-list"><img src={linkedin} alt=">" className="social-icons" /></li>
                <li className="social-list"><img src={dribble} alt=">" className="social-icons" /></li>
                <li className="social-list"><img src={twitter} alt=">" className="social-icons" /></li>
            </ul>
        </footer>
    );
}

export default Footer;