import React, { Component } from 'react'
import axios from 'axios'
import './CommentAdd.css'

//NHI -- I copied and pasted from your add link component and fiddled around... but I don't totally know what to do so I'm handing things off.
class CommentAdd extends Component {
	constructor() {
		super()
		this.state = {
			comment: '',
			name: ''
		}
	}

	inputChange = e => {
		const { name, value } = e.target
		this.setState({
			[name]: value
		})
	}

	handlePost = () => {
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
					<h1 className="add-header">ADD A COMMENT</h1>
					<input
						className="add-comment-name"
						type="text"
						name="name"
						onChange={this.inputChange}
						value={this.state.name}
						placeholder="Name!"
					/>
					<br />
					<input
						className="add-comment"
						type="textarea"
						name="comment"
						onChange={this.inputChange}
						value={this.state.comment}
						placeholder="Add comment!"
					/>
					<br />
					<input
						className="submit-btn"
						type="submit"
						value="Submit"
						onClick={this.handlePost}
					/>
				</form>
			</div>
		)
	}
}

export default CommentAdd
