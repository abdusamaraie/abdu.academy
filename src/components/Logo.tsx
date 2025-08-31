import { motion } from 'framer-motion';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showText?: boolean;
}

export function Logo({ size = 'md', className = '', showText = true }: LogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-2xl'
  };

  return (
    <motion.div 
      className={`flex items-center gap-3 ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      {/* Logo Icon */}
      <div className={`relative ${sizeClasses[size]} flex-shrink-0`}>
        <img 
          src="/abdu.academy.icon 1.svg" 
          alt="Abdu Academy Logo" 
          className="w-full h-full object-contain"
        />
      </div>
      
      {/* Text */}
      {showText && (
        <motion.h1 
          className={`font-bold text-foreground ${textSizes[size]}`}
          style={{ fontVariationSettings: "'BNCE' 0, 'INFM' 0, 'SPAC' 0" }}
        >
          ABDU ACADEMY
        </motion.h1>
      )}
    </motion.div>
  );
}
