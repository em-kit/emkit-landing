import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const SocialProofSection = () => {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Quote className="mx-auto mb-8 h-10 w-10 text-primary opacity-40" strokeWidth={1} />
          <blockquote className="font-serif text-2xl font-semibold leading-relaxed text-foreground sm:text-3xl lg:text-4xl">
            "A manager's output is the output of the organizational units under their supervision."
          </blockquote>
          <p className="mt-6 text-muted-foreground font-mono text-sm">
            — Andy Grove, High Output Management
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofSection;
