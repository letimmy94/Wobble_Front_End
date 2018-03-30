import React, { Component } from 'react'
import axios from 'axios'
import './Commentadd.css'

//NHI -- I copied and pasted from your add link component and fiddled around... but I don't totally know what to do so I'm handing things off.
class CommentAdd extends Component {
  constructor() {
    super()
    this.state = {
      comment: '',
      name: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handlePost = this.handlePost.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.setState(
      {
        comment: this.refs.comment.value,
        name: this.refs.name.value
      },
      this.handlePost
    )
  }

  handlePost() {
    axios
      .post('http://localhost:3001/api/comments', {
        comment: this.state.comment,
        name: this.state.name
      })
      .then(data => {
        console.log(data)
      })
  }

  render() {
    return (
      <div>
        <form>
          <input
            className="add-comment"
            type="textarea"
            ref="comment"
            placeholder="Add comment!"
          />
          <br />
          <input
            className="add-comment-name"
            type="text"
            ref="name"
            placeholder="Name!"
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

export default CommentAdd
