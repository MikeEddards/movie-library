import React, { Component } from 'react'
import axios from 'axios'
import './AddMovie.css'
export default class AddMovie extends Component {
    constructor(){
        super()
        this.state = {
            title: '',
            year: '',
            poster: '',  
            addMovie: false ,
            newMovie: [] 
        }
        this.toggleAdd = this.toggleAdd.bind(this)
        this.handleTitle = this.handleTitle.bind(this)
        this.handleYear = this.handleYear.bind(this)
        this.handlePoster = this.handlePoster.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
    }
    toggleAdd(){
      if(this.state.addMovie){
        this.setState({addMovie: false})
      }else{

        this.setState({addMovie: true})
      }
    }
    handleTitle(val){
      this.setState({title: val})
    }
    handleYear(val){
      this.setState({year: val})
    }
    handlePoster(val){
      this.setState({poster: val})
    }

    handleAdd(){
      let newMovie = {
        title: this.state.title,
        year: this.state.year,
        poster: this.state.poster 
      }
      axios.post('/api/addmovie',newMovie).then(
        res => {this.props.complete(res)
        this.setState({title: '',
      year: '',
    poster: ''})
      })
    }



  render() {
    return (
      <div>
        {this.state.addMovie? 
        <div className='addMovie'>

          <input className='addInput' onChange={(e)=>this.handleTitle(e.target.value)} type="text" placeholder='Title'/>
          <input className='addInput' onChange={(e)=>this.handleYear(e.target.value)} type="text" placeholder='Year'/>
          <input className='addInput' onChange={(e)=>this.handlePoster(e.target.value)} type="text" placeholder='Url for Movie Poster'/>
          <button onClick={this.handleAdd}>Add to Collection</button>
        </div> 
        : null
      
      }

        <button className='addMovieButton' onClick={this.toggleAdd}>Add Movie</button>
      </div>
    )
  }
}
