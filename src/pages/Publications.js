import React from 'react';
// import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

// import Cell from '../components/Projects/Cell';
// import data from '../data/projects';

const Publications = () => (
  <Main
    title="Publications"
    description="Learn about Praveen Kumar Ramesh's talks."
  >
    <header>
      <div className="title">
        <h2 data-testid="heading"><Link to="publications">Publications</Link></h2>
      </div>
    </header>
    <article className="post" id="projects">
      <div>
        <h4>
          <a href="https://www.tnsroindia.org.in/JOURNAL/issue74/ISSUE%2074%20OCTOBER%202022%20-%20FRONT%20PAGE%20-%2001.pdf">
            Localization of Number Plate using Deep Learning Models
          </a>
        </h4>
        <p>
          <div> <i>IJONS</i> </div>
          Praveen Kumar R, P Mirunalini and T.T. Mirnalinee
        </p>
      </div>
    </article>
    <article className="post" id="projects">
      <div>
        <h4>
          <a href="https://ieeexplore.ieee.org/document/9680180">
            Critical State Detection for Adversarial Attacks in Reinforcement Learning
          </a>
        </h4>
        <p>
          <div> <i>ICMLA 2021</i> </div>
          Praveen Kumar R, Niranjan Kumar I, Sujith Sivasankaran, Mohan Vamsi A,
          and Vineeth Vijayaraghavan
        </p>
      </div>
    </article>
    <article className="post" id="projects">
      <div>
        <h4>
          <a href="https://ieeexplore.ieee.org/document/9356303">
            Defending Against Localized Adversarial Attacks on Edge-Deployed Monocular
            Depth Estimators
          </a>
        </h4>
        <p>
          <div> <i>ICMLA 2020</i> </div>
          Nanda H Krishna, Praveen Kumar R, Rishi Vardhan K, and Vineeth Vijayaraghavan
        </p>
      </div>
    </article>
    <article className="post" id="projects">
      <div>
        <h4>
          <a href="http://ceur-ws.org/Vol-2380/paper_71.pdf">
            Species Recommendation using Machine Learning - GeoLifeCLEF 2019
          </a>
        </h4>
        <p>
          <div> <i>CLEF 2019</i> </div>
          Nanda H Krishna, Praveen Kumar R, Ram Kaushik R, P Mirunalini, Chandrabose Aravindan,
          and S M Jaisakthi
        </p>
      </div>
    </article>
  </Main>
);

export default Publications;
