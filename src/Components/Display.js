import React, { Component } from 'react'
import axios from 'axios'
import './Display.css'
export default class Display extends Component {
    constructor(){
        super()
        this.state = {
            list: [],
            delete: false,
            edit: false
        }
    }
    
    componentDidMount() {
        axios.get('/api/movielist')
        .then(res => {
            this.setState({list: res.data})
          })
      }
    handleClickEdit = () => {
      this.setState({edit: true})
    }
     editField = (e) => {
       console.log(e)
      return (
        <form>
          <h2>Edit Title</h2>
          <input type="text"/>
          <input type="text"/>
          <button>Submit</button>
        </form>
      )
    }
  render() {
    const { list } = this.state
    const movie = list.map(list => (
      <div className='movieCard' key={list.id}>
        <img src={list.Poster} alt=""/>
        <h4>{list.Title}</h4>
        <p>{list.Year}</p>
        <span>
          { this.state.edit ? this.editField() : null }
          <button onClick={this.handleClickEdit} name='edit'>Edit</button>
          <button name='delete'>Delete</button>
        </span>
      </div>
      
     
  ))
    return (
      <div>
        
          
        <div className="cards">
            {movie}
        </div>
      </div>
    )
  }
}
