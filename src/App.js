import React, { Component } from 'react'
import Nav from './Nav/Nav'
// import MainPage from './MainPage/MainPage'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      links: [
        'https://www.youtube.com/embed/K5xERXE7pxI',
        'https://www.youtube.com/embed/D6TawVna7PQ',
        'https://www.youtube.com/embed/Hi3YxHloH3Q',
        'https://www.youtube.com/embed/QBHSYkDwNIc'
      ]
    }
    this.handleWobble = this.handleWobble.bind(this)
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
        {/* <MainPage link={this.state.links} handleWobble={this.handleWobble} /> */}
      </div>
    )
  }
}

export default App
