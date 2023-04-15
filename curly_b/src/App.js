import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/navBar';
import Footer from './components/footer';
import LandingPage from './components/landingPage';
import RegisterForm from './components/registerForm';
import LoginForm from './components/loginForm';
import PublishForm from './components/publishForm';
import AllBlogs from './components/allBlogs';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route path='/' Component={LandingPage} />
        <Route path='/register' Component={RegisterForm} />
        <Route path='/login' Component={LoginForm} />
        <Route path='/publish' Component={PublishForm} />
        <Route path='/blog' Component={AllBlogs} />
      </Routes>
      <Footer />
    </React.Fragment >
  );
}

export default App;
