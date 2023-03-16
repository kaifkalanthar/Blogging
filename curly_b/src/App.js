import React from 'react';
import NavBar from './component/navBar';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './component/homePags';
import Blogs from './component/allBlog';
import SignUp from './component/signUp';
import Login from './component/logIn';
import BlogForm from './component/blogForm';


function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className='container'>
        <Routes>
          <Route path='/' Component={HomePage} />
          <Route path='/blog' Component={Blogs} />
          <Route path='/sign-up' Component={SignUp} />
          <Route path='/login' Component={Login} />
          <Route path='/create-post/new-post' Component={BlogForm} />
        </Routes>
      </main>
    </React.Fragment >
  );
}

export default App;
