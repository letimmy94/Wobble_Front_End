import React, { Component } from 'react'
import './Nav.css'
import MainPage from '../MainPage/MainPage'
import Button from './Buttons/Buttons'

class Nav extends Component {
  constructor() {
    super()
    this.state = {
      randomLink: ''
    }
  }

  render() {
    console.log(this.state.randomLink)
    return (
      <div>
        <nav>
          <div>
            <Button
              btnClassName={'red left-btns'}
              imgClassName={'left-btn-img'}
              src={require('../Nav/thumbsup.png')}
              alt={'LIKE'}
            />
            <Button
              btnClassName={'grey left-btns'}
              imgClassName={'left-btn-hamburger'}
              src={require('../Nav/hamburger.png')}
              alt={'MENU'}
            />
            <Button
              btnClassName={'green left-btns'}
              imgClassName={'left-btn-img'}
              src={require('../Nav/thumbsdown.png')}
              alt={'DISLIKE'}
            />
          </div>
          <div>
            <input
              className="link link-div"
              id="foo"
              value={this.state.randomLink.website}
              placeholder="Click on Wobble to Wobble ^.^ ->"
            />
          </div>
          <div>
            <button
              className="wobble-btn"
              onClick={link => {
                this.props.handleWobble(this.props.link)
                this.setState({ randomLink: this.props.link[0] })
                console.log(this.props.link[0])
              }}
            >
              <div id="main">WOBBLE</div>
            </button>

            <button className="comment-btn">Comments</button>
          </div>
        </nav>
        <MainPage link={this.state.randomLink.website} />
      </div>
    )
  }
}

export default Nav
