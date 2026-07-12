import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', hash: '' },
  { label: 'Courses', hash: 'courses' },
  { label: 'Mentorship', hash: 'mentorship' },
  { label: 'About', hash: 'about' },
  { label: 'Reviews', hash: 'testimonials' },
  { label: 'Contact', hash: 'contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (hash) => {
    setMenuOpen(false);
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="container">
          <div className="nav-inner">
            {/* Logo */}
            <Link to="/" className="nav-logo" onClick={() => handleNavClick('')} style={{ display: 'flex', alignItems: 'center' }}>
              <motion.img
                src="/lanka-logo.png"
                alt="Lanka Enterprises"
                style={{ height: '64px', width: 'auto', objectFit: 'contain' }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
            </Link>

            {/* Desktop Links */}
            <ul className="nav-links">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <span
                    className="nav-link"
                    onClick={() => handleNavClick(link.hash)}
                  >
                    {link.label}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="nav-cta">
              <motion.button
                className="btn-primary btn-sm"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => handleNavClick('courses')}
              >
                Enroll Now
              </motion.button>
            </div>

            {/* Mobile Toggle */}
            <button
              className="nav-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {navLinks.map((link, i) => (
          <motion.span
            key={link.label}
            className="mobile-nav-link"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: menuOpen ? 1 : 0, y: menuOpen ? 0 : 20 }}
            transition={{ delay: i * 0.06 }}
            onClick={() => handleNavClick(link.hash)}
          >
            {link.label}
          </motion.span>
        ))}
        <motion.button
          className="btn-primary btn-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: menuOpen ? 1 : 0 }}
          transition={{ delay: 0.35 }}
          onClick={() => handleNavClick('courses')}
        >
          Enroll Now
        </motion.button>
      </div>
    </>
  );
};

export default Navbar;
