import React, { Component } from 'react'
import './Nav.css'
import MainPage from '../MainPage/MainPage'

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
            <button className="red left-btns" id="left-btn-container">
              <span className="left-btn-text">
                <img
                  className="left-btn-img"
                  src={require('./thumbsup.png')}
                  alt="LIK"
                />
              </span>
            </button>
            <button className="grey left-btns" id="left-btn-container">
              <span className="left-btn-text">
                <img
                  className="left-btn-hamburger"
                  src={require('./hamburger.png')}
                  alt="LIK"
                />
              </span>
            </button>
            <button className="green left-btns" id="left-btn-container">
              <span className="left-btn-text">
                <img
                  className="left-btn-img-down"
                  src={require('./thumbsdown.png')}
                  alt="LIK"
                />
              </span>
            </button>
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
