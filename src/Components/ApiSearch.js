import React, { Component } from 'react'
import axios from 'axios'
import './ApiSearch.css'

import AddButton from './AddButton'

export default class ApiSearch extends Component {
    constructor(){
        super()
        this.state = {
            search: [],
            searchInput: '',
            pageId: 1,
            status: false,
            totalSearch: ''
     
        }
    }
    handleInput = (val) => {
        this.setState({searchInput: val})
    }
    handleSearch = () => {
        axios.get(`/api/movieapisearch/${this.state.pageId}/?search=${this.state.searchInput}`).then(
            res => 
                {
                    this.setState({search: res.data.Search,
                        totalSearch: res.data.totalResults})}
        ).catch(err => console.log(err))
        this.setState({status: true,
        pageId: this.state.pageId + 1})
    }
    handleAdd = (i) => {
        this.props.addMovie(this.state.search[i])
        this.setState({status: false,
        totalSearch: '',
    pageId: 1})
    
    }    

       handleNextPage = () => {
        
        if(this.state.pageId < +this.state.totalSearch / 10 && this.state.pageId === 1){
            console.log(this.state.pageId)
        }
        
        this.handleSearch()
    }
  render() {
    
    let { search } = this.state
    const movie = search.map((list, i) => 
        
      <li className='movieCard' key={i} id={list.id}>
        <img className='poster' src={list.Poster} alt=""/>
        <h4>{list.Title}</h4>
        <p>{list.Year}</p>
        <AddButton addButton={this.handleAdd} id={i}/>
    </li>)



    return (
        
        <div>
      <div className='addMovieApi'>

        
          <input className='addInput'onChange={(e) => this.handleInput(e.target.value)} type="text" placeholder='Search external'/>
          <button onClick={this.handleSearch}>Search</button>
        
      </div>
        <div>
        {this.state.status? 
        <div>
        <ul className="cardsApi">
            {movie}
        </ul>
        <div>
        
            <button onClick={this.handleNextPage}>Next &gt;</button>
        </div>
        </div>
        : null
            
            }

        </div>
      </div>
    )
  }
}
