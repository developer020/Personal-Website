import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import networkAbstract from "@/assets/network-abstract.jpg";

const Vision = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="vision" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background image */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src={networkAbstract} 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      </div>

      <div className="container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="text-champagne text-sm tracking-[0.3em] uppercase font-inter">
            Vision & Mission
          </span>

          <h2 className="font-syne text-4xl md:text-5xl lg:text-6xl font-semibold mt-6 mb-8 text-gradient-subtle leading-tight">
            Infrastructure for a<br />Counterfeit-Free World
          </h2>

          <p className="text-platinum-dim text-lg md:text-xl font-inter font-light leading-relaxed mb-12">
            We envision a global commerce ecosystem where every product carries verifiable 
            proof of authenticity. Not through labels, not through databases, but through 
            instant one-tap verification that operates invisibly and universally.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="grid md:grid-cols-2 gap-6 mt-16"
        >
          <div className="glass-card p-10">
            <h3 className="font-syne text-2xl font-semibold text-foreground mb-4">Vision</h3>
            <p className="text-muted-foreground font-inter leading-relaxed">
              To establish the definitive global standard for product authentication, 
              creating systemic trust in commerce that transcends borders and industries.
            </p>
          </div>

          <div className="glass-card p-10">
            <h3 className="font-syne text-2xl font-semibold text-foreground mb-4">Mission</h3>
            <p className="text-muted-foreground font-inter leading-relaxed">
              To build and deploy the world's first automated, device-level authentication 
              infrastructure, enabling instantaneous verification at every point of transaction.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;