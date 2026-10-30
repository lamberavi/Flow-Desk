import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import Features from "./Features.jsx";
import HowItWorks from "./HowItWorks.jsx";
import CTA from "./CTA.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
