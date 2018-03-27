import React, { Component } from 'react'
import './HomePage.css'

class HomePage extends Component {
	render() {
		return (
			<div class="title">
				<h1>Wobble</h1>
				<ul>
					<button class="startButton">Start</button>
				</ul>
				<ul>
					<button class="addButton">Add</button>
				</ul>
			</div>
		)
	}
}
export default HomePage
