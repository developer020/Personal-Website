import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroSphere from "@/assets/hero-sphere.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 70% 40%, hsl(220 15% 12%) 0%, hsl(220 15% 6%) 60%)"
        }}
      />
      
      {/* Floating sphere image */}
      <motion.div 
        className="absolute top-1/2 right-0 md:right-[10%] -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] opacity-60"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <img 
          src={heroSphere} 
          alt="" 
          className="w-full h-full object-contain"
        />
      </motion.div>
      
      {/* Subtle glow effect */}
      <div 
        className="absolute top-1/3 right-1/4 w-[600px] h-[600px] opacity-30 animate-sphere-pulse"
        style={{
          background: "radial-gradient(circle, hsl(220 20% 25% / 0.5) 0%, transparent 60%)"
        }}
      />

      <div className="container-wide relative z-10 pt-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <span className="inline-block text-champagne text-sm tracking-[0.3em] uppercase mb-6 font-inter">
              Founder & CEO, Ayres Originals
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            className="font-syne text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8"
          >
            <span className="text-gradient">Zamzam Ali</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="text-platinum-dim text-lg md:text-xl lg:text-2xl font-inter font-light max-w-xl mb-12 leading-relaxed"
          >
            Building the world's first global counterfeit eradication infrastructure.
            <br />
            <span className="text-muted-foreground">CTO at 21. LSE. Category creator.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="hero" size="xl" onClick={scrollToContact} className="rounded-full">
              Contact
            </Button>
            <Button variant="platinum" size="xl" asChild className="rounded-full">
              <a href="https://linkedin.com/in/zamzamali" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="glass rounded-full p-3"
        >
          <ArrowDown className="w-4 h-4 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;