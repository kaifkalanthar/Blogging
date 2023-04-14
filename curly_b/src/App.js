import React from 'react';
import NavBar from './components/navBar';
import HeroSection from './components/heroSection';
import RecentBlogs from './components/recentBlogs';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <HeroSection />
      <RecentBlogs />
    </React.Fragment >
  );
}

export default App;
