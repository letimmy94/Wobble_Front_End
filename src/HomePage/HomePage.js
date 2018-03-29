import React, { Component } from 'react'
<<<<<<< HEAD
import './HomePage.css'
import '../App.css'

class HomePage extends Component {
	render() {
		return (
			<div className="HomePage">
				<div className="content">
					<h1 className="title">WOBBLE!</h1>
					<p>
						Wobble is helps you exploring new exciting pages through random
						generating websites.
					</p>
					<div className="btnWrapper">
						<button className="btn btn-large">Start</button>
						<p>or</p>
						<button type="submit" className="btn btn-small">
							Submit#
						</button>
					</div>
				</div>
			</div>
		)
	}
=======
import './Homepage.css'
import '../index.css'
import '../App.css'
import { Router, Route, Link } from 'react-router-dom'

class HomePage extends Component {
  render() {
    const image =
      'https://i.imgur.com/5NZRISg_d.jpg?maxwidth=1040&fidelity=high'
    return (
      <div className="HomePage" style={{ backgroundImage: `url('${image}')` }}>
        <div className="content">
          <h1 className="title">WOBBLE!</h1>
          <p>
            Bored? All your Reddit links purple? Wobble is here to help. Wobble
            is a random website generator to bring you the best (and most
            random) parts of the web at a click of a button. Get started here.
          </p>
          <div className="btnWrapper">
            <Link to="/nav">
              <button className="btn btn-large">Start</button>
            </Link>
            <button type="submit" className="btn btn-small">
              Submit#
            </button>
          </div>
        </div>
      </div>
    )
  }
>>>>>>> 7931bff90f5e2bca74c613cad1bf8a71a19a1e54
}
export default HomePage
