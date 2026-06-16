import Header from './components/Header';
import HeroSection from './components/HeroSection';
import HowItWorksSection from './components/HowItWorksSection';
import DemoAnimationSection from './components/DemoAnimationSection';
import UseCasesSection from './components/UseCasesSection';
import LiveExamplesSection from './components/LiveExamplesSection';
import FinalCTASection from './components/FinalCTASection';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <DemoAnimationSection />
        <UseCasesSection />
        <LiveExamplesSection />
        <FinalCTASection />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}

export default App;
