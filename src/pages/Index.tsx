import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Vision from "@/components/sections/Vision";
import Problem from "@/components/sections/Problem";
import Product from "@/components/sections/Product";
import Signals from "@/components/sections/Signals";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Zamzam Ali | Founder & CEO, Ayres Originals | Counterfeit Eradication Infrastructure</title>
        <meta 
          name="description" 
          content="Zamzam Ali is the Founder and CEO of Ayres Originals, building the world's first global counterfeit eradication infrastructure. CTO at 21, LSE student, and creator of device authentication automation technology." 
        />
        <meta name="keywords" content="Zamzam Ali, Ayres Originals, counterfeit eradication technology, luxury authentication infrastructure, device authentication automation, anti-counterfeiting" />
        <meta property="og:title" content="Zamzam Ali | Founder & CEO, Ayres Originals" />
        <meta property="og:description" content="Building the world's first global counterfeit eradication infrastructure. Device authentication automation technology for verified commerce." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zamzam Ali | Founder & CEO, Ayres Originals" />
        <meta name="twitter:description" content="Building the world's first global counterfeit eradication infrastructure." />
        <link rel="canonical" href="https://zamzamali.com" />
      </Helmet>

      <main className="bg-background min-h-screen">
        <Navigation />
        <Hero />
        <About />
        <Vision />
        <Problem />
        <Product />
        <Signals />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Index;
