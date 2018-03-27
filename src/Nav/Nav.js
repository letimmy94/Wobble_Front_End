import React from 'react'
import './Nav.css'

const Nav = () => {
  return (
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
              className="left-btn-img"
              src={require('./thumbsup.png')}
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
          value="wwwejwifejoaigrghrsk;gn;lrsjgl;asrjg;lsjglsjrgl;djrg;dsj;lgdajgl;aj;fjr;jsd;j;cs;jsfgrgergwtghretglrskdjga;elrkjg;lerjg;erhg;lher;gher;lg;elwrhg;erhger;"
        />
      </div>
      <div>
        <button className="wobble-btn">
          <div id="main">WOBBLE</div>
        </button>

        <button className="comment-btn">Comments</button>
      </div>
    </nav>
  )
}

export default Nav
