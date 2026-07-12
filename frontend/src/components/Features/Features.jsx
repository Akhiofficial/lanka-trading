import { motion } from 'framer-motion';
import { Monitor, Users, Shield, Infinity } from 'lucide-react';

const features = [
  {
    icon: <Monitor size={26} />,
    title: 'Live Market Training',
    desc: 'Trade alongside expert mentors in real-time market hours. Watch every decision, every entry, every exit — live.',
    bg: 'rgba(34,197,94,0.08)',
    border: '1px solid rgba(34,197,94,0.15)',
    iconBg: 'rgba(34,197,94,0.12)',
    iconBorder: '1px solid rgba(34,197,94,0.2)',
    iconColor: '#22c55e',
    cardBg: 'linear-gradient(135deg, rgba(34,197,94,0.06) 0%, rgba(13,27,46,0.8) 100%)',
  },
  {
    icon: <Users size={26} />,
    title: 'Expert Mentorship',
    desc: 'Get guidance from traders with 5+ years of proven market experience. Personalized feedback on your trades.',
    cardBg: 'linear-gradient(135deg, rgba(59,130,246,0.06) 0%, rgba(13,27,46,0.8) 100%)',
    iconBg: 'rgba(59,130,246,0.12)',
    iconBorder: '1px solid rgba(59,130,246,0.2)',
    iconColor: '#60a5fa',
    border: '1px solid rgba(59,130,246,0.12)',
  },
  {
    icon: <Shield size={26} />,
    title: 'Risk Management',
    desc: 'Master the art of protecting your capital. Learn position sizing, stop-loss strategies, and portfolio management.',
    cardBg: 'linear-gradient(135deg, rgba(167,139,250,0.06) 0%, rgba(13,27,46,0.8) 100%)',
    iconBg: 'rgba(167,139,250,0.12)',
    iconBorder: '1px solid rgba(167,139,250,0.2)',
    iconColor: '#a78bfa',
    border: '1px solid rgba(167,139,250,0.12)',
  },
  {
    icon: <Infinity size={26} />,
    title: 'Lifetime Access',
    desc: 'All recordings, materials, and future updates are yours forever. Learn at your own pace with zero expiry.',
    cardBg: 'linear-gradient(135deg, rgba(251,146,60,0.06) 0%, rgba(13,27,46,0.8) 100%)',
    iconBg: 'rgba(251,146,60,0.12)',
    iconBorder: '1px solid rgba(251,146,60,0.2)',
    iconColor: '#fb923c',
    border: '1px solid rgba(251,146,60,0.12)',
  },
];

const Features = () => (
  <section className="section-pad" style={{ background: '#020617', position: 'relative' }}>
    <div className="container">
      <div className="text-center mb-48">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">
            <span className="dot" />
            Why Lanka Enterprises
          </span>
          <h2 className="section-title">
            Everything You Need to <span className="gradient-text">Trade Profitably</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto 0' }}>
            A complete ecosystem built for traders at every level — from absolute beginners to experienced professionals.
          </p>
        </motion.div>
      </div>

      <div className="features-grid">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            className="feature-card"
            style={{ background: f.cardBg, border: f.border || '1px solid rgba(148,163,184,0.08)' }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            whileHover={{ y: -8 }}
          >
            <div
              className="feature-card-icon"
              style={{ background: f.iconBg, border: f.iconBorder, color: f.iconColor }}
            >
              {f.icon}
            </div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
