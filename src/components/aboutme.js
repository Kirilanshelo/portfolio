import React, {useContext} from "react";
import { GlobalContext } from "../context/themeContext";
const AboutMe = () => {

  const {theme} = useContext(GlobalContext)

  return (
    <>
      <div id="aboutme" className={`profile-${theme}`}>
      <h2 className={`subtitle-${theme}`}>Hello.</h2>
      <p className={`intro-${theme}`}>I am an astronomer, a full-stack developer and sport lover. I'm a curious human being always trying to learn new things and create a better world.</p>
    </div>
    </>
  )
};

export default AboutMe;