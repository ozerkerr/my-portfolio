// import './App.css';
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

function Contact() {
  return (
    <div className="d-flex justify-content-center">
      <Card className="w-50 d-flex justify-content-center">
        <Card.Header className="text-center">Contact Me</Card.Header>
        <Form>
          <Form.Group className="mb-3 mt-3 mx-2" controlId="formBasicEmail">
            <Form.Label>Name:</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" />
          </Form.Group>
          <Form.Group className="mb-3 mx-2" controlId="formBasicEmail">
            <Form.Label>Email address:</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3 mx-2" controlId="formBasicPassword">
            <Form.Label>Message:</Form.Label>
            <Form.Control as="textarea" placeholder="Enter Message" rows="3" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card>
    </div>
  );
}

export default Contact;
