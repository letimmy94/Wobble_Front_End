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
}
export default HomePage
