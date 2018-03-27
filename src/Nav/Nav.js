import React, { Component } from 'react'

class Nav extends Component {
  render() {
    return (
      <nav>
        <button className="red">Red</button>
        <button className="grey">Grey</button>
        <button className="green">Green</button>
        <div className="link">Link</div>
        <button>Comments</button>
      </nav>
    )
  }
}

export default Nav
