import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    type: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message received",
      description: "Thank you for reaching out. We will respond within 48 hours.",
    });
    
    setFormData({ name: "", email: "", organization: "", type: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      {/* Background gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at bottom center, hsl(220 15% 10%) 0%, hsl(220 15% 6%) 70%)"
        }}
      />

      <div className="container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-16"
        >
          <span className="text-champagne text-sm tracking-[0.3em] uppercase font-inter">
            Contact
          </span>
          <h2 className="font-syne text-4xl md:text-5xl font-semibold mt-4 text-gradient-subtle">
            For Serious Inquiries
          </h2>
          <p className="text-muted-foreground font-inter mt-6 max-w-xl mx-auto">
            This form is for investors, grant providers, fellowship committees, 
            and strategic partners. Response within 48 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-card p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-inter text-muted-foreground">Name</label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-secondary/50 border-border focus:border-champagne transition-colors rounded-xl h-12"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-inter text-muted-foreground">Email</label>
                  <Input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-secondary/50 border-border focus:border-champagne transition-colors rounded-xl h-12"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-inter text-muted-foreground">Organization</label>
                  <Input
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="bg-secondary/50 border-border focus:border-champagne transition-colors rounded-xl h-12"
                    placeholder="Company or fund name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-inter text-muted-foreground">Inquiry Type</label>
                  <select
                    required
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full h-12 px-4 rounded-xl bg-secondary/50 border border-border text-foreground font-inter text-sm focus:border-champagne transition-colors outline-none"
                  >
                    <option value="" className="bg-background">Select type</option>
                    <option value="investor" className="bg-background">Investor</option>
                    <option value="grant" className="bg-background">Grant Provider</option>
                    <option value="fellowship" className="bg-background">Fellowship Committee</option>
                    <option value="partner" className="bg-background">Strategic Partner</option>
                    <option value="other" className="bg-background">Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-inter text-muted-foreground">Message</label>
                <Textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-secondary/50 border-border focus:border-champagne transition-colors min-h-[150px] resize-none rounded-xl"
                  placeholder="Tell us about your interest in Ayres Originals..."
                />
              </div>

              <Button 
                type="submit" 
                variant="champagne" 
                size="xl" 
                className="w-full rounded-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Additional contact options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {[
              { href: "https://calendly.com", icon: Calendar, label: "Schedule a call" },
              { href: "https://linkedin.com/in/zamzamali", icon: Linkedin, label: "Connect on LinkedIn" },
              { href: "mailto:contact@ayresoriginals.com", icon: Mail, label: "Direct email" },
            ].map((item, index) => (
              <a 
                key={index}
                href={item.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass rounded-full px-6 py-3 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-inter text-sm"
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;