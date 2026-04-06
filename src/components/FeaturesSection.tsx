import { motion } from "framer-motion";
import {
  Users,
  Award,
  CircleCheck,
  BookOpen,
  MessageSquareHeart,
  Route,
  BarChart3,
  Bot,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "One-on-Ones",
    tagline: "Never go into a meeting blind again.",
    description:
      "Prepare with real-time GitHub PRs and Jira tickets. Track agenda items, capture notes, assign action items, share feedback, and check-in on objectives — all in one place.",
  },
  {
    icon: Award,
    title: "Performance Reviews",
    tagline: "Performance reviews that write themselves.",
    description:
      "Create review periods, track status across your team, and assign ratings backed by real evidence. No more scrambling to remember six months of work when review season hits.",
  },
  {
    icon: CircleCheck,
    title: "Issues",
    tagline: "Your team's tasks, your way.",
    description:
      "Track workspace-wide issues with priorities, assignees, and due dates. Switch between list and kanban views, create sub-issues, and link action items directly from your 1:1s.",
  },
  {
    icon: BookOpen,
    title: "Daily Notes",
    tagline: "Stop asking 'What's the status?'",
    description:
      "Capture daily observations with a markdown editor. See your team's recent pull requests and Jira issues in context so you enter standups with a clear picture of progress.",
  },
  {
    icon: MessageSquareHeart,
    title: "Feedback",
    tagline: "Continuous feedback, not annual surprises.",
    description:
      "Log recognition and improvement feedback as it happens. Track what's been shared and what's pending, then deliver it naturally during your next 1:1.",
  },
  {
    icon: Route,
    title: "Career Path",
    tagline: "Map growth, not just titles.",
    description:
      "Define job levels and skills frameworks. Assess team members against expectations, compare progression with radar charts, and have data-driven career conversations.",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    tagline: "Focus on the signal, ignore the noise.",
    description:
      "Compare GitHub activity and Jira bug distribution across your team over custom date ranges. Spot trends, identify bottlenecks, and make informed decisions with real data.",
  },
  {
    icon: Bot,
    title: "Copilot",
    tagline: "Your AI-powered management advisor.",
    description:
      "Ask about team risks, feedback follow-ups, or performance review prep. Copilot analyzes your workspace data locally to surface insights you'd otherwise miss.",
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

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:glow-accent"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-secondary">
                <feature.icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-bold text-card-foreground mb-1.5">{feature.title}</h3>
              <p className="text-primary text-sm font-medium mb-2.5 italic">{feature.tagline}</p>
              <p className="text-muted-foreground leading-relaxed text-[13px]">{feature.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
