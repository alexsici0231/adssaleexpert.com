import UrgencyBanner from './components/UrgencyBanner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProofMarquee from './components/SocialProofMarquee';
import ProblemSection from './components/ProblemSection';
import Services from './components/Services';
import Results from './components/Results';
import Process from './components/Process';
import About from './components/About';
import Testimonials from './components/Testimonials';
import TrustBadges from './components/TrustBadges';
import FAQ from './components/FAQ';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import ExitIntentPopup from './components/ExitIntentPopup';

export default function App() {
  return (
    <div className="noise-bg min-h-screen">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:bg-accent focus:text-white focus:px-4 focus:py-2 focus:rounded-lg">
        Skip to main content
      </a>
      <UrgencyBanner />
      <Navbar />
      <main id="main-content">
        <Hero />
        <SocialProofMarquee />
        <ProblemSection />
        <Services />
        <Results />
        <Process />
        <About />
        <Testimonials />
        <TrustBadges />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
      <FloatingCTA />
      <ExitIntentPopup />
    </div>
  );
}
