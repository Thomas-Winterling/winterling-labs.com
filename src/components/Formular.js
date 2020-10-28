import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from 'emailjs-com';

const Formular = () => {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_jnpqsi9', 'template_p4vptgk', e.target, 'user_8GNynEJ3AiarZRMKjgbWu')
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
          <Input type="checkbox" required />{' '}
          Ja, ich habe die Datenschutzerklärung gelesen und erkläre mich damit einverstanden.
        </Label>
      </FormGroup>
      <Button>Senden</Button>
    </Form>
    </div>
  );
}

export default Formular