import React, { Component } from 'react'
import axios from 'axios'
import './CommentAdd.css'

//NHI -- I copied and pasted from your add link component and fiddled around... but I don't totally know what to do so I'm handing things off.
class CommentAdd extends Component {
  constructor() {
    super()
    this.state = {
      // newLink: []
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
        // i don't know if this is what I am supposed to be calling here...
        comment: this.refs.comment.value,
        name: this.refs.name.value
      },
      this.handlePost
    )
  }

  handlePost() {
    axios
      //changed the .post link because it's the api/comments.... but is it comments of individual post? do we need an ID involved here?
      // on the back end I believe it's api/comments/:id ??? but i'm not sure how to call that here.
      .post('http://localhost:3001/api/comments', {
        //do these need to be this.state.comments.comment and this.state.comments.name????
        comment: this.state.comment,
        name: this.state.name
      })
      .then(data => {
        console.log(data)
      })
    // console.log(this.state.comment)
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
