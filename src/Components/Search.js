import React, { Component } from 'react'
import axios from 'axios'

import './Search.css'
export default class Search extends Component {
    constructor(){
        super()
        this.state = {
            title: '',
            selectedMovie: [],
            filter: false

        }
      this.handelSearchInput = this.handelSearchInput.bind(this)
      this.handleGetMovieByTitle = this.handleGetMovieByTitle.bind(this)
      this.clearSearch = this.clearSearch.bind(this)
    }
   handelSearchInput(val){
   
     this.setState({title: val})
    }
 
   handleGetMovieByTitle(){
     this.setState({filter: true})
    axios.get(`/api/moviesearch/:id?title=${this.state.title}`).then((res) => {
      this.setState({selectedMovie: res.data})
    })
    
    this.setState({title: ''})
   } 
   clearSearch(){
     this.setState({filter: false})
   }

  render() {
    return (
      <div>
        
        {this.state.filter ? 
        <div>
        <div className='movieCard'>
          <img src={this.state.selectedMovie.Poster} alt=""/>
          <h4>{this.state.selectedMovie.Title}</h4>
      
          <button onClick={this.clearSearch}>Exit</button>
         
          </div>
          </div>
          
          : null }
         
        <div >
            <input className='movieSearch' type="text" placeholder='Title' onChange={(e)=> this.handelSearchInput(e.target.value)}/>
            <button onClick={() => this.handleGetMovieByTitle()}>Search</button>
            
        </div>
      </div>
    )
  }
}
