import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import NavBar from './components/navBar';
import Footer from './components/footer';
import LandingPage from './components/landingPage';
import RegisterForm from './components/registerForm';
import LoginForm from './components/loginForm';
import PublishForm from './components/publishForm';
import AllBlogs from './components/allBlogs';

function App() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    try {
      const jwt = localStorage.getItem("token");
      const user = jwtDecode(jwt);
      setUser(user);
    } catch (ex) { }

  }, [])
  return (
    <React.Fragment>
      <NavBar user={user} />
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
