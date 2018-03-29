import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import axios from 'axios'
import Edit from './Edit/Edit'
import './Secret.css'

class SecretUpdateDelete extends Component {
  removeWobble(e) {
    axios.delete('http://localhost:3001/api/websites/' + e.target.value)
    console.log(e.target.value)
    window.location.reload()
  }

  render() {
    console.log(this.props.links)
    let links = this.props.links.map((link, i) => {
      return (
        <ul key={i}>
          {link.title}
          <Edit title={link.title} link={link.website} id={link._id} />
          <button
            className="secret-btn"
            value={link._id}
            onClick={e => this.removeWobble(e)}
          >
            UnWobbafy
          </button>
        </ul>
      )
    })
    return (
      <div className="secret">
        <li className="secret-li">{links}</li>
      </div>
    )
  }
}

export default SecretUpdateDelete
