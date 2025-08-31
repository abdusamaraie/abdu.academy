import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { HeroMockup } from './HeroMockup';
import { Logo } from './Logo';

export function Hero() {
  return (
    <section id="hero" className="relative h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-muted/20 px-6 snap-start snap-always pt-28 md:pt-20">
      <div className="container mx-auto text-center max-w-6xl">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-8 md:mb-16"
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.6, type: 'spring' }}
            className="flex justify-center mb-8"
          >
            <Logo size="lg" className="justify-center" />
          </motion.div>
          
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
            className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground/80 mb-6 leading-tight"
            style={{ fontVariationSettings: "'BNCE' 0, 'INFM' 0, 'SPAC' 0" }}
          >
            Build the Future with AI
          </motion.h1>
          
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
            className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-foreground/60 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed"
            style={{ fontVariationSettings: "'BNCE' 0, 'INFM' 0, 'SPAC' 0" }}
          >
            Master AI-powered web and mobile development. Learn to create intelligent applications, automate workflows, and build cutting-edge solutions with the latest AI tools and technologies.
          </motion.p>
          
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="bg-foreground/80 text-background hover:bg-foreground transition-all duration-300 px-8 py-6 text-lg rounded shadow-lg hover:shadow-xl"
              style={{ fontVariationSettings: "'BNCE' 0, 'INFM' 0, 'SPAC' 0" }}
            >
              Get Started
            </Button>
          </motion.div>
        </motion.div>

        <HeroMockup />
      </div>
    </section>
  );
}