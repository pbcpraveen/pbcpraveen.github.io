import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Site from '../components/Poems/Site';

const Poems = () => (
  <Main
    title="Poems"
    description="Some poems authored by Praveen Kumar Ramesh"
  >
    <article className="post" id="stats">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/poems">Poems</Link></h2>
        </div>
      </header>
      <Site />
    </article>
  </Main>
);

export default Poems;
