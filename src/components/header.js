import React, { useContext } from "react";
import { GlobalContext } from "../context/themeContext";
import { Image } from 'react-bootstrap'
import Enrico from '../assets/enrico-sunglasses.jpg';

const Header = () => {
  const {theme} = useContext(GlobalContext)
  
  return (
    <>
    <div>
      <div>
        <h1 className={`title-name-${theme}`}>I'm <span className={`emph-name-${theme}`}>Enrico</span></h1>
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
        <h2 className={`subtitle-${theme}`}  id="subtitle">a developer.</h2>
      </div>
    </div>
    </>
  )
};

export default Header;