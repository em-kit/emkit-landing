import { motion } from "framer-motion";
import { GitBranch, Sparkles, ClipboardList, Brain } from "lucide-react";

const features = [
  {
    icon: GitBranch,
    title: "Contextual 1-on-1s",
    tagline: "Never go into a meeting blind again.",
    description:
      "Sync your notes with real-time GitHub activity and Jira tickets. See exactly what your team member is working on, blocking, or shipping — all within your meeting scratchpad.",
  },
  {
    icon: ClipboardList,
    title: "The Evidence Ledger",
    tagline: "Performance reviews that write themselves.",
    description:
      "Capture \"evidence\" throughout the year. Tag a brilliant PR or a complex architectural decision as it happens. When review season hits, export a categorized summary of achievements in seconds.",
  },
  {
    icon: Sparkles,
    title: "Smart Daily Summaries",
    tagline: "Stop asking 'What's the status?'",
    description:
      "EM Kit scans recent GitHub commits and Jira updates to generate a daily digest. Enter your standups with a clear picture of progress and potential bottlenecks.",
  },
  {
    icon: Brain,
    title: "AI-Assisted Insights",
    tagline: "Focus on the signal, ignore the noise.",
    description:
      "Let local AI help you categorize feedback, summarize long threads, and identify action items from your notes so nothing falls through the cracks.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-mono text-sm tracking-widest text-primary uppercase mb-4">
            Features
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Built for the way you actually work.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            People management for tech leads — built with the speed and simplicity you expect from developer tools.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          {features.map((feature, i) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:glow-accent"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary">
                <feature.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-card-foreground mb-2">{feature.title}</h3>
              <p className="text-primary text-sm font-medium mb-3 italic">{feature.tagline}</p>
              <p className="text-muted-foreground leading-relaxed text-sm">{feature.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
