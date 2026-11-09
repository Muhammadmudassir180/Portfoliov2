import React from 'react';
import Icon from '../../components/Icon/Icon';
import { profile, availability, about, journey, skills, pages } from '../../portfolio';
import './About.css';

const personalInfo = [
  ['Name', profile.name],
  ['Location', profile.location],
  ['Email', profile.email],
  ['Phone', profile.phone],
  ['Website', profile.website]
];

// From this many entries, timeline cards shrink to year and heading and open on hover or focus
const COMPACT_FROM = 10;
const compact = journey.length >= COMPACT_FROM;

const About = () => (
  <div className="about container">
    <title>{`About | ${profile.name}`}</title>
    <div className="page-head">
      <h1>{pages.about.heading}</h1>
      <p>{pages.about.intro}</p>
    </div>

    <section className="block">
      <div className="about-grid">
        <div className="panel glass">
          <h2>Personal information</h2>
          <dl className="info">
            {personalInfo.map(([k, v]) => (
              <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
            ))}
            <div><dt>Freelance</dt><dd><span className="badge badge-ok">{availability.freelance}</span></dd></div>
          </dl>
        </div>
        <div className="panel glass">
          <h2>Who I am</h2>
          {about.map((p) => <p key={p}>{p}</p>)}
        </div>
      </div>
    </section>

    <section className="block" aria-labelledby="journey-h">
      <div className="h2-row"><h2 className="h2" id="journey-h">My journey</h2></div>
      <ol className={`journey${compact ? ' journey-compact' : ''}`} style={{ '--cols': journey.length + 1 }}>
        {journey.map((j, i) => (
          <li key={`${j.title}-${j.text}`} className={`t-item${i >= journey.length / 2 ? ' opens-left' : ''}`} style={{ '--col': i + 1 }}>
            <span className="t-dot" aria-hidden="true"></span>
            <article className="step glass lift" tabIndex={compact ? 0 : undefined}>
              <div className="step-top">
                <span className="step-year">{j.year}</span>
                <span className="ico"><Icon name={j.icon} /></span>
              </div>
              <h3>{j.title}</h3>
              <p>{j.text}</p>
            </article>
          </li>
        ))}
      </ol>
    </section>

    <section className="block" aria-labelledby="tech-h">
      <div className="h2-row"><h2 className="h2" id="tech-h">Skills and technologies</h2></div>
      <div className="cards-2">
        {skills.map((s) => (
          <div key={s.title} className="skill glass lift">
            <div className="skill-top"><span className="ico"><Icon name={s.icon} /></span><h3>{s.title}</h3></div>
            <ul className="chips">{s.items.map((t) => <li key={t}>{t}</li>)}</ul>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default About;
