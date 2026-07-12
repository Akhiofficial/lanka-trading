import { motion } from 'framer-motion';
import { Clock, Users, Trophy, Video, ArrowRight } from 'lucide-react';

const features = [
  { icon: <Clock size={18} />, label: 'Daily 2-hour live trading sessions' },
  { icon: <Users size={18} />, label: 'Direct access to expert mentors' },
  { icon: <Trophy size={18} />, label: 'Personalized trade review & feedback' },
  { icon: <Video size={18} />, label: 'Recorded sessions for replay anytime' },
];

const Mentorship = () => (
  <section id="mentorship" className="section-pad" style={{ background: '#0a1628', position: 'relative' }}>
    <div className="container">
      <div className="two-col">
        {/* Left image */}
        <motion.div
          style={{ position: 'relative' }}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80"
            alt="Expert mentors teaching trading"
            className="two-col-img"
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(2,6,23,0.5), transparent)', borderRadius: 24 }} />

          {/* Floating stat */}
          <motion.div
            className="glass"
            style={{ position: 'absolute', bottom: 28, left: 28, borderRadius: 16, padding: '16px 20px' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <div style={{ color: '#22c55e', fontFamily: "'Outfit', sans-serif", fontSize: '1.6rem', fontWeight: 900 }}>₹2.4 Cr+</div>
            <div style={{ color: '#64748b', fontSize: 13, marginTop: 2 }}>Combined student profits</div>
          </motion.div>
        </motion.div>

        {/* Right content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-badge"><span className="dot" /> Live Mentorship</span>
          <h2 className="section-title">
            Trade Live With <span className="gradient-text">Expert Mentors</span>
          </h2>
          <p style={{ color: '#64748b', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: 32 }}>
            Our mentorship program isn't just about watching — you trade live, make decisions, and get instant feedback from professionals.
          </p>

          <ul className="checklist">
            {features.map((f, i) => (
              <motion.li
                key={f.label}
                className="checklist-item"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.1 }}
              >
                <div
                  className="icon-box icon-box-sm"
                  style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)', color: '#22c55e' }}
                >
                  {f.icon}
                </div>
                <span>{f.label}</span>
              </motion.li>
            ))}
          </ul>

          <motion.button
            className="btn-primary btn-lg"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book Your Free Demo <ArrowRight size={18} />
          </motion.button>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Mentorship;
