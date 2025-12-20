import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Cpu, Award } from "lucide-react";

const Signals = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const signals = [
    {
      icon: Sparkles,
      category: "Partnerships",
      items: [
        "Active collaboration with global luxury stakeholders",
        "Enterprise pilot discussions with institutional partners",
        "Strategic alignment with authentication ecosystem players"
      ]
    },
    {
      icon: Cpu,
      category: "Technical Milestones",
      items: [
        "First device authentication automation technology developed",
        "Patent-pending verification methodology",
        "Scalable architecture validated for global deployment"
      ]
    },
    {
      icon: Award,
      category: "Recognition",
      items: [
        "Featured in deep tech and fintech ecosystems",
        "Engagement from tier-one investor networks",
        "Academic foundation at the London School of Economics"
      ]
    }
  ];

  return (
    <section id="signals" className="section-padding relative" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-20"
        >
          <span className="text-champagne text-sm tracking-[0.3em] uppercase font-inter">
            Signals
          </span>
          <h2 className="font-syne text-4xl md:text-5xl font-semibold mt-4 text-gradient-subtle">
            Building in Public, Operating in Private
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {signals.map((signal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 * index, ease: [0.4, 0, 0.2, 1] }}
              className="glass-card p-8 space-y-6"
            >
              <div className="glass rounded-2xl w-12 h-12 flex items-center justify-center">
                <signal.icon className="w-5 h-5 text-champagne" />
              </div>
              <h3 className="font-syne text-lg font-semibold text-champagne">
                {signal.category}
              </h3>
              <ul className="space-y-4">
                {signal.items.map((item, itemIndex) => (
                  <li 
                    key={itemIndex}
                    className="flex items-start gap-3 text-muted-foreground font-inter text-sm leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-platinum-dim mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="mt-20 glass-card p-10 text-center"
        >
          <p className="text-platinum-dim font-inter text-lg italic">
            "We focus on execution and measurable results."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Signals;