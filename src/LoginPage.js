import React from "react";
import { Form, FormInput, FormGroup } from "shards-react";
import { Container, Row, Col } from "shards-react";
import { Button } from "shards-react";
import {Link} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
export default function LoginPage() {
  
  return (
      
    <Container className="dr-example-container">
        <center><img src="seer.png"width="20%"></img></center>
        <br></br>
        <h3  style={{color: '#007bff'}}>LOGIN</h3>
        <h5>Enter your details to login</h5>
        <br></br>
        <Row>
            <Col sm={{ size: 8, order: 2, offset: 2 }}>
    <Form >
      <FormGroup>
        <label htmlFor="#username">Username</label>
        <FormInput id="#username" placeholder="Username" />
      </FormGroup>
      <FormGroup>
        <label htmlFor="#password">Password</label>
        <FormInput type="password" id="#password" placeholder="Password" />
      </FormGroup>
    </Form>
    <br></br>
    <a href="../RegisterPage" onclick = "RegisterPage()" >New User? Click here to Sign Up.</a>
    <br></br>
    <br></br><Button>Login</Button>
    </Col>
    </Row>
    </Container>
  );
}