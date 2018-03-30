import React, { Component } from 'react'
import './AddLink.css'
import axios from 'axios'

class AddLink extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      website: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handlePost = this.handlePost.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.setState(
      {
        title: this.refs.title.value,
        website: this.refs.link.value
      },
      this.handlePost
    )
  }

  handlePost() {
    // e.preventDefault()
    axios
      .post('http://wobble-back-end.herokuapp.com/api/websites', {
        title: this.state.title,
        website: this.state.website
      })
      .then(data => {
        console.log(data)
      })
      .then(window.location.assign('/home'))
      .catch(err => console.log(err))
    console.log(this.state.title)
  }

  render() {
    return (
      <div>
        <h1 className="add-header">ADD A WOOBLE</h1>
        <form className="add-link-form">
          <input
            className="add-link-text-area"
            type="text"
            ref="title"
            placeholder="Title"
          />
          <br />
          <input
            className="add-link-text-area"
            type="text"
            ref="link"
            placeholder="Add your Link..."
          />
          <br />
          <input
            className="submit-btn"
            type="submit"
            value="Submit"
            onClick={this.handleSubmit}
          />
        </form>
      </div>
    )
  }
}

export default AddLink
