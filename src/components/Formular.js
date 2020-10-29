import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from 'emailjs-com';
import data from '../fixtures/config.json';

const Formular = () => {

    function sendEmail(e) {
        e.preventDefault();
    
        console.log(data[0].name);
        emailjs.sendForm(data[0].SERVICE_ID, data[0].TEMPLATE_ID, e.target, data[0].USER_ID)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      }

  return (
    <div data-aos="zoom-in-up" className="formular">
    <Form onSubmit={ sendEmail }>
        <FormGroup>
        <Label for="exampleEmail">Name</Label>
        <Input type="text" name="name" id="exampleEmail" placeholder="Name" required/>
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="E-Mail" required/>
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Betreff</Label>
        <Input type="text" name="subject" id="exampleEmail" placeholder="Betreff" required/>
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Nachricht</Label>
        <Input type="textarea" name="message" id="exampleText" placeholder="Nachricht"  required/>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" required />
          {data[2].data_protection}
        </Label>
      </FormGroup>
      <Button>Senden</Button>
    </Form>
    </div>
  );
}

export default Formular