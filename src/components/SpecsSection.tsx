import { motion } from "framer-motion";
import { Monitor, Plug, Database, Shield } from "lucide-react";

const specs = [
  { icon: Monitor, label: "Built for", value: "macOS, Windows, Linux (Electron)" },
  { icon: Plug, label: "Integrations", value: "GitHub (OAuth/PAT), Jira (Cloud/On-prem)" },
  { icon: Database, label: "Storage", value: "Local SQLite DB + Markdown files" },
  { icon: Shield, label: "Security", value: "100% data residency on your hardware" },
];

const SpecsSection = () => {
  return (
    <section id="specs" className="section-padding">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="font-mono text-sm tracking-widest text-primary uppercase mb-4">
            Technical Specifications
          </p>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-foreground">
            Under the hood
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {specs.map((spec) => (
            <div key={spec.label} className="rounded-xl border border-border bg-card p-6 text-center">
              <spec.icon className="mx-auto h-6 w-6 text-primary mb-3" strokeWidth={1.5} />
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">{spec.label}</p>
              <p className="text-sm font-semibold text-card-foreground">{spec.value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SpecsSection;
