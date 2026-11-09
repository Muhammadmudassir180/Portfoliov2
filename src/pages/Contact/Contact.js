import React, { useState } from 'react';
import Icon from '../../components/Icon/Icon';
import { sendMessage } from './sendMessage';
import { profile, availability, pages } from '../../portfolio';
import './Contact.css';

const contactInfo = [
  { icon: 'envelope', title: 'Email', value: profile.email, link: `mailto:${profile.email}` },
  { icon: 'phone', title: 'Phone', value: profile.phone, link: `tel:${profile.phone.replace(/[^+\d]/g, '')}` },
  { icon: 'location-dot', title: 'Location', value: profile.location, link: null },
  { icon: 'linkedin-in', title: 'LinkedIn', value: profile.linkedin.label, link: profile.linkedin.url },
  { icon: 'github', title: 'GitHub', value: profile.github.label, link: profile.github.url }
];

const empty = { name: '', email: '', subject: '', message: '', botcheck: false };

const Contact = () => {
  const [formData, setFormData] = useState(empty);
  const [status, setStatus] = useState({ state: 'idle', error: '' });

  const handleInputChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: 'sending', error: '' });
    try {
      await sendMessage(formData);
      setFormData(empty);
      setStatus({ state: 'sent', error: '' });
    } catch (err) {
      // Keep what the visitor typed so nothing is lost
      setStatus({ state: 'error', error: err.message });
    }
  };

  const sending = status.state === 'sending';

  return (
    <div className="contact container">
      <title>{`Contact | ${profile.name}`}</title>
      <div className="page-head">
        <h1>{pages.contact.heading}</h1>
        <p>{pages.contact.intro}</p>
      </div>

      <section className="block">
        <div className="contact-grid">
          <div className="c-items">
            {contactInfo.map((item) => {
              const body = (
                <>
                  <span className="ico"><Icon name={item.icon} /></span>
                  <div><small>{item.title}</small><strong>{item.value}</strong></div>
                </>
              );
              if (!item.link) return <div key={item.title} className="c-item glass">{body}</div>;
              const external = item.link.startsWith('http');
              return (
                <a key={item.title} className="c-item glass lift" href={item.link} {...(external && { target: '_blank', rel: 'noopener noreferrer' })}>
                  {body}
                </a>
              );
            })}
          </div>

          <form className="form glass" onSubmit={handleSubmit}>
            <h2>Send me a message</h2>
            <div className="form-row">
              <div className="field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" autoComplete="name" maxLength={100} value={formData.name} onChange={handleInputChange} required />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" autoComplete="email" maxLength={200} value={formData.email} onChange={handleInputChange} required />
              </div>
            </div>
            <div className="field">
              <label htmlFor="subject">Subject</label>
              <input id="subject" name="subject" maxLength={150} value={formData.subject} onChange={handleInputChange} required />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" maxLength={5000} value={formData.message} onChange={handleInputChange} required></textarea>
            </div>
            {/* Spam trap: hidden from people, bots tick it and the service drops the message */}
            <input type="checkbox" name="botcheck" className="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" checked={formData.botcheck} onChange={handleInputChange} />
            <div className="form-foot">
              <button className="btn btn-main" type="submit" disabled={sending}>
                <Icon name="paper-plane" />{sending ? 'Sending…' : 'Send message'}
              </button>
              <p role="status" className={status.state === 'sent' ? 'form-ok' : status.state === 'error' ? 'form-err' : undefined}>
                {status.state === 'sent' && "Thanks! Your message has been sent. I'll reply by email."}
                {status.state === 'error' && `${status.error} Please try again, or email me at ${profile.email}.`}
                {(status.state === 'idle' || sending) && 'Your message comes straight to my inbox.'}
              </p>
            </div>
          </form>
        </div>

        <div className="avail glass">
          <div>
            <h2>{availability.heading}</h2>
            <p>{availability.text}</p>
          </div>
          <div className="avail-badges">
            <span className="badge badge-ok">{availability.freelanceBadge}</span>
            <span className="badge badge-ac">{availability.fullTimeBadge}</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
