import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: 5000, suffix: '+', label: 'Students Trained', color: '#22c55e' },
  { value: 100, suffix: '+', label: 'Live Sessions', color: '#60a5fa' },
  { value: 95, suffix: '%', label: 'Student Satisfaction', color: '#a78bfa' },
  { value: 5, suffix: '+', label: 'Years Experience', color: '#fb923c' },
];

const Counter = ({ value, suffix, color }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 2000;
        const step = (value / duration) * 16;
        let current = 0;
        const timer = setInterval(() => {
          current += step;
          if (current >= value) { setCount(value); clearInterval(timer); }
          else setCount(Math.floor(current));
        }, 16);
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value]);

  return (
    <span ref={ref} style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 900, color, display: 'block', lineHeight: 1 }}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const Stats = () => (
  <section className="stats-section">
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(to right, transparent, rgba(34,197,94,0.4), transparent)' }} />
    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(to right, transparent, rgba(34,197,94,0.4), transparent)' }} />
    <div className="container">
      <div className="stats-grid">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            style={{ textAlign: 'center' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
          >
            <Counter value={s.value} suffix={s.suffix} color={s.color} />
            <p className="stat-label">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Stats;
