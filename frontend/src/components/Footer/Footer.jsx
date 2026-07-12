import { Link } from 'react-router-dom';
import { TrendingUp, ArrowRight } from 'lucide-react';
import { FaInstagram, FaYoutube, FaTwitter, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';

const footerLinks = {
  'Quick Links': [
    { label: 'Home', href: '/#' },
    { label: 'About Us', href: '/#about' },
    { label: 'Mentorship', href: '/#mentorship' },
    { label: 'Reviews', href: '/#testimonials' },
    { label: 'FAQ', href: '/#faq' },
  ],
  'Courses': [
    { label: 'Basic Course', href: '/#courses' },
    { label: 'Advance Course', href: '/#courses' },
    { label: 'Pro Mentorship', href: '/#courses' },
    { label: 'Free Demo Class', href: '/#contact' },
  ],
  'Contact': [
    { label: '+91 84509 54355', href: 'tel:+918450954355' },
    { label: 'Priyankadongare381@gmail.com', href: 'mailto:Priyankadongare381@gmail.com' },
    { label: 'Mumbai, Maharashtra, India', href: '#' },
    { label: 'Mon–Sat: 9am – 7pm', href: '#' },
  ],
};

const socials = [
  { icon: <FaInstagram />, href: '#', label: 'Instagram' },
  { icon: <FaYoutube />, href: '#', label: 'YouTube' },
  { icon: <FaTwitter />, href: '#', label: 'Twitter' },
  { icon: <FaLinkedinIn />, href: '#', label: 'LinkedIn' },
  { icon: <FaFacebookF />, href: '#', label: 'Facebook' },
];

const Footer = () => (
  <footer className="footer">
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(to right, transparent, rgba(34,197,94,0.4), transparent)' }} />

    <div className="container">
      <div className="footer-grid">
        {/* Brand */}
        <div>
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 12 }}>
            <div className="nav-logo-icon">
              <TrendingUp size={20} color="#fff" />
            </div>
            <div className="nav-logo-text">
              <span className="nav-logo-name">Lanka <span className="gradient-text">Enterprises</span></span>
              <span className="nav-logo-sub">Trading Academy</span>
            </div>
          </Link>

          <p className="footer-brand-desc">
            India's leading trading academy — empowering 5,000+ students with practical, market-proven trading education.
          </p>

          <div className="footer-socials">
            {socials.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label} className="social-btn">
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([section, links]) => (
          <div key={section}>
            <h4 className="footer-heading">{section}</h4>
            <ul className="footer-links">
              {links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer-link">
                    <ArrowRight size={12} style={{ opacity: 0, transition: 'opacity 0.2s' }} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">© {new Date().getFullYear()} Lanka Enterprises. All rights reserved.</p>
        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Refund Policy</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
