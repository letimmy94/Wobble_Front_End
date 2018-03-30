import React, { Component } from 'react'
import './Nav.css'
import MainPage from '../MainPage/MainPage'
import HomePage from '../HomePage/HomePage'
import Button from './Button/Button'
import AddLink from '../AddLink/AddLink'
import Edit from '../SecretUpdateDelete/Edit/Edit'
import { Route, Link, Switch, Redirect } from 'react-router-dom'
import SecretUpdateDelete from '../SecretUpdateDelete/SecretUpdateDelete'
import CommentAdd from '../CommentAdd/CommentAdd'

class Nav extends Component {
	constructor() {
		super()
		this.state = {
			randomLinkTitle: '',
			randomLink: '',
			randomLinkRating: 0
		}
	}
	handleWobble = () => {
		this.props.handleWobble(this.props.link)
		this.setState({ randomLinkTitle: this.props.link[0].title })
		this.setState({ randomLink: this.props.link[0].website })
		this.setState({ randomLinkRating: this.props.link[0].rating })
		console.log(this.props.link)
	}

	likeLink = () => {
		this.setState(({ randomLinkRating }) => ({
			randomLinkRating: randomLinkRating + 1
		}))
		this.props.updateRating(
			this.state.randomLinkTitle,
			this.state.randomLinkRating
		)
	}

	dislikeLink = () => {
		this.setState(({ randomLinkRating }) => ({
			randomLinkRating: randomLinkRating - 1
		}))
		this.props.updateRating(
			this.state.randomLinkTitle,
			this.state.randomLinkRating
		)
	}
	render() {
		return (
			<div>
				<h1 className="random-link-header">
					{this.state.randomLinkTitle.toUpperCase()}
				</h1>
				<nav>
					<div>
						<Button
							btnClass={'red left-btns'}
							imgClass={'left-btn-img'}
							icon={require('../Nav/thumbsup.png')}
							updateRating={this.likeLink}
							alt={'LIKE'}
						/>
						<Button
							btnClass={'grey left-btns'}
							imgClass={'left-btn-hamburger'}
							icon={require('../Nav/hamburger.png')}
							alt={'MENU'}
						/>
						<Button
							btnClass={'green left-btns'}
							imgClass={'left-btn-img-down'}
							icon={require('../Nav/thumbsdown.png')}
							updateRating={this.dislikeLink}
							alt={'DISLIKE'}
						/>
					</div>

					<div>
						<Link to="/add">
							<button className="comment-btn">+</button>
						</Link>
						<input className="link link-div" value={this.state.randomLink} />
					</div>
					<div>
						<Link to="/wobble">
							<button className="wobble-btn" onClick={this.handleWobble}>
								<div id="main">WOBBLE</div>
							</button>
						</Link>
						<Link to="/timmy" />
						<Link to="/add/comments">
							<button className="comment-btn">Comments</button>
						</Link>
					</div>
				</nav>
				<Switch>
					<Route path="/home" render={() => <HomePage />} />
					<Route
						exact
						path="/add"
						render={() => <AddLink link={this.props.link} />}
					/>
					<Route
						path="/wobble"
						render={() => <MainPage link={this.state.randomLink} />}
					/>
					<Route exact path="/add/comments" render={() => <CommentAdd />} />
					<Route
						path="/timmy"
						render={() => <SecretUpdateDelete links={this.props.link} />}
					/>
					<Route
						path="/edit/:id"
						render={() => <Edit link={this.props.link} />}
					/>
					<Route path="/" render={() => <Redirect to="/home" />} />
				</Switch>
			</div>
		)
	}
}

export default Nav
