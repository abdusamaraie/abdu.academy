
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory bg-background">
      <ScrollProgress />
      <Navigation />
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
      <Toaster />
    </div>
  );
}