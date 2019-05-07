import React, { Component } from 'react'
// import axios from 'axios'
import './Search.css'
export default class Search extends Component {
    constructor(){
        super()
        this.state = {
            title: '',
            genre: '',

        }
    }


  render() {
    return (
      <div>
        <form >
            <input className='movieSearch' type="text" placeholder='Title'/>
            <button>Search</button>

        </form>
      </div>
    )
  }
}
