import './App.css';
import React, {useContext} from 'react';
import NavbarElement from './components/navbar';
import Header from './components/header';
import AboutMe from './components/aboutme';
import Experience from './components/experience';
import Abilities from './components/abilities';
import Footer from './components/footer';
import { GlobalContext } from "./context/themeContext";
const  App = () => {
  const {theme} = useContext(GlobalContext)

  return (
    <div className='App'>
        <div className={`top-container-${theme}`}>
          <NavbarElement/>
          <Header />
        </div>
        <div className='middle-container'>
          <AboutMe /> 
          <Experience />
          <Abilities />
        </div>
        <div className={`top-container-${theme}`}>
          <Footer />
        </div>
    </div>
  );
}

export default App;
