import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/homePage.css';
const HomePage = () => {
    return (
        <React.Fragment>
            <section class="showcase">
                <div class="text">
                    <h2>Never Stop To </h2>
                    <h3>Exploring The World</h3>
                    <p> where inspiration and motivation meet creativity
                        and innovation! Our mission is to provide you with
                        a platform to explore the depths of your imagination,
                        challenge your limits, and unleash your full potential.</p>
                    <NavLink to="/blog">Explore</NavLink>
                </div>
            </section>


        </React.Fragment>
    );
}

export default HomePage;