import { motion } from 'framer-motion';

const SectionTitle = ({
  badge,
  title,
  highlight,
  subtitle,
  align = 'center',
  light = false,
}) => {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <motion.div
      className={`flex flex-col gap-4 mb-16 ${alignClass}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {badge && (
        <span className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-semibold px-4 py-2 rounded-full w-fit">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          {badge}
        </span>
      )}
      <h2
        className={`font-display text-4xl md:text-5xl font-bold leading-tight ${light ? 'text-white' : 'text-white'}`}
        style={{ fontFamily: "'Outfit', sans-serif" }}
      >
        {title}{' '}
        {highlight && (
          <span className="gradient-text">{highlight}</span>
        )}
      </h2>
      {subtitle && (
        <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
