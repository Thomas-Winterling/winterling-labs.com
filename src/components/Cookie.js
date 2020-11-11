import React from 'react';
import CookieConsent from "react-cookie-consent";
import {
    Link,
  } from "react-router-dom";

function Cookie() {
    return (
        <div>
            <CookieConsent
                location="bottom"
                buttonText="Verstanden"
                cookieName="myAwesomeCookieName2"
                style={{ background: "#2B373B" }}
                buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
                expires={150}
                
            >
                Diese Website nutzt Cookies, um das Besucherverhalten auszuwerten und bestmögliche Funktionalität bieten zu können. Wenn Sie das nicht möchten, können Sie Cookies in Ihrem Browser deaktivieren.<Link to="/datenschutz"> Mehr zum Datenschutz.</Link>
                
            </CookieConsent>
        </div>
    )
}

export default Cookie;
