import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail } from 'lucide-react';

const contactInfo = [
  { icon: <Phone size={20} />, label: 'Phone', value: '+91 84509 54355', href: 'tel:+918450954355' },
  { icon: <Mail size={20} />, label: 'Email', value: 'Priyankadongare381@gmail.com', href: 'mailto:Priyankadongare381@gmail.com' },
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
                style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 16, padding: '20px 24px', background: '#0d1b2e', border: '1px solid rgba(148,163,184,0.08)', borderRadius: 16, marginBottom: 16, transition: 'border-color 0.2s' }}
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

            {/* Support Info Card */}
            <div style={{ background: 'linear-gradient(145deg, #0d1b2e 0%, #0a1628 100%)', padding: '28px 24px', borderRadius: 16, border: '1px solid rgba(148,163,184,0.08)' }}>
              <h3 style={{ color: '#fff', fontSize: '1.15rem', fontWeight: 700, marginBottom: 12, fontFamily: "'Outfit', sans-serif" }}>We're here to help</h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: 20 }}>
                Not sure which program is right for you? Have questions about our live sessions? Send us a message and our expert support team will guide you.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#22c55e', fontSize: '0.9rem', fontWeight: 600 }}>
                <span className="dot" style={{ position: 'relative', width: 8, height: 8, background: '#22c55e', boxShadow: '0 0 10px #22c55e' }} />
                Usually responds within 2 hours
              </div>
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
