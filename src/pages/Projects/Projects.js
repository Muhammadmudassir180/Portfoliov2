import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/Icon/Icon';
import { projects, projectFilters, pages, profile } from '../../portfolio';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const shown = activeFilter === 'all' ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="projects container">
      <title>{`Projects | ${profile.name}`}</title>
      <div className="page-head">
        <h1>{pages.projects.heading}</h1>
        <p>{pages.projects.intro}</p>
      </div>

      <section className="block">
        <div className="filters" role="group" aria-label="Filter projects">
          {projectFilters.map((f) => (
            <button key={f.key} type="button" aria-pressed={activeFilter === f.key} onClick={() => setActiveFilter(f.key)}>
              {f.label}
            </button>
          ))}
        </div>
        <div className="cards-2">
          {shown.map((p) => (
            <article key={p.title} className="proj glass lift">
              <div className="proj-cover">
                <Icon name={p.icon} />
                <span className="badge badge-ok"><Icon name="check" />Completed</span>
              </div>
              <div className="proj-body">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <ul className="chips">{p.technologies.map((t) => <li key={t}>{t}</li>)}</ul>
                <ul className="list">{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
                <div className="proj-links">
                  {p.githubUrl
                    ? <a href={p.githubUrl} target="_blank" rel="noopener noreferrer"><Icon name="github" />Source code</a>
                    : <span><Icon name="lock" />{p.note}</span>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="block">
        <div className="cta glass">
          <h2>{pages.projects.ctaTitle}</h2>
          <p>{pages.projects.ctaText}</p>
          <div className="btns"><Link to="/contact" className="btn btn-main">Get in touch</Link></div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
