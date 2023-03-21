import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './component/navBar';
import HomePage from './component/homePags';
import Blogs from './component/allBlog';
import SignUp from './component/signUp';
import BlogForm from './component/blogForm';
import PostPage from './component/postPage';
import Login from './component/logIn';
import './App.css';
import Logout from './component/Logout';


function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className='container'>
        <Routes>
          <Route path='/' Component={HomePage} />
          <Route path='/blog' Component={Blogs} />
          <Route path='/blog/:id' Component={PostPage} />
          <Route path='/sign-up' Component={SignUp} />
          <Route path='/login' Component={Login} />
          <Route path='/logout' Component={Logout} />
          <Route path='/create-post/new-post' Component={BlogForm} />

        </Routes>
      </main>
    </React.Fragment >
  );
}

export default App;
