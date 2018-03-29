import React, { Component } from 'react'

import './App.css'
import HomePage from './HomePage/HomePage.js'
import Nav from './Nav/Nav'
import axios from 'axios'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      links: []
    }
    this.handleWobble = this.handleWobble.bind(this)
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/websites').then(website => {
      // this.handleWobble(website.data)
      console.log(website.data)
      // for (var i = 0; i < website.data.length; i++) {
      this.setState({ links: website.data })
      // }
    })
  }

  // Used the https://www.w3resource.com/javascript-exercises/javascript-array-exercise-17.php as a guide
  handleWobble(randomized) {
    let ctr = randomized.length
    let temp
    let index
    while (ctr > 0) {
      index = Math.floor(Math.random() * ctr)
      ctr--
      temp = randomized[ctr]
      randomized[ctr] = randomized[index]
      randomized[index] = temp
    }
    return randomized
  }

  render() {
    return (
      <div className="App">
        <Nav link={this.state.links} handleWobble={this.handleWobble} />
        {/* <HomePage /> */}
        {/* <MainPage link={this.state.links} handleWobble={this.handleWobble} /> */}
      </div>
    )
  }
}

export default App
