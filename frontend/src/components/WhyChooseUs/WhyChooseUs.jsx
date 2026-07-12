import { motion } from 'framer-motion';
import { Award, Tv, MessageCircle, Cpu, Infinity, RefreshCw } from 'lucide-react';

const reasons = [
  { icon: <Award size={26} />, title: 'Certified Mentors', desc: 'All mentors are SEBI-certified and have 5+ years of active market experience.', iconBg: 'rgba(251,191,36,0.1)', iconBorder: '1px solid rgba(251,191,36,0.2)', iconColor: '#fbbf24' },
  { icon: <Tv size={26} />, title: 'Daily Live Sessions', desc: 'Trade in real-time every market day alongside expert mentors.', iconBg: 'rgba(96,165,250,0.1)', iconBorder: '1px solid rgba(96,165,250,0.2)', iconColor: '#60a5fa' },
  { icon: <MessageCircle size={26} />, title: 'Community Support', desc: 'Join a private community of 5,000+ traders for discussions, trade ideas, and support.', iconBg: 'rgba(34,197,94,0.1)', iconBorder: '1px solid rgba(34,197,94,0.2)', iconColor: '#22c55e' },
  { icon: <Cpu size={26} />, title: 'Practical Learning', desc: 'Learn by doing — not just reading. Every concept is applied live in the market.', iconBg: 'rgba(167,139,250,0.1)', iconBorder: '1px solid rgba(167,139,250,0.2)', iconColor: '#a78bfa' },
  { icon: <Infinity size={26} />, title: 'Lifetime Access', desc: 'Pay once, learn forever. All content and future updates included for life.', iconBg: 'rgba(251,146,60,0.1)', iconBorder: '1px solid rgba(251,146,60,0.2)', iconColor: '#fb923c' },
  { icon: <RefreshCw size={26} />, title: 'Updated Strategies', desc: 'Markets evolve. Our strategies are updated regularly to match current conditions.', iconBg: 'rgba(34,211,238,0.1)', iconBorder: '1px solid rgba(34,211,238,0.2)', iconColor: '#22d3ee' },
];

const WhyChooseUs = () => (
  <section className="section-pad" style={{ background: '#0a1628', position: 'relative' }}>
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(to right, transparent, rgba(34,197,94,0.4), transparent)' }} />
    <div className="container">
      <div className="text-center mb-48">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge"><span className="dot" /> Why Choose Us</span>
          <h2 className="section-title">The Lanka Enterprises <span className="gradient-text">Advantage</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Six powerful reasons why 5,000+ students choose Lanka Enterprises over every other option.
          </p>
        </motion.div>
      </div>

      <div className="why-grid">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            className="why-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
          >
            <div
              className="icon-box"
              style={{ background: r.iconBg, border: r.iconBorder, color: r.iconColor, marginBottom: 20 }}
            >
              {r.icon}
            </div>
            <h3>{r.title}</h3>
            <p>{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
