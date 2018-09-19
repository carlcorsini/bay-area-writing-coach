import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import HomePage from './components/HomePage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route path="/" component={Navbar} />
            <Route exact path="/" component={() => <Redirect to="/home" />} />
            <Route exact path="/home" component={HomePage} />
            <Route path="/" component={Footer} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App
