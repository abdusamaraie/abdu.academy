import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ContactForm } from './ContactForm';
import { Logo } from './Logo';

export function Footer() {
  return (
    <motion.footer
      id="contact"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="h-screen flex items-center justify-center bg-background border-t border-border snap-start snap-always pt-20 md:pt-0"
    >
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl text-foreground/80 mb-8" style={{ fontVariationSettings: "'BNCE' 0, 'INFM' 0, 'SPAC' 0" }}>
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-foreground/60 mb-12 max-w-2xl mx-auto">
            Join thousands of students who have transformed their careers with ABDU ACADEMY. Start building your future in AI-powered development today.
          </p>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-foreground/80 text-background hover:bg-foreground transition-all duration-300 px-8 py-6 text-lg rounded shadow-lg hover:shadow-xl"
                style={{ fontVariationSettings: "'BNCE' 0, 'INFM' 0, 'SPAC' 0" }}
              >
                Start Learning Now
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ContactForm
                trigger={
                  <button
                    className="border-2 border-foreground/80 text-foreground/80 hover:bg-foreground hover:text-background transition-all duration-300 px-8 py-6 text-lg rounded font-medium h-10 flex items-center justify-center"
                    style={{ fontVariationSettings: "'BNCE' 0, 'INFM' 0, 'SPAC' 0" }}
                  >
                    Contact Us
                  </button>
                }
              />
            </motion.div>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-border pt-8"
        >
          <div className="flex flex-col items-center gap-4">
            <Logo size="sm" showText={true} className="justify-center" />
            <p className="text-foreground/40">
              © 2025 ABDU ACADEMY. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}