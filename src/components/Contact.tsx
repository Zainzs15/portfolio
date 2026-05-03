import { FormEvent, useState } from 'react';

export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || 'visitor'}`);
    const body = encodeURIComponent(
      `${message}\n\n---\nFrom: ${name}\nReply-to: ${email}`,
    );
    window.location.href = `mailto:zsezain@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <p className="section-label" data-aos="fade-up">
          Contact
        </p>
        <h2 className="section-title" data-aos="fade-up" data-aos-delay="40">
          Let&apos;s build something great
        </h2>
        <p className="section-intro" data-aos="fade-up" data-aos-delay="80">
          Share a brief — I&apos;ll get back to you shortly.
        </p>

        <div className="contact-grid">
          <div className="contact-info" data-aos="fade-up">
            <div className="contact-item">
              <div className="contact-label">Location</div>
              <div className="contact-value">Karachi</div>
            </div>
            <div className="contact-item">
              <div className="contact-label">Phone</div>
              <a className="contact-value" href="tel:+923218156356">
                0321-8156356
              </a>
            </div>
            <div className="contact-item">
              <div className="contact-label">Email</div>
              <a className="contact-value" href="mailto:zsezain@gmail.com">
                zsezain@gmail.com
              </a>
            </div>
          </div>

          <form
            className="contact-form"
            onSubmit={onSubmit}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="form-row">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
              />
            </div>
            <div className="form-row">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
              />
            </div>
            <div className="form-row">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your project..."
              />
            </div>
            <button type="submit" className="btn btn-primary form-submit">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
