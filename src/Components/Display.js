import React, { Component } from 'react'
import axios from 'axios'
import Edit from './Edit'
import './Display.css'
import AddMovie from './AddMovie';
import EditButton from './EditButton';
export default class Display extends Component {
    constructor(){
        super()
        this.state = {
            list: [],
            delete: false,
            edit: false,
            movieToEdit: []
        }
        this.completeEdit = this.completeEdit.bind(this)
    }
    
    componentDidMount() {
        axios.get('/api/movielist')
        .then(res => {
            this.setState({list: res.data})
          })
      }
      handleClickEdit = (val) => {
        if(this.state.edit === false){
          let find = this.state.list.findIndex(movie => val === movie.id)
          let found = this.state.list[find]
          this.setState({
            movieToEdit: found,
            edit: true
          })
        }
      }
     completeEdit(res){
      this.setState({
        movieToEdit: [],
        edit: false,
        list: res.data})
      }   


  render() {
    
    const { list } = this.state
    const movie = list.map((list, i) => (
      <li className='movieCard' key={i} id={list.id}>
        <img className='poster' src={list.Poster} alt=""/>
        <h4>{list.Title}</h4>
        <p>{list.Year}</p>
        
          <EditButton editButton={this.handleClickEdit}
          id={list.id}/>
          
      </li>
      ))
      return (
        <div>
        <AddMovie complete={this.completeEdit}/>
        <Edit movie={this.state.movieToEdit} completeEdit={this.completeEdit} />

        <div className='display'>
        
          <ul className="cards">
            
            {movie}

          </ul>

        </div>
        
      </div>
    )
  }
}
