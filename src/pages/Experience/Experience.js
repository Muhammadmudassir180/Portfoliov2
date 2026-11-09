import React from 'react';
import Icon from '../../components/Icon/Icon';
import { experience, impact, pages, profile } from '../../portfolio';
import './Experience.css';

const Experience = () => (
  <div className="experience container">
    <title>{`Experience | ${profile.name}`}</title>
    <div className="page-head">
      <h1>{pages.experience.heading}</h1>
      <p>{pages.experience.intro}</p>
    </div>

    <section className="block">
      {experience.map((exp) => (
        <article key={`${exp.company}-${exp.title}`} className="job glass">
          <div className="job-head">
            <span className="ico"><Icon name="building" /></span>
            <div>
              <div className="job-title"><h2>{exp.title}</h2><span className="badge badge-ac">{exp.type}</span></div>
              <p className="job-co">{exp.company}</p>
              <div className="meta">
                <span><Icon name="location-dot" />{exp.location}</span>
                <span><Icon name="calendar" />{exp.period}</span>
              </div>
            </div>
          </div>
          <p className="muted">{exp.description}</p>
          <div>
            <p className="label">Achievements and responsibilities</p>
            <ul className="list">{exp.achievements.map((a) => <li key={a}>{a}</li>)}</ul>
          </div>
          <div>
            <p className="label">Technologies used</p>
            <ul className="chips">{exp.technologies.map((t) => <li key={t}>{t}</li>)}</ul>
          </div>
        </article>
      ))}
    </section>

    <section className="block" aria-labelledby="impact-h">
      <div className="h2-row"><h2 className="h2" id="impact-h">Measured impact</h2></div>
      <div className="impact">
        {impact.map((i) => (
          <div key={i.label} className="glass"><b>{i.value}</b><span>{i.label}</span></div>
        ))}
      </div>
    </section>
  </div>
);

export default Experience;
