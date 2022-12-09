import React, {useContext} from "react";
import { GlobalContext } from "../context/themeContext";
import Button from 'react-bootstrap/Button'

const Footer = () => {

  const {theme} = useContext(GlobalContext)
  
  return (
    <>
      <div id="getintouch" className="contact-me">
        <h2 className={`subtitle-${theme}`}>Get In Touch</h2>
        <h3 className={`section-title-${theme}`}>If you like what you see.</h3>
        <p>Contact me to if you want to discuss over something</p>
        <Button type="button" variant="danger" className={`btn-${theme}`} href="mailto:enrico.montanari13@gmail.com">CONTACT ME</Button>
      </div>
  
  
      <a className={`footer-link-${theme}`} href="https://www.linkedin.com/in/EnricoMontanari13/">LinkedIn</a>
      <a className={`footer-link-${theme}`} href="https://github.com/Kirilanshelo">Github</a>
      <p className={`credits-${theme}`}>© 2022 Enrico Montanari.</p>
    </>
  )
};

export default Footer;