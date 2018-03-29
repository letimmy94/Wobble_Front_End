import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import axios from 'axios'
import Edit from './Edit/Edit'

class SecretUpdateDelete extends Component {
  //   constructor() {
  //     super()
  //     this.state = {
  //       links: ''
  //     }
  //   }

  //   componentDidMount() {
  //     axios
  //       .get('http://localhost:3001/api/websites')
  //       .then(website => {
  //         this.setState({ links: website.data })
  //       })
  //       .then(

  //       )
  //   }
  removeWobble(e) {
    axios.delete('http://localhost:3001/api/websites/' + e.target.value)
    console.log(e.target.value)
  }

  render() {
    console.log(this.props.links)
    let links = this.props.links.map((link, i) => {
      return (
        <ul key={i}>
          {link.title}{' '}
          <Link to="/edit">
            <button
              value={link._id}
              //  onClick={e => this.editWobble(e)}
            >
              Edit Wooble
            </button>
          </Link>
          <button value={link._id} onClick={e => this.removeWobble(e)}>
            UnWobbafy
          </button>
        </ul>
      )
    })
    return (
      <div>
        <Route path="/edit" render={() => <Edit />} />
        <li>{links}</li>
      </div>
    )
  }
}

export default SecretUpdateDelete
