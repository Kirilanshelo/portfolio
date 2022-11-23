import './App.css';
import { useState } from 'react';
import { ThemeContext, themes } from './context/themeContext';
import ThemeButton from './components/themeButton';
import NavbarElement from './components/navbar';
import Header from './components/header';
import AboutMe from './components/aboutme';
import Experience from './components/experience';
import Abilities from './components/abilities';
import Footer from './components/footer';

const  App = () => {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className='App'>
        <div className='top-container'>
        {/* <ThemeContext.Consumer> */}
          <NavbarElement mode={darkMode} setDarkMode={setDarkMode}/>
        {/* </ThemeContext.Consumer> */}
          <Header />
        </div>
        <div className='middle-container'>
          <AboutMe /> 
          <Experience />
          <Abilities />
        </div>
        <div className='top-container'>
          <Footer />
        </div>
    </div>
  );
}

export default App;
