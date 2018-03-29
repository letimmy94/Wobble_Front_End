import React, { Component } from 'react'
import './CommentsView.css'

//think i'm doing this right...
class CommentsView extends Component {
  render() {
    return (
      <div>
        <ol>
          <li>
            <p>{this.props.comments.comment}</p>
            <p>
              {this.props.comments.name} | {this.props.comments.date}
            </p>
          </li>
        </ol>
      </div>
    )
  }
}

export default CommentsView
