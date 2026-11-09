import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/Icon/Icon';
import { profile, availability, skills, projects, impact, pages } from '../../portfolio';
import './Home.css';

const featured = projects.filter((p) => p.featured);
const homeImpact = impact.filter((i) => i.onHome);

const Home = () => (
  <div className="home container">
    <title>{`${profile.name} | ${profile.role}`}</title>

    <section className="hero">
      <div>
        <h1>{profile.name}</h1>
        <p className="hero-role">{profile.role}</p>
        <p className="hero-intro">{profile.intro}</p>
        <div className="btns hero-btns">
          <Link to="/projects" className="btn btn-main">View my work</Link>
          <Link to="/contact" className="btn">Get in touch</Link>
          <span className="socials">
            <a className="icon-btn" href={profile.github.url} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Icon name="github" /></a>
            <a className="icon-btn" href={profile.linkedin.url} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Icon name="linkedin-in" /></a>
          </span>
        </div>
      </div>
      <div className="orb glass">
        <img src={profile.photo} width="413" height="413" alt={`Portrait of ${profile.name}`} fetchPriority="high" />
        <span className="orb-tag">{availability.tag}</span>
      </div>
    </section>

    {homeImpact.length > 0 && (
      <section className="block" aria-label="Impact">
        <div className="impact">
          {homeImpact.map((i) => (
            <div key={i.label} className="glass"><b>{i.value}</b><span>{i.label}</span></div>
          ))}
        </div>
      </section>
    )}

    <section className="block" aria-labelledby="skills-h">
      <div className="h2-row"><h2 className="h2" id="skills-h">Skills and expertise</h2></div>
      <div className="skills-grid">
        {skills.map((s) => (
          <div key={s.title} className="skill glass lift">
            <div className="skill-top"><span className="ico"><Icon name={s.icon} /></span><h3>{s.title}</h3></div>
            <ul className="chips">{s.items.map((t) => <li key={t}>{t}</li>)}</ul>
          </div>
        ))}
      </div>
    </section>

    <section className="block" aria-labelledby="featured-h">
      <div className="h2-row"><h2 className="h2" id="featured-h">Featured projects</h2><Link to="/projects">See all projects</Link></div>
      <div className="cards-2">
        {featured.map((p) => (
          <article key={p.title} className="pcard glass lift">
            <span className="ico"><Icon name={p.icon} /></span>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <ul className="chips">{p.technologies.map((t) => <li key={t}>{t}</li>)}</ul>
          </article>
        ))}
      </div>
    </section>

    <section className="block">
      <div className="cta glass">
        <h2>{pages.home.ctaTitle}</h2>
        <p>{pages.home.ctaText}</p>
        <div className="btns">
          <Link to="/contact" className="btn btn-main">Let's talk</Link>
          <Link to="/resume" className="btn">View résumé</Link>
        </div>
      </div>
    </section>
  </div>
);

export default Home;
