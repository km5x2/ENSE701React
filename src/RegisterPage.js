import React from "react";
import { Form, FormInput, FormGroup } from "shards-react";
import { Container, Row, Col } from "shards-react";
import { Button } from "shards-react";

export default function RegisterPage() {
    
    return (
        <Container className="dr-example-container">
        <center><img src="seer.png"width="20%"></img></center>
        <br></br>
        <h3  style={{color: '#007bff'}}>REGISTRATION</h3>
        <br></br>
        <Row>
            <Col sm={{ size: 8, order: 2, offset: 2 }}>
    <Form >
      <FormGroup>
        <label htmlFor="#firstname">First Name</label>
        <FormInput id="#firstname" placeholder="Enter your first name" />
      
        <label htmlFor="#lastname">Last Name</label>
        <FormInput id="lastname" placeholder="Enter your last name" />
      
        <label htmlFor="#email">Your E-Mail</label>
        <FormInput id="email" name="email" placeholder = "Enter your email"/>
      
        <label htmlFor="#password">Password</label>
        <FormInput type="password" id="#password" placeholder="Enter your password" />

        <label htmlFor="#confirmpassword">Confirm Password</label>
        <FormInput type="confirmpassword" id="#confirmpassword" placeholder="Confirm your password" />
      </FormGroup>
    </Form>
    
    <br></br>
    <br></br>
    <Button>Register</Button> 
    <br></br>
    <br></br>
    <a href="../Loginpage" onclik = "Loginpage()" >Already have a account? click here to login.</a>
    </Col>
    </Row>
    </Container>
    );
}