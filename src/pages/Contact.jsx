import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', text: '' });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // Demo-only: simulate submit
    try {
      if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
        setStatus({ type: 'error', text: 'Please fill out all fields.' });
        return;
      }
      // TODO: integrate backend/email service if needed
      await new Promise((r) => setTimeout(r, 600));
      setStatus({ type: 'ok', text: 'Thanks! Message sent successfully.' });
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus({ type: 'error', text: 'Something went wrong. Please try again.' });
    }
  };

  return (
    <div className="contact-wrap">
      <h1>Contact</h1>

      <section className="contact-card">
        <h2>Get in touch</h2>
        <p>
          Have a suggestion, found an issue, or want to collaborate? Send a message using the form,
          or reach out via the details below.
        </p>

        <form className="contact-form" onSubmit={onSubmit} noValidate>
          <div className="row">
            <div className="field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Full name"
                value={form.name}
                onChange={onChange}
                required
              />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="name@example.com"
                value={form.email}
                onChange={onChange}
                required
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="How can we help?"
              value={form.message}
              onChange={onChange}
              required
            />
          </div>

          {status.text ? (
            <div className={`status ${status.type === 'ok' ? 'ok' : 'error'}`}>
              {status.text}
            </div>
          ) : null}

          <button type="submit" className="btn-primary">Send Message</button>
        </form>
      </section>

      <section className="contact-card">
        <h2>Contact details</h2>
        <ul className="contact-list">
          <li><strong>Email:</strong> support@govschemes.example</li>
          <li><strong>Location:</strong> New Delhi, India</li>
          <li><strong>Hours:</strong> Mon–Fri, 9:30 AM – 6:00 PM IST</li>
        </ul>
      </section>

      <section className="contact-card">
        <h2>Find us</h2>
        <div className="map-box">
          {/* Replace src with an actual map embed if needed */}
          <iframe
            title="Map placeholder"
            src="https://www.openstreetmap.org/export/embed.html?bbox=77.0%2C28.4%2C77.4%2C28.8&layer=mapnik"
            style={{ border: 0 }}
            loading="lazy"
          />
        </div>
        <p className="map-note">Map is illustrative. Use the email above for official communication.</p>
      </section>
    </div>
  );
}

export default Contact;
