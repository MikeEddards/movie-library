import React, { Component } from 'react'
import axios from 'axios'

export default class ApiSearch extends Component {
    constructor(){
        super()
        this.state = {
            search: [],
            searchInput: '',
            pageId: 1,
            status: false,
            title: '',
            poster: '',
            year: ''
        }
    }
    handleInput = (val) => {
        this.setState({searchInput: val})
    }
    handleSearch = () => {
        axios.get(`/api/movieapisearch/${this.state.pageId}/?search=${this.state.searchInput}`).then(
            res => 
                this.setState({search: res.data.Search})
        ).catch(err => console.log(err))
        this.setState({status: true})
    }
    handleAdd = (i) => {
        this.props.addMovie(this.state.search[i])
        this.setState({status: false})
    }
  render() {

    let { search } = this.state
    const movie = search.map((list, i) => 
      <li className='movieCard' key={i} id={list.id}>
        <img className='poster' src={list.Poster} alt=""/>
        <h4>{list.Title}</h4>
        <p>{list.Year}</p>
        <button onClick={() => this.handleAdd(i)}>Add to list</button>
    </li>)



    return (
        <div>
      <div className='addMovieApi'>
          <input className='addInput'onChange={(e) => this.handleInput(e.target.value)} type="text" placeholder='Search external'/>
          <button onClick={this.handleSearch}>Search</button>
        
      </div>
        <div>
        {this.state.status? 
        <div className='display'>
        <ul className="cards">
            {movie}
        </ul>
        </div>
        : null
            
            }

        </div>
      </div>
    )
  }
}
