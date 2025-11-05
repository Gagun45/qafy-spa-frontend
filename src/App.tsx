import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Contact from "./components/GetQuote/GetQuote";
import Navbar from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Pricing from "./components/Prices/Prices";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import GincoreWidget from "./components/Widget/Widget";

function App() {
  return (
    <>
      <GincoreWidget /> {/* hidden */}
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <About />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
