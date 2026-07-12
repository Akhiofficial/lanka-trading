import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';

const checklist = [
  'SEBI-registered educational program',
  'Active traders as educators — not just teachers',
  'Private Telegram community with 5,000+ members',
  'Real market trades shown live every session',
  'Consistent, updated trading strategies',
  'Placement support & job referrals for analysts',
];

const About = () => (
  <section id="about" className="section-pad" style={{ background: '#020617', position: 'relative', overflow: 'hidden' }}>
    <div style={{ position: 'absolute', right: 0, top: 0, width: '50%', height: '100%', background: 'linear-gradient(to left, rgba(22,163,74,0.04), transparent)' }} />
    <div className="container">
      <div className="two-col">
        {/* Left image */}
        <motion.div
          style={{ position: 'relative', order: 2 }}
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div style={{ position: 'absolute', inset: -20, background: 'radial-gradient(circle, rgba(22,163,74,0.08) 0%, transparent 70%)', borderRadius: 24 }} />
          <img
            src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=700&q=80"
            alt="Bull market trading chart"
            className="two-col-img"
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(2,6,23,0.4), transparent)', borderRadius: 24 }} />

          {/* Award card */}
          <motion.div
            className="glass"
            style={{ position: 'absolute', top: 24, right: 24, borderRadius: 16, padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 12 }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <span style={{ fontSize: 28 }}>🏆</span>
            <div>
              <div style={{ color: '#fff', fontWeight: 700, fontSize: 13 }}>Best Trading Academy</div>
              <div style={{ color: '#22c55e', fontSize: 11 }}>India 2024 Award</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right content */}
        <motion.div
          style={{ order: 1 }}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-badge"><span className="dot" /> About Us</span>
          <h2 className="section-title">
            Built by Traders, <span className="gradient-text">For Traders</span>
          </h2>
          <p style={{ color: '#64748b', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: 28 }}>
            Lanka Enterprises was founded with one goal — to make professional-grade trading education accessible to every Indian. No fluff, no theory overload. Just real strategies that work.
          </p>

          <ul className="checklist">
            {checklist.map((item, i) => (
              <motion.li
                key={item}
                className="checklist-item"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i }}
              >
                <CheckCircle size={18} className="checklist-icon" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>

          <motion.button
            className="btn-primary btn-lg"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More About Us <ArrowRight size={18} />
          </motion.button>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
