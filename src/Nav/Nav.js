import React, { Component } from 'react'
import './Nav.css'
import MainPage from '../MainPage/MainPage'
import Button from './Button/Button'
import AddLink from '../AddLink/AddLink'
import { Router, Route, Link } from 'react-router-dom'

class Nav extends Component {
  constructor() {
    super()
    this.state = {
      randomLinkTitle: '',
      randomLink: ''
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.randomLinkTitle}</h1>
        <nav>
          <div>
            <Button
              btnClass={'red left-btns'}
              imgClass={'left-btn-img'}
              icon={require('../Nav/thumbsup.png')}
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
              <button
                className="wobble-btn"
                onClick={link => {
                  this.props.handleWobble(this.props.link)
                  this.setState({ randomLinkTitle: this.props.link[0].title })
                  this.setState({ randomLink: this.props.link[0].website })
                  console.log(this.props.link)
                }}
              >
                <div id="main">WOBBLE</div>
              </button>
            </Link>
            <button className="comment-btn">Comments</button>
          </div>
        </nav>
        <Route path="/add" render={() => <AddLink link={this.props.link} />} />
        <Route
          path="/wobble"
          render={() => <MainPage link={this.state.randomLink} />}
        />
      </div>
    )
  }
}

export default Nav
