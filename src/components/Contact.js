import React from 'react'
import Formular from '../components/Formular';
import Karte from '../components/Karte';

function Contact() {
    return (
        <div className="contact">
            <div data-aos="fade-right" className="headline">
                <h1>Kontakt</h1>
                <div className="bar"></div>
            </div>
            <Formular />
            <div className="map-container">
                <Karte/>
            </div>


        </div>
    )
}

export default Contact
