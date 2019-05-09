const axios = require('axios')
let collection = require('./movieList')


    module.exports ={

        movieList(req, res){
            res.status(200).send(collection)
        },
        getMoviesByTitle(req, res){
            let reqTitle = req.query.title
            let name = reqTitle.toLowerCase()
            let title = collection.map(movie => movie.Title.toLocaleLowerCase())
            let index = title.findIndex(title => name === title)
            res.status(200).send(collection[index])
        },
        addMovie(req, res){
            console.log(req.body)
            let id = collection[collection.length - 1].id + 1
            const newMovie ={
                    id: id,
                    Title: req.body.title,
                    Year: req.body.year,
                    Poster: req.body.poster,    
            }
            collection = [...collection, newMovie]
            res.status(200).send(collection)
          
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