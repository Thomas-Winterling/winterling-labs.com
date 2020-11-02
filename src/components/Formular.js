import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from 'emailjs-com';
import data from '../fixtures/config.json';
import db from '../firebase';


const Formular = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  // emailJs
    function sendEmail(e) {
        e.preventDefault();


        //firebase
        db.collection(data[3].prefix).add({
          name: name,
          email: email,
          subject: subject,
          message: message
          
        }).then(() => {
          setLoader(true);
        }).catch((error) => {
          console.log(error.message);
        })
    
        console.log(data[0].name);
        emailjs.sendForm(data[0].SERVICE_ID, data[0].TEMPLATE_ID, e.target, data[0].USER_ID)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
            setLoader(false);
              console.log(error.text);
          });

      }

  return (
    <div data-aos="zoom-in-up" className="formular">
    <Form onSubmit={ sendEmail }>
        <FormGroup>
        <Label for="exampleEmail">Name</Label>
        <Input type="text" name="name" placeholder="Name" onChange={(e) => setName(e.target.value)} required/>
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" placeholder="E-Mail" onChange={(e) => setEmail(e.target.value)} required/>
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Betreff</Label>
        <Input type="text" name="subject" placeholder="Betreff" onChange={(e) => setSubject(e.target.value)} required/>
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Nachricht</Label>
        <Input type="textarea" name="message" placeholder="Nachricht" onChange={(e) => setMessage(e.target.value)}  required/>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" required />
          {data[2].data_protection}
        </Label>
      </FormGroup>
      <Button style={{background : loader
      ? 'green' : 'green'
      }}>Senden</Button>
    </Form>
    </div>
  );
}

export default Formular