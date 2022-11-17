import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/Navbar.js"
import EditProfile from "./components/EditProfile"
import CreateUser from "./components/CreateUser"
import Feed from "./components/Feed"
import CreatePost from './components/CreatePost.js';
import Profiles from './components/Profiles.js';
import DeletePost from './components/DeletePost.js';
import DeleteUser from './components/DeleteUser.js';

function App() {
  return (
    <Router>
      <Navbar/>
      <br/>
      <Routes>
      <Route path = "/" element = {<Feed/>}/>
      <Route path = "/edit/:id" element = {<EditProfile/>} />
      <Route path = "/register" element = {<CreateUser/>}/>
      <Route path = "/create-post" element = {<CreatePost/>}/>
      <Route path = "/profiles" element = {<Profiles/>}/>
      <Route path = "/delete-post/:id" element = {<DeletePost/>}/>
      <Route path = "/delete-user/:id" element = {<DeleteUser/>}/>
      </Routes>
    </Router>
  );
}

export default App;
