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
                  <p className="edu-desc"> My tasks are mainly focused on the backend side of a B2B platform that manages digital advertising. </p>
                  <p className="edu-desc"> My day to day tasks are:</p>
                  <ul className={`list-group-${theme}`}>
                      <li className="list-group-item borderless">
                          <p className="edu-desc">- Develop and mantain about 15 services, most of them in Node.js, while others in TypeScript;</p>
                      </li>
                      <li className="list-group-item borderless">
                      <p className="edu-desc">- Improve test coverage and bug fixing</p>
                      </li>
                      <li className="list-group-item borderless">
                      <p className="edu-desc">- Define and document software requirements and specification together with my collegues</p>
                      </li>
                      <li className="list-group-item borderless">
                      <p className="edu-desc">- CI/CD</p>
                      </li>
                  </ul>
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
                  <p className="edu-desc">Full-Stack developer mainly working on a multi-tenant cloud platform for hotels, structured with Node.js microservices and a React frontend.</p>
                </div>
              </div>
            </div>
          </div>
          <hr className="line-break"/>
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
                  <p className="edu-desc">Final mark 110/110 with a thesis about how the stellar rotation influences black hole formation. <a className={`emph-name-${theme}`} href="https://arxiv.org/abs/1909.01371" target="_blank" rel="noreferrer">Here</a> you can read the published article.</p>
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
                  <p className="edu-desc">Many courses about physics, math, quantum mechanic, geometry and computer.</p>
                </div>
              </div>
            </div>
          </div>

          <hr className="line-break"/>

          <div className="row">
            <div className="col-md-4">
              <h3 className={`section-title-${theme}`}>Online Courses</h3>
            </div>
            <div className="col-md-8">
            </div>
          </div>
          <div className="row exp-row exp-section" >
            <div className="col-md-4">
              <h4 className="section-subtitle">The Complete Development Bootcamp</h4>
              <p className="exp-subtit"><i>Jul 2021</i></p>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col">
                  <h5><a className={`emph-name-${theme}`} href="https://www.udemy.com/course/the-complete-web-development-bootcamp/" target="_blank" rel="noreferrer">Udemy</a></h5>
                  <p className="edu-desc">HTML, CSS, Javascript, Node, React, MongoDB </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row exp-row exp-section" >
            <div className="col-md-4">
              <h4 className="section-subtitle">JavaScript: The Advanced Concepts (2023 Update)</h4>
              <p className="exp-subtit"><i>Nov 2022</i></p>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col">
                  <h5><a className={`emph-name-${theme}`} href="https://www.udemy.com/course/advanced-javascript-concepts/" target="_blank" rel="noreferrer">Udemy</a></h5>
                  <p className="edu-desc">Learn modern advanced JavaScript practices and be in the top 10% of JavaScript developers </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row exp-row exp-section" >
            <div className="col-md-4">
              <h4 className="section-subtitle">Kubernetes for the Absolute Beginners - Hands-on</h4>
              <p className="exp-subtit"><i>Aug 2022</i></p>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col">
                  <h5><a className={`emph-name-${theme}`} href="https://www.udemy.com/course/learn-kubernetes/" target="_blank" rel="noreferrer">Udemy</a></h5>
                  <p className="edu-desc">Learn Kubernetes in simple, easy and fun way with hands-on coding exercises. For beginners in DevOps. </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row exp-row exp-section" >
            <div className="col-md-4">
              <h4 className="section-subtitle">JavaScript Algorithms and Data Structures Masterclass</h4>
              <p className="exp-subtit"><i> Aug '22 - present</i></p>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col">
                  <h5><a className={`emph-name-${theme}`} href="https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/" target="_blank" rel="noreferrer">Udemy</a></h5>
                  <p className="edu-desc">The Missing Computer Science and Coding Interview Bootcamp</p>
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
