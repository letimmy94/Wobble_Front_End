import React, { Component } from 'react'
import axios from 'axios'

class Edit extends Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(e) {
    e.preventDefault()
    axios
      .put(`https://wobble-back-end.herokuapp.com/api/websites/${this.props.id}`, {
        title: this.refs.title.value,
        website: this.refs.link.value
      })
      .then(data => console.log(data))
      .catch(err => console.error('YEAH APPARENTLY NOT WERKING', err))
    console.log(this.props.id)
    console.log(this.refs.title.value)
    console.log(this.refs.link.value)
    window.location.reload()
  }

  render() {
    // let id = this.props.id
    // console.log(id)
    return (
      <div>
        <form>
          <input type="text" ref="title" placeholder={`${this.props.title}`} />
          <input type="text" ref="link" placeholder={`${this.props.link}`} />
          <input
            type="submit"
            value="Save Changes to Wabbleh"
            onClick={this.handleSubmit}
          />
        </form>
      </div>
    )
  }
}

export default Edit
