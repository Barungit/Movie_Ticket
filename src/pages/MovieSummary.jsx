import React, { useEffect, useState } from "react";
import { movieData } from "../services/movie-service";
import { useParams } from "react-router-dom";
import BookticketForm from "./BookticketForm";
import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

function MovieSummary() {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  const [pass, setPass] = useState({
    id: "",
    name: "",
    language: "",
    time: "",
    days: [],
  });
  useEffect(() => {
    movieData()
      .then((data) => {
        setMovies([...data]);
        console.log(data);
        setPass({
          ...data,
          name: data[id].show.name,
          id: data[id].show.id,
          language: data[id].show.language,
          time: data[id].show.schedule.time,
          days: data[id].show.schedule.days,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="bg-light">
      <div className="container-fluid ">
        <br />
        <br />
        <div  className="row d-flex justify-content-around">
          <div className="col-sm-3   ">
            <Card className="m-4 shadow ">
              <div className="photo">
                <CardImg
                  alt="Movie Image"
                  src={movies[id]?.show.image.original}
                  style={{
                    height: 380,
                    width: 350,
                  }}
                />
              </div>
            </Card>
          </div>

          <div className="col-sm-8 ">
            <Card className="my-2  shadow border-2 border-dark rounded-5 p-5">
              <CardBody>
                <CardTitle tag="h2">{movies[id]?.show.name}</CardTitle>
                <br />
                <p><b>Category : </b>
                {movies[id]?.show.genres.map((item, index) => (
                  <span key={index} ><b> {item}</b></span>
                ))}
                 </p>

                <CardSubtitle><p><b>Language : {movies[id]?.show.language}</b></p></CardSubtitle>
                <CardText style={{fontSize: 20, fontWeight: "bold"}}>Summary : </CardText>
                <CardText
                  dangerouslySetInnerHTML={{ __html: movies[id]?.show.summary }}
                  style={{ fontSize: 25 }}
                ></CardText>
                <CardText>
                  <p><b>Rating : {movies[id]?.show.rating.average}</b></p>
                </CardText>
              </CardBody>
            </Card>
          </div>
        </div>
        <br />
        <br />
      </div>
      <div
        className=" container shadow border-2 border-dark rounded-5 p-5 "
        style={{ backgroundColor: "rgba(0, 150, 0, 0.1)" }}
      >
        <div className="row d-flex justify-content-center">
          <div className="col-sm-10">
            <BookticketForm passing={pass} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieSummary;
