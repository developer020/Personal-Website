import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer className="py-12 border-t border-border" ref={ref}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className="container-narrow"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="font-syne text-lg font-semibold text-foreground">
              Zamzam Ali
            </span>
            <p className="text-muted-foreground text-sm font-inter mt-1">
              Founder & CEO, Ayres Originals
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm font-inter">
              © {new Date().getFullYear()} Zamzam Ali. All rights reserved.
            </p>
            <p className="text-muted-foreground/60 text-xs font-inter mt-1">
              Building the future of authenticated commerce.
            </p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
