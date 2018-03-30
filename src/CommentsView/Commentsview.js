import React, { Component } from 'react'
import './CommentsView.css'
import CommentAdd from '../CommentAdd/CommentAdd'

//think i'm doing this right...
class CommentsView extends Component {
  render() {
    console.log(this.props.comments[0])
    return (
      <div>
        <h1>Comments</h1>
        {/* <ol>
          <li> */}
        {/* <p>{this.props.comments}</p>
            <p>
              {this.props.comments.name} | {this.props.comments.date}
            </p>
          </li>
        </ol> */}
        <CommentAdd />
      </div>
    )
  }
}

export default CommentsView
