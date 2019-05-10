import React, { Component } from 'react'

export default class EditButton extends Component {

  render() {
     
    return (
      <div>
        <button onClick={() => {
            this.props.editButton(this.props.id)}}>Edit</button>
      </div>
    )
  }
}
