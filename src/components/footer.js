import React from "react";
import Button from 'react-bootstrap/Button'

const Footer = () => {
  return (
    <>
      <div id="getintouch" className="contact-me">
        <h2 className="subtitle">Get In Touch</h2>
        <h3 className="section-title">If you like what you see.</h3>
        <p>Contact me to if you want to discuss over something</p>
        <Button type="button" variant="danger" className="btn" href="mailto:enrico.montanari13@gmail.com">CONTACT ME</Button>
      </div>
  
  
      <a className="footer-link" href="https://www.linkedin.com/in/EnricoMontanari13/">LinkedIn</a>
      <a className="footer-link" href="https://github.com/Kirilanshelo">Github</a>
      <p className="credits">© 2022 Enrico Montanari.</p>
    </>
  )
};

export default Footer;