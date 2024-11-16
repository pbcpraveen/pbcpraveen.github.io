import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro" style={{ align: 'center' }}>
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" style={{ align: 'center' }} />
      </Link>
      <header>
        <h3>Praveen Kumar Ramesh</h3>
        <p><a href="mailto:pbcpraveen@gmail.com">pbcpraveen@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Praveen.
        I&apos;m a full time software engineer who explores his interest in theory and AI as a
        side quest. I graduated from UCSD with a masters in computer science. That is just to say
        that I have enough persistence and patience to stay in same academic discipline for 6 years
        and not go insane. Now, I&apos;m an Analyst at Goldman Sachs.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Praveen Kumar Ramesh <Link to="/">pbcpraveen.github.io</Link>.</p>
    </section>
  </section>
);

export default SideBar;
