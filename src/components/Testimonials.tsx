import { motion } from 'framer-motion';
import { Avatar, AvatarFallback } from './ui/avatar';
import { testimonials } from './data/testimonials';

export function Testimonials() {
  return (
    <section id="testimonials" className="h-screen flex items-center justify-center bg-background relative overflow-hidden snap-start snap-always pt-20 md:pt-0">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl text-foreground/80" style={{ fontVariationSettings: "'BNCE' 0, 'INFM' 0, 'SPAC' 0" }}>
            What Our Students Say
          </h2>
        </motion.div>

        <div className="relative">
          <motion.div 
            className="flex gap-6 pb-8"
            initial={{ x: 0 }}
            animate={{ x: '-50%' }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear'
            }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <motion.div
                key={`${testimonial.name}-${index}`}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: (index % testimonials.length) * 0.1 
                }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 border-2 border-foreground/20 hover:border-foreground/40 transition-all duration-300 shadow-sm hover:shadow-lg min-w-[280px] flex-shrink-0"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-foreground/10 text-foreground/80">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="text-sm text-foreground/80">{testimonial.name}</h4>
                    <p className="text-sm text-foreground/40">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex gap-3 items-start">
                  <div className="w-12 h-16 border-l-2 border-foreground/20 flex-shrink-0"></div>
                  <p className="text-base text-foreground/40 leading-relaxed">
                    {testimonial.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Gradient fade on right */}
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}