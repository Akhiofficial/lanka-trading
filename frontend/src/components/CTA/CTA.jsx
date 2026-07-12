import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const CTA = () => (
  <section className="cta-section" style={{ background: '#020617' }}>
    <div className="cta-bg" />
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(to right, transparent, rgba(34,197,94,0.5), transparent)' }} />
    <div className="container">
      <motion.div
        className="cta-inner"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="section-badge" style={{ margin: '0 auto 24px' }}>
          <Sparkles size={14} /> Limited Seats Available
        </span>

        <h2 className="cta-title">
          Ready to Start <span className="gradient-text">Trading?</span>
        </h2>

        <p className="cta-subtitle">
          Join thousands of successful students who transformed their financial future with Lanka Enterprises Trading Academy.
        </p>

        <div className="cta-btns">
          <motion.button
            className="btn-primary btn-lg"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Enroll Today <ArrowRight size={18} />
          </motion.button>
          <motion.button
            className="btn-outline btn-lg"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book Free Demo
          </motion.button>
        </div>

        <p className="cta-trust">
          🔒 7-day money-back guarantee · No hidden charges · Instant access
        </p>
      </motion.div>
    </div>
  </section>
);

export default CTA;
