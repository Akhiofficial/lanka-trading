import { motion } from 'framer-motion';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  className = '',
  icon,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center gap-2 font-semibold rounded-xl transition-all duration-300 cursor-pointer border-0 outline-none';

  const variants = {
    primary: 'btn-primary text-white',
    outline: 'btn-outline',
    ghost: 'bg-transparent text-green-400 hover:bg-green-400/10 border border-transparent hover:border-green-400/30',
  };

  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3.5 text-base',
    lg: 'px-9 py-4 text-lg',
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        {...props}
      >
        {icon && <span>{icon}</span>}
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={classes}
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {icon && <span>{icon}</span>}
      {children}
    </motion.button>
  );
};

export default Button;
