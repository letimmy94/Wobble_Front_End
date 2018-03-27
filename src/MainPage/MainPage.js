import React, { Component } from 'react'
import Iframe from 'react-iframe'

class MainPage extends Component {
  render() {
    return (
      <div>
        <Iframe
          url="https://www.youtube.com/embed/K5xERXE7pxI"
          width="100%"
          height="100vh"
          display="initial"
          sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
          position="relative"
        />
      </div>
    )
  }
}

export default MainPage
