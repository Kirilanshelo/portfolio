import React, {useContext} from "react";
import { GlobalContext } from "../context/themeContext";

const Abilities = () => {

  const {theme} = useContext(GlobalContext)
  
  return (
    <div id="skills" className={`skills-${theme}`}>
      <h2 className={`subtitle-${theme}`}>My Abilities</h2>
      <div className="row exp-row">
        <div className="col-lg-3 col-0"></div>
        <div className="col-lg-6 col-12 ab-section">
          <div className="row">
            <div className="col-lg-6">
              <h3 className="section-title">Skills</h3>
            </div>
            <div className="col-lg-6">
            </div>
          </div>
          <div className="row exp-row">
            <div className="col-lg-6">
              <ul className={`list-group-${theme}`}>
                <li className="list-group-item borderless">
                  <span>HTML (5) </span><span className={`skill-eval-${theme}`}><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i></span>
                </li>
                <li className="list-group-item borderless">
                  <span>CSS (3)</span> <span className={`skill-eval-${theme}`}><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i></span>
                </li>
                <li className="list-group-item borderless">
                  <span>React</span> <span className={`skill-eval-${theme}`}><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i></span>
                </li>
                <li className="list-group-item borderless">
                  <span>Bootstrap (4)</span> <span className={`skill-eval-${theme}`}><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i></span>
                </li>
                <li className="list-group-item borderless">
                  <span>React-native</span> <span className={`skill-eval-${theme}`}><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i></span>
                </li>
                <li className="list-group-item borderless">
                  <span>Kubernetes</span> <span className={`skill-eval-${theme}`}><i className="fas fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i></span>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul className={`list-group-${theme}`}>
                <li className="list-group-item borderless">
                  <span>Javascript</span> <span className={`skill-eval-${theme}`}><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i></span>
                </li>
                <li className="list-group-item borderless">
                  <span>NodeJs</span> <span className={`skill-eval-${theme}`}><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i></span>
                </li>
                <li className="list-group-item borderless">
                  <span>MongoDB</span> <span className={`skill-eval-${theme}`}><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i></span>
                </li>
                <li className="list-group-item borderless">
                  <span>PostgreSQL</span> <span className={`skill-eval-${theme}`}><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i></span>
                </li>
                <li className="list-group-item borderless">
                  <span>Elasticsearch</span> <span className={`skill-eval-${theme}`}><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i></span>
                </li>
              </ul>
            </div>
          </div>

          <hr className="line-break"/>

          <div className="row">
            <div className="col-lg-6">
              <h3 className="section-title">Languages</h3>
            </div>
            <div className="col-lg-6">
            </div>
          </div>
          <div className="row exp-row">
            <div className="col-lg-6">
              <ul className={`list-group-${theme}`}>
                <li className="list-group-item borderless">
                  <span>Italian</span> <span className={`skill-eval-${theme}`}><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></span>
                </li>
                <li className="list-group-item borderless">
                  <span>English</span> <span className={`skill-eval-${theme}`}><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i></span>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul className={`list-group-${theme}`}>
                <li className="list-group-item borderless">
                  <span>French</span> <span className={`skill-eval-${theme}`}><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-0"></div>
      </div>
    </div>
  )
};

export default Abilities;