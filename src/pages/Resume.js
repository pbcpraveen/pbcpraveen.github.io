import React from 'react';
import { Link } from 'react-router-dom';
// import Link from 'react-router-dom/es/Link';
import Main from '../layouts/Main';

// import Education from '../components/Resume/Education';
// import Experience from '../components/Resume/Experience';
// import Skills from '../components/Resume/Skills';
// import Courses from '../components/Resume/Courses';
// import References from '../components/Resume/References';
//
// import courses from '../data/resume/courses';
// import degrees from '../data/resume/degrees';
// import positions from '../data/resume/positions';
// import { skills, categories } from '../data/resume/skills';
//
// const sections = [
//   'Education',
//   'Experience',
//   'Skills',
//   'Courses',
//   'References',
// ];

const Resume = () => (
  <Main
    title="Resume"
    description="Praveen Kumar Ramesh's resume."
  >
    <header>
      <div className="title">
        <h2 data-testid="heading"><Link to="resume">Resume</Link></h2>
      </div>
    </header>
    <article className="post" id="resume">
      <div>
        <p>
          For a short and reader-friendly
          resume <a href="https://pbcpraveen.github.io/images/Resume.pdf"> click here.</a>
        </p>
        <p>
          For a long and comprehensive
          version of the
          same <a href="https://pbcpraveen.github.io/images/CV.pdf"> click here.</a>
        </p>
      </div>
      {/* <header> */}
      {/*   <div className="title"> */}
      {/*     <h2 data-testid="heading"><Link to="resume">Resume</Link></h2> */}
      {/*     <div className="link-container"> */}
      {/*       {sections.map((sec) => ( */}
      {/*         <h4 key={sec}> */}
      {/*           <a href={`#${sec.toLowerCase()}`}>{sec}</a> */}
      {/*         </h4>))} */}
      {/*     </div> */}
      {/*   </div> */}
      {/* </header> */}
      {/* <Education data={degrees} /> */}
      {/* <Experience data={positions} /> */}
      {/* <Skills skills={skills} categories={categories} /> */}
      {/* <Courses data={courses} /> */}
      {/* <References /> */}

    </article>
  </Main>
);

export default Resume;
