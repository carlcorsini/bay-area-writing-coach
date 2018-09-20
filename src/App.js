import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import HomePage from './components/HomePage'
import Samples from './components/Samples'
import Blog from './components/Blog'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
var http = require('http')

class App extends Component {
  render() {
    setInterval(function() {
      http.get('http://bay-area-writing-coach.herokuapp.com')
    }, 300000)
    return (
      <div className="App">
        <Router>
          <div>
            <Route path="/" component={Navbar} />
            <Route exact path="/" component={() => <Redirect to="/home" />} />
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/samples" component={Samples} />
            <Route exact path="/blog" component={Blog} />
            <Route path="/" component={Footer} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App
