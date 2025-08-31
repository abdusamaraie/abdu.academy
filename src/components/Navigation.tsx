import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

import { Menu, X } from 'lucide-react';
import { useIsMobile } from './ui/use-mobile';
import { useState, useEffect } from 'react';
import { Logo } from './Logo';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'Features', id: 'features' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact', id: 'contact' }
  ];
  
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0.95)', 'rgba(255, 255, 255, 0.98)']
  );
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(4px)', 'blur(12px)']
  );

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // For snap-scrolling sections, scroll to the element directly
      // The snap-scroll behavior will handle the precise positioning
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      // Close mobile menu after navigation
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when screen size changes to desktop
  useEffect(() => {
    if (!isMobile && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [isMobile, isMenuOpen]);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen && isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen, isMobile]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{ backgroundColor, backdropFilter: backdropBlur }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-border"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5, type: 'spring' }}
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <Logo size="md" className="cursor-pointer" />
            </motion.div>
          
            {/* Desktop Navigation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="hidden md:flex items-center justify-center gap-12"
            >
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-sm text-foreground/80 hover:text-foreground transition-all duration-200 cursor-pointer relative group"
                  style={{ fontVariationSettings: "'BNCE' 0, 'INFM' 0, 'SPAC' 0" }}
                >
                  {item.label}
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-foreground/80"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.button>
              ))}
            </motion.div>

            {/* Mobile Hamburger Button */}
            <motion.button
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors duration-200 relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle mobile menu"
            >
              <motion.div
                animate={{ 
                  rotate: isMenuOpen ? 180 : 0,
                  scale: isMenuOpen ? 1.1 : 1 
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={20} className="text-foreground/80" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={20} className="text-foreground/80" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
              
              {/* Active state indicator */}
              <motion.div
                className="absolute inset-0 rounded-lg border-2 border-foreground/40"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: isMenuOpen ? 1 : 0, 
                  opacity: isMenuOpen ? 1 : 0 
                }}
                transition={{ duration: 0.2 }}
              />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && isMobile && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
              onClick={toggleMenu}
            />
            
            {/* Mobile Menu */}
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ 
                type: 'spring',
                damping: 25,
                stiffness: 200,
                duration: 0.4 
              }}
              className="fixed top-0 right-0 h-full w-64 bg-background/98 backdrop-blur-lg border-l border-border z-50 shadow-2xl"
            >
              <div className="flex flex-col pt-20 px-6">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ 
                      delay: index * 0.1,
                      duration: 0.4,
                      ease: 'easeOut'
                    }}
                    whileHover={{ 
                      scale: 1.02, 
                      x: 8,
                      backgroundColor: 'rgba(0, 0, 0, 0.05)',
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ 
                      scale: 0.98,
                      x: 4,
                      transition: { duration: 0.1 }
                    }}
                    className="text-left py-4 px-3 text-lg text-foreground/80 hover:text-foreground transition-all duration-200 cursor-pointer relative group border-b border-border/30 last:border-b-0 rounded-lg"
                    style={{ fontVariationSettings: "'BNCE' 0, 'INFM' 0, 'SPAC' 0" }}
                  >
                    <span className="relative z-10">{item.label}</span>
                    
                    {/* Hover background */}
                    <motion.div
                      className="absolute inset-0 bg-accent/50 rounded-lg"
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                    
                    {/* Active indicator */}
                    <motion.div
                      className="absolute left-0 top-1/2 w-1 h-8 bg-foreground/80 rounded-r-full"
                      initial={{ scaleY: 0, opacity: 0, x: -2 }}
                      whileHover={{ scaleY: 1, opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      style={{ transformOrigin: 'center' }}
                    />
                    
                    {/* Tap feedback */}
                    <motion.div
                      className="absolute inset-0 bg-foreground/10 rounded-lg"
                      initial={{ scale: 0, opacity: 0 }}
                      whileTap={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.1 }}
                    />
                  </motion.button>
                ))}
                
                {/* Menu footer with subtle branding */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.1 + 0.2, duration: 0.4 }}
                  className="mt-8 pt-6 border-t border-border/30 text-center"
                >
                  <Logo size="sm" showText={true} className="justify-center" />
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}