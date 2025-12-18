import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ayresLogo from "@/assets/ayres-logo.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "About", id: "about" },
    { label: "Vision", id: "vision" },
    { label: "Technology", id: "product" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl"
      >
        <div className={`glass-nav rounded-full px-4 py-3 flex items-center justify-between transition-all duration-500 ${
          isScrolled ? "shadow-lg" : ""
        }`}>
          {/* Logo */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 group"
          >
            <img 
              src={ayresLogo} 
              alt="Ayres Originals" 
              className="w-8 h-8 object-contain opacity-90 group-hover:opacity-100 transition-opacity"
            />
            <span className="font-syne text-sm font-semibold text-foreground hidden sm:block">
              Zamzam Ali
            </span>
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-muted-foreground hover:text-foreground text-sm font-inter px-4 py-2 rounded-full hover:bg-secondary/50 transition-all duration-300"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <Button 
              variant="platinum" 
              size="sm" 
              onClick={() => scrollTo("contact")}
              className="rounded-full px-6"
            >
              Get in Touch
            </Button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-foreground p-2 rounded-full hover:bg-secondary/50 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 pt-28 px-6 md:hidden"
          >
            <div className="glass-heavy rounded-3xl p-8 mx-auto max-w-sm">
              <div className="flex flex-col items-center gap-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className="text-foreground text-lg font-syne py-3 px-6 w-full text-center rounded-2xl hover:bg-secondary/50 transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
                <Button 
                  variant="champagne" 
                  size="lg" 
                  onClick={() => scrollTo("contact")} 
                  className="w-full mt-4 rounded-full"
                >
                  Get in Touch
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop for mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-background/60 backdrop-blur-sm md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;