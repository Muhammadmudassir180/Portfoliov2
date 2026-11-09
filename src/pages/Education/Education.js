import React from 'react';
import Icon from '../../components/Icon/Icon';
import { education, pages, profile } from '../../portfolio';
import './Education.css';

const Education = () => (
  <div className="education container">
    <title>{`Education | ${profile.name}`}</title>
    <div className="page-head">
      <h1>{pages.education.heading}</h1>
      <p>{pages.education.intro}</p>
    </div>

    <section className="block">
      <div className="timeline">
        {education.map((edu) => (
          <div key={edu.degree} className="t-item">
            <span className="t-dot" aria-hidden="true"></span>
            <article className="edu glass lift">
              <div className="edu-head">
                <span className="ico"><Icon name={edu.icon} /></span>
                <div>
                  <div className="edu-title"><h2>{edu.degree}</h2><span className="badge badge-ac">GPA {edu.gpa}</span></div>
                  <p className="edu-school">{edu.institution}</p>
                  <div className="meta">
                    <span><Icon name="location-dot" />{edu.location}</span>
                    <span><Icon name="calendar" />{edu.period}</span>
                  </div>
                </div>
              </div>
              <p className="muted">{edu.description}</p>
              <div>
                <p className="label">Relevant courses</p>
                <ul className="chips">{edu.courses.map((c) => <li key={c}>{c}</li>)}</ul>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Education;
