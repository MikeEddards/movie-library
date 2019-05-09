import React, { Component } from 'react'
import axios from 'axios'
import './Search.css'
export default class Search extends Component {
    constructor(){
        super()
        this.state = {
            title: '',
            selectedTitle: ''

        }
      
    }
   handelSearchInput = val => this.setState({title: val})
 
   handleGetMovieById = (e) => {
     e.preventDefault()
    axios.get(`/api/movielist/${this.state.title}`).then((res) => {
      console.log(res.data)
      this.setState({selectedTitle: res.data})
    })
    this.setState({title: ''})
   } 

  render() {
    return (
      <div>
        <form onSubmit={this.handleGetMovieById}>
            <input className='movieSearch' type="text" placeholder='Title' onChange={(e)=> this.handelSearchInput(e.target.value)}/>
            <button>Search</button>

        </form>
      </div>
    )
  }
}
