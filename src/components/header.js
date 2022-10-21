import React from 'react';
import { Image } from 'react-bootstrap'
import Enrico from '../assets/enrico-sunglasses.jpg';

const Header = () => {
  return (
    <>
    <div>
      <div>
        <h1 className="title-name">I'm <span className="emph-name">Enrico</span></h1>
      </div>
    </div>
    <div>
      <div>
        <div>
          <Image roundedCircle className="img-profile" src={Enrico} alt=""/>
        </div>
      </div>
    </div>
    <div>
      <div>
        <h2 className="subtitle" id="subtitle">a developer.</h2>
      </div>
    </div>
    </>
  )
};

export default Header;