import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Messages from './components/Messages.js'
import SignUp from './components/SignUp.js'
import { BrowserRouter as Router, Route } from 'react-router-dom';


ReactDOM.render(
  <Router>
    <>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/messages" component={Messages} />
    </>
  </Router>,
  document.getElementById("root")
);
