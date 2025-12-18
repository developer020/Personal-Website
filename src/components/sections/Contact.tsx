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
          background: "linear-gradient(180deg, transparent 0%, hsl(0 0% 6%) 30%, hsl(0 0% 6%) 70%, hsl(0 0% 4%) 100%)"
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
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-inter text-muted-foreground">Name</label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-secondary/50 border-border focus:border-champagne transition-colors"
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
                  className="bg-secondary/50 border-border focus:border-champagne transition-colors"
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
                  className="bg-secondary/50 border-border focus:border-champagne transition-colors"
                  placeholder="Company or fund name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-inter text-muted-foreground">Inquiry Type</label>
                <select
                  required
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="w-full h-10 px-3 rounded-md bg-secondary/50 border border-border text-foreground font-inter text-sm focus:border-champagne transition-colors outline-none"
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
                className="bg-secondary/50 border-border focus:border-champagne transition-colors min-h-[150px] resize-none"
                placeholder="Tell us about your interest in Ayres Originals..."
              />
            </div>

            <Button 
              type="submit" 
              variant="champagne" 
              size="xl" 
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>

          {/* Additional contact options */}
          <div className="mt-12 pt-12 border-t border-border">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="https://calendly.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-champagne transition-colors font-inter text-sm"
              >
                <Calendar className="w-4 h-4" />
                Schedule a call
              </a>
              <span className="hidden sm:block text-border">|</span>
              <a 
                href="https://linkedin.com/in/zamzamali" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-champagne transition-colors font-inter text-sm"
              >
                <Linkedin className="w-4 h-4" />
                Connect on LinkedIn
              </a>
              <span className="hidden sm:block text-border">|</span>
              <a 
                href="mailto:contact@ayresoriginals.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-champagne transition-colors font-inter text-sm"
              >
                <Mail className="w-4 h-4" />
                Direct email
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
