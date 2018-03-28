import React, { Component } from 'react'
import './AddLink.css'
import axios from 'axios'

class AddLink extends Component {
  constructor() {
    super()
    this.state = {
      // newLink: []
      title: 'hi',
      website: 'aefe'
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handlePost = this.handlePost.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()

    // let addedLink = {
    //   title,
    //   link
    // }
    this.setState(
      {
        title: this.refs.title.value,
        website: this.refs.link.value
      },
      this.handlePost
    )
    // let newLink = this.state.newLink
    // newLink.push(addedLink)
    // this.setState({ newLink: newLink })
  }

  handlePost() {
    axios
      .post('http://localhost:3001/api/websites', {
        title: this.state.title,
        website: this.state.website
      })
      .then(data => {
        console.log(data)
      })
    console.log(this.state.title)
  }

  render() {
    return (
      <div>
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
