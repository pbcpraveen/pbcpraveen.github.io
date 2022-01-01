import React from 'react';
// import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

// import Cell from '../components/Projects/Cell';
// import data from '../data/projects';

const Talks = () => (
  <Main
    title="Talks"
    description="Learn about Praveen Kumar Ramesh's talks."
  >
    <header>
      <div className="title">
        <h2 data-testid="heading"><Link to="talks">Talks and Teaching</Link></h2>
      </div>
    </header>
    <article className="post" id="projects">
      <div>
        <p>
          The migration for this section from old website is in under progress.
        </p>
      </div>
    </article>
  </Main>
);

export default Talks;
