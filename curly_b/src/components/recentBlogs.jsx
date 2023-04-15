import React from 'react';
import blogpost1 from '../assets/blog-post1.svg';
import blogpost2 from '../assets/blog-post2.svg';
import blogpost3 from '../assets/blog-post3.svg';
const RecentBlogs = () => {
    return (
        <div className='recent-blogs'>
            <h2 className="recent-blogs-header">Recent Blog Post</h2>
            <div className="recent-blogs-container">
                <div className="most-recent">
                    <img src={blogpost1} alt="/" className="l-img" />
                    <div className="m-blog-content">
                        <p className="timestamp">MohamedKaif. 20 Jan 2034</p>
                        <h3 className="blog-title" id="blog-title-L">Conversation with
                            London Makr &Co..,</h3>
                        <p className="blog-description" id="blog-description-L">We sat down with London’s fast-growing brand and product studio, Makr& co.
                            To find out How they used Cb.com</p>
                        <button className="btn">More...</button>
                    </div>
                </div>
                <div className="recent-two">
                    <div className="recent-two-container">
                        <img src={blogpost2} alt="/" className="m-img" />
                        <div className="blog-content">
                            <h3 className="blog-title" id="blog-title-m">A Rentless pursuit of perfection</h3>
                            <p className="timestamp">MohamedKaif. 20 Jan 2034</p>
                            <p className="blog-description" id="blog-description-m">We sat down with London’s fast-growing brand and product studio, Makr& co.
                                To find out How they used Cb.com</p>
                            <button className="btn">More...</button>
                        </div>
                    </div>
                    <div className="recent-two-container">
                        <img src={blogpost3} alt="/" className="m-img" />
                        <div className="blog-content">
                            <h3 className="blog-title" id="blog-title-m">Why animals are needed?</h3>
                            <p className="timestamp">MohamedKaif. 20 Jan 2034</p>
                            <p className="blog-description" id="blog-description-m">We sat down with London’s fast-growing brand and product studio, Makr& co.
                                To find out How they used Cb.com</p>
                            <button className="btn">More...</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecentBlogs;