import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

const contactInfo = [
  { icon: <Phone size={20} />, label: 'Phone', value: '+91 84509 54355', href: 'tel:+918450954355' },
  { icon: <Mail size={20} />, label: 'Email', value: 'Priyankadongare381@gmail.com', href: 'mailto:Priyankadongare381@gmail.com' },
  { icon: <MapPin size={20} />, label: 'Location', value: 'Mumbai, Maharashtra, India', href: '#' },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="section-pad" style={{ background: '#020617' }}>
      <div className="container">
        <div className="text-center mb-48">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-badge"><span className="dot" /> Get In Touch</span>
            <h2 className="section-title">Contact <span className="gradient-text">Us</span></h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Have questions? Our team is here to help you choose the right program.
            </p>
          </motion.div>
        </div>

        <div className="contact-grid">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {contactInfo.map((info) => (
              <a
                key={info.label}
                href={info.href}
                className="contact-info-card"
                style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 16, padding: '20px 24px', background: '#0d1b2e', border: '1px solid rgba(148,163,184,0.08)', borderRadius: 16, marginBottom: 14, transition: 'border-color 0.2s' }}
              >
                <div
                  className="icon-box icon-box-sm"
                  style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)', color: '#22c55e' }}
                >
                  {info.icon}
                </div>
                <div>
                  <div style={{ color: '#475569', fontSize: 11, marginBottom: 2 }}>{info.label}</div>
                  <div style={{ color: '#f8fafc', fontWeight: 500, fontSize: 14 }}>{info.value}</div>
                </div>
              </a>
            ))}

            {/* Map */}
            <div className="map-container">
              <iframe
                title="Lanka Enterprises Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609790817!2d72.74110232!3d19.0822507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <form onSubmit={handleSubmit} className="contact-form-card">
              <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.5rem', fontWeight: 800, color: '#fff', marginBottom: 24 }}>
                Send Us a Message
              </h3>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="form-success"
                >
                  ✅ Message sent! We'll reach you within 24 hours.
                </motion.div>
              )}

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Full Name</label>
                  <input id="name" name="name" type="text" className="form-input" value={form.name} onChange={handleChange} required placeholder="John Doe" />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email Address</label>
                  <input id="email" name="email" type="email" className="form-input" value={form.email} onChange={handleChange} required placeholder="john@email.com" />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="phone">Phone Number</label>
                <input id="phone" name="phone" type="tel" className="form-input" value={form.phone} onChange={handleChange} placeholder="+91 84509 54355" />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea id="message" name="message" className="form-textarea" value={form.message} onChange={handleChange} required placeholder="Tell us which course you're interested in..." />
              </div>

              <motion.button
                type="submit"
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', display: 'flex', gap: 8, alignItems: 'center' }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={16} /> Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
