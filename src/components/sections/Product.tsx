import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Zap, Globe, Lock } from "lucide-react";

const Product = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Shield,
      title: "Device-Level Authentication",
      description: "Verification embedded at the hardware layer, creating unforgeable proof of authenticity."
    },
    {
      icon: Zap,
      title: "Automated Verification",
      description: "Real-time authentication without human intervention, enabling verification at any transaction speed."
    },
    {
      icon: Globe,
      title: "Global Interoperability",
      description: "Infrastructure designed to operate across borders, supply chains, and regulatory frameworks."
    },
    {
      icon: Lock,
      title: "Cryptographic Security",
      description: "Enterprise-grade security architecture that scales without compromising integrity."
    }
  ];

  return (
    <section id="product" className="section-padding relative" ref={ref}>
      {/* Background accent */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(ellipse at bottom center, hsl(0 0% 8%) 0%, transparent 60%)"
        }}
      />

      <div className="container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-20"
        >
          <span className="text-champagne text-sm tracking-[0.3em] uppercase font-inter">
            Technology
          </span>
          <h2 className="font-syne text-4xl md:text-5xl font-semibold mt-4 text-gradient-subtle">
            Authentication Infrastructure
          </h2>
          <p className="text-muted-foreground font-inter mt-6 max-w-2xl mx-auto">
            The first automated, device-level authentication system designed for 
            global scale and institutional deployment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 * index, ease: [0.4, 0, 0.2, 1] }}
              className="group border-gradient rounded-lg p-8 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300"
            >
              <feature.icon className="w-8 h-8 text-champagne mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-syne text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground font-inter text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="mt-16 p-8 border border-border rounded-lg bg-secondary/30 text-center"
        >
          <p className="text-muted-foreground font-inter text-sm">
            Technical details are shared with qualified partners and investors under NDA.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Product;
