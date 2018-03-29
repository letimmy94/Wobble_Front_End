import React, { Component } from 'react'
import Iframe from 'react-iframe'
import './MainPage.css'

class MainPage extends Component {
  render() {
    return (
      <div className="wobble-page">
        <div id="main">
          <Iframe
            url={this.props.link}
            width="100%"
            height="100vh"
            display="initial"
            sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
            position="relative"
          />
        </div>
      </div>
    )
  }
}

export default MainPage
