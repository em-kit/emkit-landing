import { motion } from "framer-motion";
import { Brain, FileWarning, ShieldAlert } from "lucide-react";

const painPoints = [
  {
    icon: Brain,
    title: "The Context Gap",
    description:
      "You're in a 1-on-1, but you can't remember which PRs your dev finished this week. You spend the first 10 minutes digging through Jira instead of coaching.",
  },
  {
    icon: FileWarning,
    title: 'The "Performance Review" Amnesia',
    description:
      'Every six months, you spend days doing "archaeology" to find achievements from months ago. Great work gets forgotten.',
  },
  {
    icon: ShieldAlert,
    title: "The Privacy Risk",
    description:
      "Sensitive feedback, career growth notes, and team health data shouldn't live in a random cloud. Your team's data deserves better security.",
  },
];

const PainPointsSection = () => {
  return (
    <section id="pain-points" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-mono text-sm tracking-widest text-primary uppercase mb-4">
            The Problem
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Stop juggling tabs. Start leading humans.
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {painPoints.map((point, i) => (
            <motion.article
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary/30"
            >
              <point.icon className="h-8 w-8 text-primary mb-5" strokeWidth={1.5} />
              <h3 className="text-lg font-bold text-card-foreground mb-3">{point.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{point.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
