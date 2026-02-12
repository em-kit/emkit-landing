import { motion } from "framer-motion";
import { Database, Lock, WifiOff, Plane } from "lucide-react";

const PrivacySection = () => {
  return (
    <section id="privacy" className="section-padding">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-border bg-card p-10 md:p-16 text-center"
        >
          <p className="font-mono text-sm tracking-widest text-primary uppercase mb-4">
            The Local-First Manifesto
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground mb-6">
            Your data. Your machine. Your peace of mind.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12">
            We believe management notes are the most sensitive data in a company. That's why EM Kit is <strong className="text-foreground">Local-First</strong>. No cloud. No account. No telemetry. You own your data, period.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-left">
            {[
              {
                icon: WifiOff,
                title: "No Accounts",
                desc: "Just download and start. No sign-up, no subscription, no cloud sync.",
              },
              {
                icon: Database,
                title: "SQLite Power",
                desc: "High-performance local database. Your data lives on your machine, always.",
              },
              {
                icon: Lock,
                title: "Markdown Core",
                desc: "Notes stored in open-standard Markdown. No vendor lock-in, ever.",
              },
              {
                icon: Plane,
                title: "Offline Ready",
                desc: "Works on a plane, in a basement, or anywhere you lead.",
              },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-start gap-3 rounded-xl bg-secondary p-6">
                <item.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                <h3 className="font-bold text-card-foreground text-sm">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacySection;
