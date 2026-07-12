import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import { testimonialsData } from '../../data/testimonials';

const Testimonials = () => (
  <section id="testimonials" className="section-pad" style={{ background: '#020617' }}>
    <div className="container">
      <div className="text-center mb-48">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge"><span className="dot" /> Student Stories</span>
          <h2 className="section-title">Real Results, <span className="gradient-text">Real Students</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Don't take our word for it. Hear from students who transformed their financial lives with Lanka Enterprises.
          </p>
        </motion.div>
      </div>

      <div className="courses-grid">
        {testimonialsData.map((t, i) => (
          <motion.div
            key={t.id}
            className="testimonial-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.12 }}
            whileHover={{ y: -6 }}
          >
            <div className="testimonial-quote">"</div>
            <p className="testimonial-text">{t.review}</p>

            <div className="profit-badge">
              <TrendingUp size={14} /> {t.profit}
            </div>

            <div className="testimonial-divider" />

            <div className="testimonial-profile">
              <img src={t.image} alt={t.name} className="testimonial-avatar" />
              <div style={{ flex: 1 }}>
                <div className="testimonial-name">{t.name}</div>
                <div className="testimonial-role">{t.role} · {t.location}</div>
              </div>
              <div className="stars">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} className="star">★</span>
                ))}
              </div>
            </div>

            <div style={{ marginTop: 14 }}>
              <span style={{ fontSize: 12, background: 'rgba(148,163,184,0.08)', color: '#64748b', padding: '4px 12px', borderRadius: 999 }}>
                {t.course}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
