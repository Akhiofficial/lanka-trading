import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle, Users, Wifi, Star } from 'lucide-react';

const Hero = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section">
      <div className="hero-bg" />
      <div className="hero-overlay" />
      <div className="hero-overlay-bottom" />
      <div className="hero-glow-1" />

      <div className="hero-inner container">
        <div className="hero-grid">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="hero-badge">
                <span className="dot" style={{ width: 7, height: 7, background: '#22c55e', borderRadius: '50%', animation: 'pulse 2s infinite' }} />
                India's #1 Trading Academy
              </span>
            </motion.div>

            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Master Trading.<br />
              <span className="gradient-text">Create Your</span><br />
              Financial Freedom.
            </motion.h1>

            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Learn stock market trading from industry professionals with live mentoring
              and practical market experience. Join 5,000+ successful students.
            </motion.p>

            <motion.div
              className="hero-btns"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.button
                className="btn-primary btn-lg"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo('courses')}
              >
                <ArrowRight size={18} /> Explore Courses
              </motion.button>
              <motion.button
                className="btn-outline btn-lg"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo('contact')}
              >
                <PlayCircle size={18} /> Book Free Demo
              </motion.button>
            </motion.div>

            <motion.div
              className="hero-trust"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="trust-avatars">
                {[
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
                  'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=40&h=40&fit=crop&crop=face',
                  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
                  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
                ].map((src, i) => (
                  <img key={i} src={src} alt={`Student ${i + 1}`} className="trust-avatar" />
                ))}
              </div>
              <div>
                <div className="trust-stars">★★★★★</div>
                <p className="trust-text"><span>4.9/5</span> from 2,400+ reviews</p>
              </div>
            </motion.div>
          </div>

          {/* Right — Image + floating cards */}
          <motion.div
            className="hero-image-wrap"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            <div className="hero-image-glow" />
            <img
              src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=700&q=80"
              alt="Professional trader"
              className="hero-main-image"
            />

            {/* Floating card 1 */}
            <div className="float-card float-card-1">
              <div className="float-card-icon" style={{ background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.2)' }}>
                <Users size={18} color="#22c55e" />
              </div>
              <div>
                <div className="float-card-val" style={{ color: '#22c55e' }}>5,000+</div>
                <div className="float-card-label">Students</div>
              </div>
            </div>

            {/* Floating card 2 */}
            <div className="float-card float-card-2">
              <div className="float-card-icon" style={{ background: 'rgba(59,130,246,0.12)', border: '1px solid rgba(59,130,246,0.2)' }}>
                <Wifi size={18} color="#60a5fa" />
              </div>
              <div>
                <div className="float-card-val" style={{ color: '#60a5fa' }}>Live</div>
                <div className="float-card-label">Market Access</div>
              </div>
            </div>

            {/* Floating card 3 */}
            <div className="float-card float-card-3">
              <div className="float-card-icon" style={{ background: 'rgba(251,191,36,0.12)', border: '1px solid rgba(251,191,36,0.2)' }}>
                <Star size={18} color="#fbbf24" />
              </div>
              <div>
                <div className="float-card-val" style={{ color: '#fbbf24' }}>4.9★</div>
                <div className="float-card-label">Expert Mentors</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
