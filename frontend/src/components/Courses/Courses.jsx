import { motion } from 'framer-motion';
import { ArrowRight, Zap, Check } from 'lucide-react';
import { coursesData } from '../../data/courses';

const Courses = () => (
  <section id="courses" style={{ background: '#020617', padding: '60px 0' }}>
    <div className="container">

      {/* Compact Section Header */}
      <motion.div
        style={{ textAlign: 'center', marginBottom: 36 }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="section-badge" style={{ marginBottom: 12 }}>
          <span className="dot" /> Our Programs
        </span>
        <h2 style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: '2rem',
          fontWeight: 800,
          color: '#fff',
          margin: '0 0 8px',
          lineHeight: 1.2,
        }}>
          Choose Your <span className="gradient-text">Trading Path</span>
        </h2>
        <p style={{ color: '#64748b', fontSize: 14, margin: 0 }}>
          From beginner to pro — pick the program that fits your level.
        </p>
      </motion.div>

      {/* 3 Cards always in ONE ROW — responsive via CSS class */}
      <div className="courses-cards-grid">
        {coursesData.map((course, i) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            style={{
              borderRadius: 18,
              overflow: 'hidden',
              ...(course.highlighted ? {
                background: 'linear-gradient(#0d1b2e, #0d1b2e) padding-box, linear-gradient(135deg, #16a34a, #22c55e) border-box',
                border: '2px solid transparent',
                boxShadow: '0 12px 40px rgba(22,163,74,0.25)',
              } : {
                background: '#0d1b2e',
                border: '1px solid rgba(148,163,184,0.1)',
              }),
            }}
          >
            <div style={{ padding: '20px 20px 18px' }}>

              {/* Row 1: Badge + icon + title */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ fontSize: 24 }}>{course.icon}</span>
                  <div>
                    <h3 style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: '1.05rem',
                      fontWeight: 800,
                      color: '#fff',
                      margin: 0,
                      lineHeight: 1.2,
                    }}>
                      {course.title}
                    </h3>
                    <p style={{ color: '#22c55e', fontSize: 11, fontWeight: 600, margin: 0 }}>
                      {course.subtitle}
                    </p>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
                  <span style={{
                    fontSize: 10,
                    fontWeight: 700,
                    padding: '3px 10px',
                    borderRadius: 999,
                    color: '#fff',
                    background: course.badgeColor,
                    whiteSpace: 'nowrap',
                  }}>
                    {course.badge}
                  </span>
                  {course.highlighted && (
                    <span style={{ display: 'flex', alignItems: 'center', gap: 3, color: '#22c55e', fontSize: 10, fontWeight: 700 }}>
                      <Zap size={10} /> Top Pick
                    </span>
                  )}
                </div>
              </div>

              {/* Description */}
              <p style={{
                color: '#64748b',
                fontSize: 12,
                lineHeight: 1.55,
                marginBottom: 12,
              }}>
                {course.description}
              </p>

              {/* Duration + Sessions in one row */}
              <div style={{ display: 'flex', gap: 8, marginBottom: 14 }}>
                {[
                  { val: course.duration, key: 'Duration' },
                  { val: course.sessions, key: 'Sessions' },
                ].map(m => (
                  <div key={m.key} style={{
                    background: 'rgba(148,163,184,0.06)',
                    border: '1px solid rgba(148,163,184,0.08)',
                    borderRadius: 8,
                    padding: '5px 10px',
                    flex: 1,
                    textAlign: 'center',
                  }}>
                    <div style={{ color: '#fff', fontSize: 11, fontWeight: 600 }}>{m.val}</div>
                    <div style={{ color: '#475569', fontSize: 10 }}>{m.key}</div>
                  </div>
                ))}
              </div>

              {/* Features — 2 column grid, responsive via CSS class */}
              <div className="course-feature-grid">
                {course.features.map((f) => (
                  <div key={f} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 5,
                    color: '#94a3b8',
                    fontSize: 11,
                    lineHeight: 1.4,
                  }}>
                    <span style={{ color: '#22c55e', fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div style={{ height: 1, background: 'rgba(148,163,184,0.08)', marginBottom: 14 }} />

              {/* Price + CTA in one row (responsive via CSS class) */}
              <div className="course-price-enroll-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                    <span style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: '1.3rem',
                      fontWeight: 900,
                      color: '#fff',
                    }}>
                      {course.price}
                    </span>
                    <span style={{ color: '#475569', textDecoration: 'line-through', fontSize: 11 }}>
                      {course.originalPrice}
                    </span>
                  </div>
                  <p style={{ color: '#22c55e', fontSize: 10, margin: '2px 0 0', fontWeight: 500 }}>
                    💎 Lifetime access
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    padding: '10px 18px',
                    borderRadius: 10,
                    fontWeight: 700,
                    fontSize: 13,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                    ...(course.highlighted ? {
                      background: 'linear-gradient(135deg, #16a34a, #22c55e)',
                      color: '#fff',
                      border: 'none',
                      boxShadow: '0 4px 16px rgba(22,163,74,0.4)',
                    } : {
                      background: 'transparent',
                      color: '#22c55e',
                      border: '1.5px solid #22c55e',
                    }),
                  }}
                >
                  Enroll <ArrowRight size={14} />
                </motion.button>
              </div>

            </div>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

export default Courses;
