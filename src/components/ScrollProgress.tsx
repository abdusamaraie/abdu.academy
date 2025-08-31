import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 50,
    restDelta: 0.001
  });

  // Transform scroll progress to discrete steps for section indicators
  const section0 = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const section1 = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const section2 = useTransform(scrollYProgress, [0.4, 0.7], [0, 1]);
  const section3 = useTransform(scrollYProgress, [0.7, 1], [0, 1]);

  return (
    <>
      {/* Smooth progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-foreground/20 transform-origin-0 z-50"
        style={{ scaleX }}
      />
      
      {/* Section indicator dots */}
      <div className="fixed top-6 right-6 z-50 flex flex-col gap-3 opacity-0">
        <motion.div
          className="w-3 h-3 rounded-full"
          style={{ 
            backgroundColor: useTransform(section0, [0, 1], ['transparent', 'transparent']),
            scale: useTransform(section0, [0, 1], [1.2, 1])
          }}
        />
        <motion.div
          className="w-3 h-3 rounded-full"
          style={{ 
            backgroundColor: useTransform(section1, [0, 1], ['transparent', 'transparent']),
            scale: useTransform(section1, [0, 1], [1, 1.2])
          }}
        />
        <motion.div
          className="w-3 h-3 rounded-full"
          style={{ 
            backgroundColor: useTransform(section2, [0, 1], ['transparent', 'transparent']),
            scale: useTransform(section2, [0, 1], [1, 1.2])
          }}
        />
        <motion.div
          className="w-3 h-3 rounded-full"
          style={{ 
            backgroundColor: useTransform(section3, [0, 1], ['transparent', 'transparent']),
            scale: useTransform(section3, [0, 1], [1, 1.2])
          }}
        />
      </div>
    </>
  );
}