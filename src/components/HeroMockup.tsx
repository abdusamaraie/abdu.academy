import { motion } from 'framer-motion';
import { Button } from './ui/button';

export function HeroMockup() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.8 }}
      whileHover={{ y: -10 }}
      className="relative max-w-5xl mx-auto"
    >
      <div className="bg-white rounded-lg shadow-2xl border-2 border-foreground/20 overflow-hidden hover:shadow-3xl transition-all duration-500">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <motion.div 
              className="w-8 h-8 bg-foreground/80 rounded-full flex items-center justify-center"
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-white text-sm">✦</span>
            </motion.div>
            <span className="text-2xl font-bold text-foreground/80" style={{ fontVariationSettings: "'BNCE' 0, 'INFM' 0, 'SPAC' 0" }}>
              ABDU ACADEMY
            </span>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="outline"
              className="border-2 border-foreground/80 text-foreground/80 hover:bg-foreground/80 hover:text-white transition-all duration-300"
              style={{ fontVariationSettings: "'BNCE' 0, 'INFM' 0, 'SPAC' 0" }}
            >
              Enroll Now
            </Button>
          </motion.div>
        </div>
        
        <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6 min-h-[400px]">
          <div className="md:col-span-2 space-y-4">
            <motion.div 
              className="h-48 bg-gradient-to-r from-muted/20 to-muted/40 rounded-lg"
              animate={{ 
                background: [
                  'linear-gradient(90deg, rgba(236,236,240,0.2) 0%, rgba(236,236,240,0.4) 100%)',
                  'linear-gradient(90deg, rgba(236,236,240,0.4) 0%, rgba(236,236,240,0.2) 100%)',
                  'linear-gradient(90deg, rgba(236,236,240,0.2) 0%, rgba(236,236,240,0.4) 100%)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div 
              className="h-48 bg-gradient-to-r from-muted/30 to-muted/50 rounded-lg"
              animate={{ 
                background: [
                  'linear-gradient(90deg, rgba(236,236,240,0.3) 0%, rgba(236,236,240,0.5) 100%)',
                  'linear-gradient(90deg, rgba(236,236,240,0.5) 0%, rgba(236,236,240,0.3) 100%)',
                  'linear-gradient(90deg, rgba(236,236,240,0.3) 0%, rgba(236,236,240,0.5) 100%)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            />
          </div>
          <div className="space-y-4">
            <motion.div 
              className="h-full bg-gradient-to-b from-muted/20 to-muted/40 rounded-lg"
              animate={{ 
                background: [
                  'linear-gradient(180deg, rgba(236,236,240,0.2) 0%, rgba(236,236,240,0.4) 100%)',
                  'linear-gradient(180deg, rgba(236,236,240,0.4) 0%, rgba(236,236,240,0.2) 100%)',
                  'linear-gradient(180deg, rgba(236,236,240,0.2) 0%, rgba(236,236,240,0.4) 100%)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}