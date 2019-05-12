import React, { Component } from 'react'

export default class AddButton extends Component {
  render() {

    return (
      <div>
        <button onClick={() => {this.props.addButton(this.props.id)}}>Add to list</button>
      </div>
    )
  }
}
