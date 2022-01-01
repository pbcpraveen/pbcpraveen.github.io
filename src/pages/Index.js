import React from 'react';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Praveen Kumar's personal website. Computer Science Undergraduate "
    + 'Aspiring AI researcher and Analyst at Goldman Sachs'}
  >
    <article className="post" id="index">
      <div className="title">
        <h2 data-testid="heading">Hi there!</h2>
      </div>
      <p>
        Welcome to my page. I&apos;m Praveen. While I wondered about our flimsy odds of existence in
        this expanding cosmos, somewhere I learnt to live in it. When I&apos;m not lost in such
        existential thoughts, I materialise them in my poems. Somehow, my maverick mind finds
        peace in alluring alliterations. If you are interested in reading some of it, navigate to
        the poem section of this site &#128578;.
      </p>
      <p>
        For a more formal introduction, I finished my undergraduate in engineering at Anna
        University in 2021, majoring in Computer Science. I have interned at Goldman Sachs for
        nearly 8 months, where I now work as an Analyst. I&apos;m an aspiring researcher in the
        field of AI. I&apos;m particularly interested in generalising AI models to achieve
        robustness and multi-tasking.
      </p>
    </article>
  </Main>
);

export default Index;
