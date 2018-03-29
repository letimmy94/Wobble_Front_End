import React, { Component } from 'react'
import './HomePage.css'

class HomePage extends Component {
  render() {
    const image =
      'https://i.imgur.com/5NZRISg_d.jpg?maxwidth=1040&fidelity=high'
    return (
      <div className="homepage" style={{ backgroundImage: `url('${image}')` }}>
        <div className="content">
          <h1 className="title">WOBBLE!</h1>
          <p>
            Bored? All your Reddit links purple? Wobble is here to help. Wobble
            is a random website generator to bring you the best (and most
            random) parts of the web at a click of a button. Get started here.
          </p>
        </div>
      </div>
    )
  }
}
export default HomePage
