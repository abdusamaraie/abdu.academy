import { motion } from 'framer-motion';
import { features } from './data/features';

export function Features() {
  return (
    <section id="features" className="h-screen flex items-center justify-center bg-background snap-start snap-always pt-20 md:pt-0">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl text-foreground/80 mb-4" style={{ fontVariationSettings: "'BNCE' 0, 'INFM' 0, 'SPAC' 0" }}>
            Why Choose Us?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: feature.delay,
                ease: 'easeOut'
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="bg-white rounded-lg p-8 border-2 border-foreground/20 hover:border-foreground/40 transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-foreground/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-8 h-8 text-foreground/80" />
                  </div>
                  <h3 className="text-xl text-foreground/80 mb-2" style={{ fontVariationSettings: "'BNCE' 0, 'INFM' 0, 'SPAC' 0" }}>
                    {feature.title}
                  </h3>
                  <p className="text-foreground/40 text-base">
                    {feature.description}
                  </p>
                </div>
                
                <div className="flex-1 flex items-end">
                  <div className="w-full space-y-3">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${60 + i * 20}%` }}
                        transition={{ duration: 0.6, delay: feature.delay + 0.2 + i * 0.1 }}
                        viewport={{ once: true }}
                        className="h-2 bg-muted/50 rounded-full"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}