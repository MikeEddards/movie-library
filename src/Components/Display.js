import React, { Component } from 'react'
import axios from 'axios'
import cors from 'cors'
export default class Display extends Component {
    constructor(){
        super()
        this.state = {
            list: []
        }
    }
    
    componentDidMount() {
        axios.get('http://localhost:4100/api/movielist')
        .then(res => {
            this.setState({list: res.data})
          })
      }
  render() {
    const { list } = this.state
    return (
      <div>
        <div className="cards">
            {list.map(list => (
                <div className='movieCard'>
                <img src={list.Poster} alt=""/>
                <h4>{list.Title}</h4>
                </div>
            ))

            }
        </div>
      </div>
    )
  }
}
