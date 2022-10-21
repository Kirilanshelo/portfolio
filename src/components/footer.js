import React from "react";
import Button from 'react-bootstrap/Button'

const Footer = () => {
  return (
    <>
      <div id="getintouch" class="contact-me">
        <h2 className="subtitle">Get In Touch</h2>
        <h3 className="section-title">If you like what you see.</h3>
        <p>Contact me to if you want to discuss over something</p>
        <Button type="button" variant="danger" class="btn" href="mailto:enrico.montanari13@gmail.com">CONTACT ME</Button>
      </div>
  
  
      <a class="footer-link" href="https://www.linkedin.com/in/EnricoMontanari13/">LinkedIn</a>
      <a class="footer-link" href="https://github.com/Kirilanshelo">Github</a>
      <p class="credits">© 2022 Enrico Montanari.</p>
    </>
  )
};

export default Footer;