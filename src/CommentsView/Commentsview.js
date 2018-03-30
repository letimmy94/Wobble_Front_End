import React, { Component } from 'react'
import './CommentsView.css'
import CommentAdd from '../CommentAdd/CommentAdd'

class CommentsView extends Component {
  render() {
    console.log(this.props.websiteObject[0].comments)
    console.log(this.props.websiteObject[0].comments[0].comment)
    let comments = this.props.websiteObject[0].comments
    let comment = comments.map((comment, i) => {
      return (
        <p key={i}>{comment.name}<br />{comment.comment}<br />{comment.date} {console.log(comment.comment)}</p>

      )
    })
    console.log(comments)
    return (
      <div>
        <h1 className="add-header">Comments</h1>
        <ul className="comments-ul">
          <li className="comments-li">
            {comment}
          </li>
        </ul>
        <CommentAdd />
      </div>
    )
  }
}

export default CommentsView
