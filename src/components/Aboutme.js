import React from 'react'
import { Container, Divider } from 'semantic-ui-react'
import { Carousel } from 'react-bootstrap';
import Typed from '../img/typed.png' 
import Statistics from '../img/statistics.png' 
import Diagramm1 from '../img/dia1.png' 


const Aboutme = () => (
  <div id="aboutme" className="aboutme">
      
    <Container textAlign='justified'>
    <Container textAlign='center'>
      <div data-aos="fade-right" className="headline">
        <h1>Über mich</h1>
        <div className="bar"></div>
      </div>
    </Container>
      <Divider />
      <p data-aos="zoom-in-up">
        Herzlich Willkommen bei Winterling-labs.com. Wir sind eine kleine Internet Argentur aus Landshut und haben uns auf den Berreich Webentwicklung spezialisiert.
        Unser Ziel ist es kleine und mittelständische Unternehmen erfolgreich im Internet zu präsentieren.Wir entwickeln Webseiten, Apps und Erweiterungen für CMS Systeme wie Joomla! und Wordpress.
        Ein gepflegter Kontakt zu unseren Kunden ist uns wichtig, wir begleiten Sie von der Entwicklung eines Konzepts bis hin zur Erstellung Ihres Webprojects.
      </p>
      
    </Container>

    <div data-aos="zoom-in-left" className="image">
      <Carousel
        interval="5000"
        prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />}
        nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />}
      >
        <Carousel.Item>
          <img
          className="d-block w-100"
          src={Typed}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Erstellen Sie ihre eigenen Extensions</h3>
          <p>Wir erstellen maßgeschneiderte Erweiterungen für Ihr Projekt.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
          <img
          className="d-block w-100"
          src={Statistics}
          alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Erstellen Sie Ihre eigenen Statistiken</h3>
            <p>Wir werten Ihre Daten aus und stellen Sie grafisch dar.</p>
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
          <img
            className="d-block w-100"
            src={Diagramm1}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Erstellen Sie Ihre eigenen Statistiken</h3>
            <p>Wir werten Ihre Daten aus und stellen Sie grafisch dar.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    
  </div>
)

export default Aboutme;
