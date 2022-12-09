import React, {useContext} from "react";
import { GlobalContext } from "../context/themeContext";

const Experience = () => {

  const {theme} = useContext(GlobalContext)
  
  return (
    <div id="experience" className={`experience-${theme}`}>
      <h2 className={`subtitle-${theme}`}>Experiences</h2>
      <div className="row exp-row">
        <div className="col-md-3 col-0"></div>
        <div className="col-md-6 col-12 exp-section">
          <div className="row">
            <div className="col-md-4">
              <h3 className={`section-title-${theme}`}>Education</h3>
            </div>
            <div className="col-md-8">
            </div>
          </div>
          <div className="row exp-row exp-section" >
            <div className="col-md-4">
              <h4 className="section-subtitle">Università di Padova</h4>
              <p className="exp-subtit"><i>Oct 2016 - Mar 2019</i></p>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col">
                  <h5>Master's Degree: Astronomy</h5>
                  <p className="edu-desc">Final mark 110/110 with a thesis about how the stellar rotation influences black hole formation (<a className={`emph-name-${theme}`} href="https://arxiv.org/abs/1909.01371" target="_blank" rel="noreferrer">here</a>). Many courses about physics, math, cosmology and astrophysics </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row exp-row exp-section">
            <div className="col-md-4">
              <h4 className="section-subtitle">Università di Padova</h4>
              <p className="exp-subtit"><i>Oct 2009 - Mar 2016</i></p>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col">
                  <h5>Bachelor's Degree: Astronomy</h5>
                  <p className="edu-desc">Many courses about Physics, Math, Quantum Mechanic, Geometry and computer.</p>
                </div>
              </div>
            </div>
          </div>

          <hr className="line-break"/>

          <div className="row">
            <div className="col-md-4">
              <h3 className={`section-title-${theme}`} >Career</h3>
            </div>
            <div className="col-md-8">
            </div>
          </div>
          <div className="row exp-row exp-section">
            <div className="col-md-4">
              <h4 className="section-subtitle">fabbricadigitale s.r.l.</h4>
              <p className="exp-subtit"><i>Sept 2021 - Present</i></p>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col">
                  <h5>Full-Stack Developer</h5>
                  <p className="edu-desc"> I'm working mainly on the backend side of a platform that manage advertising on digital devices. </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row exp-row exp-section">
            <div className="col-md-4">
              <h4 className="section-subtitle">Serenissima Informatica Spa</h4>
              <p className="exp-subtit"><i>Apr 2019 - Aug 2021</i></p>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col">
                  <h5>Full-Stack Developer</h5>
                  <p className="edu-desc">Full-Stack developer working mainly on a multi-tenant cloud platform for hotels, structured with NodeJS microservices and a React frontend.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-0"></div>
      </div>
    </div>
  )
};

export default Experience;