const axios = require('axios')
let collection = require('./movieList')


    module.exports ={

        movieList(req, res){
            res.status(200).send(collection)
        },
        getMoviesById(req, res){
            const movie = collection.filter((collection)=> {
                return collection.id === + req.params.id
            } )
            res.status(200).send(movie[0])
        },
        addMovie(req, res){
            
            let id = collection[collection.length - 1].id + 1
            const newMovie ={
                    id: id,
                    Title: req.body.Title,
                    Year: req.body.Year,
                    Poster: req.body.Poster,    
            }
            collection = [...collection, newMovie]
            res.status(200).send(collection)
            console.log(collection)
        },
        editMovie(req, res){
        
            
            let { title, poster  } = req.query
            // let { } = req.query
            let paramId = +req.params.id
      
            let id = collection.findIndex(movie => {return paramId === movie.id })
          console.log(title,poster)
            collection[id] = {
                id: paramId,
                Title: title || collection[id].Title,
                Year: collection[id].Year,
                imdbId: collection[id].imdbID,
                Type: collection[id].Type,
                Poster: poster || collection[id].Poster
            }
            console.log(collection[id])
            
            res.status(200).send(collection)
        },
        deleteMovie(req, res){
            let deleteId = +req.params.id
            let index = collection.findIndex(movie => {return deleteId === movie.id })
            collection.splice(index, 1)
            res.status(200).send(collection)
        }
            
        
            
        

}