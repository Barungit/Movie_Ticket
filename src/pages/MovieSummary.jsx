import React, { useEffect, useState } from 'react'
import { movieData } from '../services/movie-service'
import { useParams } from 'react-router-dom'
import BookticketForm from './BookticketForm'
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap'


function MovieSummary() {
  const {id} = useParams()
  const [movies,setMovies]=useState([])
  const [pass,setPass]=useState(
    {
      id:"",
      name:"",
      language:"",
      time:"",
      days:[]
    }
  );
  useEffect(()=>{
    movieData().then(data=>{
      setMovies([...data]);
      console.log(data);
      setPass({ ...data,
        name:data[id].show.name,
        id:data[id].show.id,
        language:data[id].show.language,
        time:data[id].show.schedule.time,
        days:data[id].show.schedule.days})
    }).catch(error=>{
      console.log(error);
    })
  },[])
  
  

  return (
    <>
    <div>
      
      <h1>Barun</h1>
      <h1>{id}</h1>
      <h2>{movies[id]?.show.name}</h2>
      <Card className="my-2">
        <div className='container'>
        <CardImg
      alt="Movie Image"
      src={movies[id]?.show.image.original}
      style={{
        height: 380,
        width: 350,
      }}
      
    />


        </div>
    
    <CardBody>
      <CardTitle tag="h5">
      {movies[id]?.show.name}
      </CardTitle>
      <CardSubtitle>
      {movies[id]?.show.language}
      </CardSubtitle>
      <CardText dangerouslySetInnerHTML={{__html:movies[id]?.show.summary}}>
      </CardText>
      <CardText>
        <small className="text-muted">
          Last updated 3 mins ago
        </small>
      </CardText>
    </CardBody>
  </Card>
  <BookticketForm passing = {pass} />
    </div>
    </>
    )
}

export default MovieSummary