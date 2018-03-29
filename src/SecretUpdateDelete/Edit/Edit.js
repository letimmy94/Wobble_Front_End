import React, { Component } from 'react'

class Edit extends Component {
  render() {
    console.log(this.props.title)
    return (
      <div>
        <form
        // onSubmit={e => this.props.editWobble(e)}
        >
          <input type="text" placeholder={`${this.props.title}`} />
          <input type="text" placeholder={`${this.props.website}`} />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default Edit
