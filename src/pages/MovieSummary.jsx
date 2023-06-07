import React, { useEffect, useState } from 'react'
import { movieData } from '../services/movie-service'
import { useParams } from 'react-router-dom'


function MovieSummary() {
  const {id} = useParams()
  const [movies,setMovies]=useState([])
  useEffect(()=>{
    movieData().then(data=>{
      setMovies([...data]);
      console.log(data);
      
    }).catch(error=>{
      console.log(error);
    })
  },[])
  
  return (
   
    <div>
      <h1>Barun</h1>
      <h1>{id}</h1>
      <h2>{movies[id]?.show.name}</h2>
    </div>
    )
}

export default MovieSummary