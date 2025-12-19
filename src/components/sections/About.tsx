import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import liquidMetal from "@/assets/liquid-metal.jpg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="relative"
          >
            <div className="float-image aspect-square relative overflow-hidden rounded-3xl">
              <img 
                src={liquidMetal} 
                alt="Abstract technology visualization" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            {/* Floating glass card */}
            <motion.div 
              className="absolute -bottom-6 -right-6 glass-card p-6 max-w-[200px]"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-champagne text-xs tracking-wider uppercase font-inter">Career</span>
              <p className="text-foreground font-syne text-xl font-semibold mt-1">CTO at 21</p>
            </motion.div>
          </motion.div>

          {/* Right column - Content */}
          <div className="space-y-8">
            <div>
              <span className="text-champagne text-sm tracking-[0.3em] uppercase font-inter">
                About
              </span>
              <h2 className="font-syne text-4xl md:text-5xl font-semibold mt-4 text-gradient-subtle">
                Architect of<br />Authenticated Commerce
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-platinum-dim text-lg font-inter font-light leading-relaxed">
                Zamzam Ali is the Founder and CEO of Ayres Originals, where she is building 
                the infrastructure that will define the future of product authentication.
              </p>
              <p className="text-muted-foreground font-inter leading-relaxed">
                She developed the first device authentication automation technology, 
                establishing a new paradigm for how authenticity is verified at scale. 
                Currently studying at the London School of Economics, she bridges deep technical 
                execution with a sophisticated understanding of global trade systems.
              </p>
              <p className="text-muted-foreground font-inter leading-relaxed">
                Her work is not incremental. It is foundational. She is building what has 
                never existed: a global, automated verification layer that quietly underpins 
                trust across borders, supply chains, and industries.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Credential indicators in glass cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: "Role", value: "Founder & CEO" },
            { label: "Company", value: "Ayres Originals" },
            { label: "Education", value: "LSE" },
            { label: "Career", value: "CTO at 21" },
          ].map((item, index) => (
            <div key={index} className="glass-card p-6 text-center">
              <span className="text-muted-foreground text-xs font-inter uppercase tracking-wider">
                {item.label}
              </span>
              <p className="text-foreground font-syne text-lg mt-2">{item.value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;