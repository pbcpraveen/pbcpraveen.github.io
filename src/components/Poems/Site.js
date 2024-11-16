import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Poems = () => (
  <>
    <Container fluid="md" style={{ paddingBottom: '2em' }}>
      <Row>
        <Col>
          <button type="button">
            <a href="https://pbcpraveen.github.io/images/Hope.pdf"> Hope </a>
          </button>
        </Col>
        <Col>
          <button type="button">
            <a href="https://pbcpraveen.github.io/images/Gratitude.pdf"> Gratitude </a>
          </button>
        </Col>
        <Col>
          <button type="button">
            <a href="https://pbcpraveen.github.io/images/To_author_tomorrows_history.pdf"> To Author Tomorrow&apos;s History </a>
          </button>
        </Col>
        <Col>
          <button type="button">
            <a href="https://pbcpraveen.github.io/images/Life_A_Roller_Coaster.pdf"> Life: A Roller Coaster </a>
          </button>
        </Col>
      </Row>
      <Row style={{ marginTop: '1em' }}>
        <Col>
          <button type="button">
            <a href="https://pbcpraveen.github.io/images/Validation.pdf"> Validation </a>
          </button>
        </Col>
        <Col>
          <button type="button">
            <a href="https://pbcpraveen.github.io/images/To_a_New_Dawn.pdf"> To a New Dawn </a>
          </button>
        </Col>
        <Col>
          <button type="button">
            <a href="https://pbcpraveen.github.io/images/Crimson_red.pdf"> Crimson Red </a>
          </button>
        </Col>
        <Col>
          <button type="button">
            <a href="https://pbcpraveen.github.io/images/How_are_you_doing.pdf"> How Are You Doing? </a>
          </button>
        </Col>
      </Row>
      <Row style={{ marginTop: '1em' }}>
        <Col>
          <button type="button">
            <a href="https://pbcpraveen.github.io/images/Monotony.pdf"> Monotony </a>
          </button>
        </Col>
        <Col>
          <button type="button">
            <a href="https://pbcpraveen.github.io/images/This_too_shall_pass.pdf"> This too shall pass </a>
          </button>
        </Col>
        <Col>
          <button type="button">
            <a href="https://pbcpraveen.github.io/images/Unspoken_wishes.pdf"> Unspoken Wishes </a>
          </button>
        </Col>
        <Col>
          <button type="button">
            <a href="https://pbcpraveen.github.io/images/Fright.pdf"> Fright </a>
          </button>
        </Col>
      </Row>
    </Container>
  </>
);

export default Poems;
