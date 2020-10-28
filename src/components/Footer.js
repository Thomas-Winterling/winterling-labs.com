import React from 'react';
import Cookie from '../components/Cookie';



function Footer() {

    

        const date = () => {
            let dateTime = new Date();
            let year = dateTime.getFullYear();
            return year;
        }

   
   


    return (
        <div className="footer">
            <p>Copyright { date() }</p>
            <p>Winterling-labs.com</p>
            <Cookie />
        </div>
    )
}

export default Footer;
