import React, { Component } from 'react'
import Nav from './Nav/Nav'
import MainPage from './MainPage/MainPage'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <MainPage />
      </div>
    )
  }
}

export default App
