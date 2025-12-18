import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left column - Label */}
          <div>
            <span className="text-champagne text-sm tracking-[0.3em] uppercase font-inter">
              About
            </span>
            <h2 className="font-syne text-4xl md:text-5xl font-semibold mt-4 text-gradient-subtle">
              Architect of<br />Authenticated Commerce
            </h2>
          </div>

          {/* Right column - Content */}
          <div className="space-y-6">
            <p className="text-platinum-dim text-lg font-inter font-light leading-relaxed">
              Zamzam Ali is the Founder and CEO of Ayres Originals, where she is building 
              the infrastructure that will define the future of product authentication.
            </p>
            <p className="text-muted-foreground font-inter leading-relaxed">
              As CTO at 21, she developed the first device authentication automation technology, 
              establishing a new paradigm for how authenticity is verified at scale. 
              Currently studying at the London School of Economics, she bridges deep technical 
              execution with a sophisticated understanding of global trade systems.
            </p>
            <p className="text-muted-foreground font-inter leading-relaxed">
              Her work is not about incremental improvement. It is about building what has 
              never existed: a global, automated verification layer that operates across 
              borders, supply chains, and industries.
            </p>
          </div>
        </motion.div>

        {/* Credential indicators */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="mt-20 pt-12 border-t border-border"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Role", value: "Founder & CEO" },
              { label: "Company", value: "Ayres Originals" },
              { label: "Education", value: "LSE" },
              { label: "Achievement", value: "CTO at 21" },
            ].map((item, index) => (
              <div key={index}>
                <span className="text-muted-foreground text-sm font-inter uppercase tracking-wider">
                  {item.label}
                </span>
                <p className="text-foreground font-syne text-lg mt-1">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
