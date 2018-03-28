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
              value={this.state.randomLink}
            />
          </div>
          <div>
            <button
              className="wobble-btn"
              onClick={link => {
                this.props.handleWobble(this.props.link)
                this.setState({ randomLink: this.props.link[0].website })
                console.log(this.state.randomLink)
              }}
            >
              <div id="main">WOBBLE</div>
            </button>

            <button className="comment-btn">Comments</button>
          </div>
        </nav>
        <MainPage link={this.state.randomLink} />
      </div>
    )
  }
}

export default Nav
