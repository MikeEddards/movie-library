import React, { Component } from 'react'
import axios from 'axios'
import './Edit.css'
export default class Edit extends Component {
      constructor(props){
        super(props)
        this.state = {
          title: '',
          poster: ''
        }
        this.handleEditSubmit = this.handleEditSubmit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
      }
  getInputTitle = val => {
    this.setState({title: val})
  }
  getInputPoster = val => {
    this.setState({poster: val})
  }
  handleEditSubmit(){
    let poster = this.state.poster
    let title = this.state.title
    let id = this.props.movie.id
    axios.put(`/api/edit/${id}?title=${title}&poster=${poster}`)
    .then( res => {this.props.completeEdit(res)
    this.setState({title: '',
  poster: ''})})
  }
  handleDelete(){
    let id = this.props.movie.id
    axios.delete(`/api/deletemovie/${id}`)
    .then((res) => {this.props.completeEdit(res)}
    )
  }
    
  render() {

    return (
      <div>
        {this.props.movie.id ? 
      <div className='editCard'>
        <div className='card'>
        <img src={this.props.movie.Poster} />
        <div>
        <input className='input' onChange={e => this.getInputTitle(e.target.value)} type="text" placeholder={this.props.movie.Title}/>
        <input className='input' onChange={e => this.getInputPoster(e.target.value)} type="text" placeholder={'Poster'}/>
        <button onClick={this.handleEditSubmit}>Submit Edit</button> 
        </div>
        <button onClick={this.handleDelete}>Delete</button>
        </div>
        
        </div>
        : null}
        </div>
    )
  }
}



