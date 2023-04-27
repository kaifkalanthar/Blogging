import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate, Switch, Router } from 'react-router-dom';
import NavBar from './components/navBar';
import Footer from './components/footer';
import LandingPage from './components/landingPage';
import RegisterForm from './components/registerForm';
import LoginForm from './components/loginForm';
import PublishForm from './components/publishForm';
import AllBlogs from './components/allBlogs';
import Logout from './components/logout';
import auth from './service/authService';
import ProtectRoute from './components/protectedRoutes';
import BlogPage from './components/blogPage';

function App() {
  const [user, setUser] = useState(false);
  useEffect(() => {
    const user = auth.getCurrentUser();
    setUser(user);
  }, [])
  return (
    <React.Fragment>
      <NavBar user={user} />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={!user ? <LoginForm /> : <Navigate to="/blog" />} />
        <Route path='/register' element={!user ? <RegisterForm /> : <Navigate to="/blog" />} />
        <Route path='/publish' element={user && user.isAdmin ? <PublishForm /> : <Navigate to="/login" />} />
        <Route path='/blog' element={<AllBlogs />} />
        <Route path='/blog/:id' element={<BlogPage />} />
        <Route path='/logout' element={<Logout />} />
      </Routes>
      <Footer />
    </React.Fragment >
  );
}

export default App;
