import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Toast,
} from "reactstrap";

function BookticketForm(props) {
  
  
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  /* useEffect(() => {
    
  }, [formData]);*/

  const toggleForm = () => {
    setShowForm(!showForm);
    setFormData({
      name: "",
      email: "",
      phone: "",
    });
    setTimeout(() => {
      window.scrollTo({left: 0,
        top: document.body.scrollHeight,
        behavior: 'smooth'});
    }, 100);
    
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone) {
      window.scrollTo({left: 0,
        top: 0,
        behavior: 'smooth'})
      console.log(formData);
      localStorage.setItem("formData", JSON.stringify(formData));
      toast.success("User Details Saved to Localstorage!")
      setShowForm(false);
    } else {
     
      toast.error('Please fill out all fields');
    }
    
  };

  return (
    <div>
      <h5>{props.passing?.time}</h5>
      <h6>{props.passing?.days[0]}</h6>
      <Button onClick={toggleForm} id="btn">Book a Ticket Here!</Button>
      {showForm && (
        <Container className="my-3">
          <Card style={{ border: "3px solid black" }}>
            <CardHeader>
              <h3>Fill this form to Book your seat fast!</h3>
            </CardHeader>

            <CardBody>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label for="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Enter Your Name here.."
                    value={formData.name}
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    placeholder="Enter your Email here"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="phone">Enter Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 5556667770"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="moviename">Movie Name :</Label>
                  <Input
                    id="moviename"
                    name="moviename"
                    value={props.passing?.name}
                    disabled
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="movielang">Movie Language :</Label>
                  <Input
                    id="movielang"
                    name="movielang"
                    value={props.passing?.language}
                    disabled
                  />
                </FormGroup>

                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="days">Days</Label>
                      <Input id="days" name="days" 
                      value={props.passing?.days[0]} 
                      disabled/>
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="Timing">Timing</Label>
                      <Input id="Timing" name="Timing" 
                      value={props.passing?.time}
                      disabled/>
                    </FormGroup>
                  </Col>
                </Row>

                <Button type="submit" color="success" >
                  Submit
                </Button>
               

              </Form>
            </CardBody>
          </Card>
        </Container>
      )}
      
    </div>
  );
}

export default BookticketForm;
