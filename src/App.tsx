import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import ContactCTA from './sections/ContactCTA';
import MissionVision from './sections/MissionVision';
import Products from './sections/Products';
import BrandTagline from './sections/BrandTagline';
import Partners from './sections/Partners';
import Projects from './sections/Projects';
import Services from './sections/Services';
import CTABanner from './sections/CTABanner';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ContactCTA />
        <MissionVision />
        <Products />
        <BrandTagline />
        <Partners />
        <Projects />
        <Services />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}

export default App;
