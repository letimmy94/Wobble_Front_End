import React, { Component } from 'react'
import './HomePage.css'
import '../App.css'

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <div className="content">
          <h1 className="title">WOBBLE!</h1>
          <p>
            Bored? All your Reddit links purple? Wobble is here to help. Wobble
            is a random website generator to bring you the best (and most
            random) parts of the web at a click of a button. Get started here.
          </p>
          <div className="btnWrapper">
            <button className="btn">Start</button>
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default HomePage
