import React from 'react';
import Icon from '../../components/Icon/Icon';
import { profile, skills, experience, education, projects, pages } from '../../portfolio';
import './Resume.css';

const contacts = [
  ['envelope', profile.email],
  ['phone', profile.phone],
  ['location-dot', profile.location],
  ['globe', profile.website],
  ['linkedin-in', profile.linkedin.label],
  ['github', profile.github.label]
];

const BULLETS_PER_JOB = 4;
const resumeProjects = projects.filter((p) => p.onResume);

const Resume = () => (
  <div className="resume container">
    <title>{`Résumé | ${profile.name}`}</title>
    <div className="resume-head">
      <h1>{pages.resume.heading}</h1>
      <a className="btn btn-main" href={profile.resumeUrl} target="_blank" rel="noopener noreferrer"><Icon name="file-arrow-down" />Download PDF</a>
    </div>

    <section className="block">
      <div className="resume-grid">
        <div className="r-col">
          <div className="r-id glass">
            <img src={profile.photo} width="96" height="96" alt={`Portrait of ${profile.name}`} loading="lazy" />
            <div>
              <h2>{profile.name}</h2>
              <p className="role">{profile.role}</p>
              <div className="r-contacts">
                {contacts.map(([icon, text]) => <span key={text}><Icon name={icon} />{text}</span>)}
              </div>
            </div>
          </div>

          <div className="r-sec glass">
            <h2><Icon name="user" />Professional summary</h2>
            <p>{profile.summary}</p>
          </div>

          <div className="r-sec glass">
            <h2><Icon name="briefcase" />Experience</h2>
            {experience.map((job) => (
              <div key={`${job.company}-${job.title}`} className="r-item">
                <div className="r-item-top"><h3>{job.title}</h3><span className="when">{job.period}</span></div>
                <p className="co">{job.company}, {job.location}</p>
                <ul className="list">{job.achievements.slice(0, BULLETS_PER_JOB).map((a) => <li key={a}>{a}</li>)}</ul>
              </div>
            ))}
          </div>

          <div className="r-sec glass">
            <h2><Icon name="diagram-project" />Key projects</h2>
            {resumeProjects.map((p) => (
              <div key={p.title} className="r-item"><h3>{p.title}</h3><p>{p.description}</p></div>
            ))}
          </div>
        </div>

        <div className="r-col">
          <div className="r-sec glass">
            <h2><Icon name="bolt" />Skills</h2>
            {skills.map((group) => (
              <div key={group.title}>
                <h3 className="r-skill">{group.title}</h3>
                <ul className="chips">{group.items.map((s) => <li key={s}>{s}</li>)}</ul>
              </div>
            ))}
          </div>

          <div className="r-sec glass">
            <h2><Icon name="graduation-cap" />Education</h2>
            {education.map((edu) => (
              <div key={edu.degree} className="r-item">
                <div className="r-item-top"><h3>{edu.short}</h3><span className="when">{edu.period}</span></div>
                <p className="co">{edu.institutionShort || edu.institution}, GPA {edu.gpa}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Resume;
