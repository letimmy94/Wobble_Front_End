import React, { Component } from 'react'
import './Nav.css'
import MainPage from '../MainPage/MainPage'
import Button from './Button/Button'

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
            <input
              className="link link-div"
              type="text"
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
