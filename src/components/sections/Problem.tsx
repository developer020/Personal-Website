import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Problem = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="problem" className="section-padding relative" ref={ref}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-20"
        >
          <span className="text-champagne text-sm tracking-[0.3em] uppercase font-inter">
            The Problem
          </span>
          <h2 className="font-syne text-4xl md:text-5xl font-semibold mt-4 text-gradient-subtle">
            A $1.79 Trillion Crisis
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Problem side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="space-y-8">
              <div>
                <div className="font-syne text-6xl md:text-7xl font-bold text-champagne mb-4">
                  $1.79T
                </div>
                <p className="text-platinum-dim text-lg font-inter">
                  Annual global cost of counterfeiting and piracy
                </p>
              </div>

              <div className="space-y-4 text-muted-foreground font-inter">
                <p className="leading-relaxed">
                  Counterfeiting is not a retail problem. It is a systemic failure of 
                  global trade infrastructure. Current solutions rely on reactive measures: 
                  labels that can be copied, databases that can be compromised, manual 
                  inspections that cannot scale.
                </p>
                <p className="leading-relaxed">
                  The result: brands lose revenue, consumers lose trust, and the 
                  counterfeit economy continues to grow unchecked.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
                <div>
                  <div className="font-syne text-2xl font-semibold text-foreground">3.3%</div>
                  <p className="text-muted-foreground text-sm font-inter mt-1">of global trade</p>
                </div>
                <div>
                  <div className="font-syne text-2xl font-semibold text-foreground">2.5M+</div>
                  <p className="text-muted-foreground text-sm font-inter mt-1">jobs lost annually</p>
                </div>
                <div>
                  <div className="font-syne text-2xl font-semibold text-foreground">100+</div>
                  <p className="text-muted-foreground text-sm font-inter mt-1">industries affected</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Solution side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="border-gradient rounded-lg p-10 bg-card/50 backdrop-blur-sm relative overflow-hidden">
              {/* Glow effect */}
              <div 
                className="absolute top-0 right-0 w-40 h-40 opacity-20"
                style={{
                  background: "radial-gradient(circle, hsl(40 30% 65%) 0%, transparent 70%)"
                }}
              />
              
              <h3 className="font-syne text-3xl font-semibold text-foreground mb-6 relative z-10">
                The Solution
              </h3>
              
              <div className="space-y-6 relative z-10">
                <p className="text-platinum-dim text-lg font-inter leading-relaxed">
                  Ayres Originals is building the only logical architectural response: 
                  automated, device-level authentication that operates at the infrastructure layer.
                </p>
                
                <ul className="space-y-4 text-muted-foreground font-inter">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne mt-2 flex-shrink-0" />
                    <span>Verification happens at the device level, not the database level</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne mt-2 flex-shrink-0" />
                    <span>Automation eliminates human bottlenecks and error</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne mt-2 flex-shrink-0" />
                    <span>Infrastructure-level deployment enables global interoperability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne mt-2 flex-shrink-0" />
                    <span>Scale without proportional cost increase</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
