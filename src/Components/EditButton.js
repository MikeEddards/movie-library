import React, { Component } from 'react'

export default class EditButton extends Component {

  render() {
     
    return (
      <div>
        <a href="#edit">
        <button onClick={() => {
            this.props.editButton(this.props.id)}}>Edit</button>
            </a>
      </div>
    )
  }
}
