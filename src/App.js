import './App.css';
import NavbarElement from './components/navbar';
import Header from './components/header';
import AboutMe from './components/aboutme';
import Experience from './components/experience';
import Abilities from './components/abilities';
import Footer from './components/footer';

const  App = () => {

  return (
    <div className='App'>
      <div className='top-container'>
        <NavbarElement />
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
