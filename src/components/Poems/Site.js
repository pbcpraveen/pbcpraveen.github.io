import React from 'react';

const Poems = () => (
  <>
    <div>
      <button type="button">
        <a href="https://pbcpraveen.github.io/images/Hope.pdf"> Hope </a>
      </button>
      <button type="button" style={{ marginLeft: '5em' }}>
        <a href="https://pbcpraveen.github.io/images/Gratitude.pdf"> Gratitude </a>
      </button>
      <button type="button" style={{ marginLeft: '5em' }}>
        <a href="https://pbcpraveen.github.io/images/A_Land_of_Legacies.pdf"> A Land of Legacies </a>
      </button>
      <button type="button" style={{ marginLeft: '5em' }}>
        <a href="https://pbcpraveen.github.io/images/Life_A_Roller_Coaster.pdf"> Life: A Roller Coaster </a>
      </button>
    </div>
    <div>
      <button type="button" style={{ marginTop: '5em', marginBottom: '5em' }}>
        <a href="https://pbcpraveen.github.io/images/Validation.pdf"> Validation </a>
      </button>
      {/* <button type="button" style={{ marginLeft: '5em' }}> */}
      {/*   <a href={`https://pbcpraveen.github.io/images/A_Land_of_Legacies.pdf`}> Amma </a> */}
      {/* </button> */}
      <button type="button" style={{ marginLeft: '5em' }}>
        <a href="https://pbcpraveen.github.io/images/To_a_New_Dawn.pdf"> To a New Dawn </a>
      </button>
    </div>
  </>
);

export default Poems;
