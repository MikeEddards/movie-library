import React, { Component } from 'react'
import axios from 'axios'
import './Display.css'
export default class Display extends Component {
    constructor(){
        super()
        this.state = {
            list: []
        }
    }
    
    componentDidMount() {
        axios.get('/api/movielist')
        .then(res => {
            this.setState({list: res.data})
          })
      }
  render() {
    const { list } = this.state
    const movie = list.map(list => (
      <div className='movieCard'>
      <img src={list.Poster} alt=""/>
      <h4>{list.Title}</h4>
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
