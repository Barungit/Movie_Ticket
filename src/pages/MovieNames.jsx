import React, { useEffect, useState } from "react";
import { movieData } from "../services/movie-service";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import { Link } from "react-router-dom";

function MovieNames({ children }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    movieData()
      .then((data) => {
        setMovies([...data]);
        console.log(data);
        console.log(data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="container-fluid bg-gradient bg-primary">
      <h1>Movies in Cinema :</h1>
      <div className="row">
      {movies &&
          movies.map((mov, index) => {
            return (
              <div className=" col-lg-2 col-sm-3 col-md-4">
                  <Card className="mx-2 my-3 border-2 border-dark shadow rounded-5">
                    <CardImg
                      alt="Movie image"
                      src={mov.show.image?.medium}
                      className="rounded-top-5 shadow"
                     
                    />
                    <CardBody>
                      <CardTitle tag="h5">{mov.show.name}</CardTitle>
                      <CardSubtitle className="mb-2 text-muted" tag="h6">
                        {mov.show.language}
                      </CardSubtitle>
                      <CardText
                        dangerouslySetInnerHTML={{
                          __html: mov.show.summary.substring(0, 50) + "...",
                        }}
                      ></CardText>
                      <Button tag={Link} to={"/summary/" + index} >
                        Know More
                      </Button>
                    </CardBody>
                  </Card>
                </div>
            );
          })}

      </div>
    </div>
  );
}

export default MovieNames;
