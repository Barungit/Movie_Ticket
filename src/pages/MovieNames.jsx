import React, { useEffect, useState } from 'react'
import { movieData } from '../services/movie-service'
import { Button, Card, CardBody, CardGroup, CardImg, CardSubtitle, CardText, CardTitle, ListGroup, ListGroupItem, ListGroupItemHeading } from 'reactstrap'
import { Link } from 'react-router-dom'


function MovieNames({children}) {
  const [movies,setMovies]=useState([])
  useEffect(()=>{
    movieData().then(data=>{
      setMovies([...data]);
      console.log(data);
      console.log(data[0]);
    }).catch(error=>{
      console.log(error);
    })
  },[])
  return (
    
    <div>
      
      <h1>All Movies :</h1>
      
      {/*<ListGroup>
          {movies && movies.map((mov,index) => {
            return (
                <ListGroupItem key={index} action={true} tag={Link} to={'/summary/'+ mov.show.id}>
                   <ListGroupItemHeading>
                      {mov.show.name}
                   </ListGroupItemHeading>
                </ListGroupItem>
            )
        })}
      </ListGroup>*/}

        <CardGroup>
        
        {movies && movies.map((mov,index) => {
           return (
  <Card>
    <CardImg
      alt="Movie image"
      src={mov.show.image.medium}
      top
      width="50%"
    />
    <CardBody>
      <CardTitle tag="h5">
      {mov.show.name}
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        {mov.show.language}
      </CardSubtitle>
      <CardText dangerouslySetInnerHTML={{__html:mov.show.summary.substring(0,50) + "..."}}>
      </CardText>
      <Button tag={Link} to={'/summary/'+ index}>
        Know More
      </Button>
    </CardBody>
  </Card>
   )
  })}
  </CardGroup>
    </div>
  )
}

export default MovieNames