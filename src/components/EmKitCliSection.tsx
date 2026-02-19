import { motion } from "framer-motion";
import { ClipboardList, Monitor, Plane, Database, Terminal, Sparkles } from "lucide-react";

const cliFeatures = [
  {
    icon: ClipboardList,
    title: "Single commands",
    description: "Run one-shot commands like `emkit member list --workspace-id <id>` for fast scripting and lookups.",
  },
  {
    icon: Monitor,
    title: "Interactive TUI",
    description: "Use `emkit` or `emkit tui` for an interactive terminal interface with autocomplete and history.",
  },
  {
    icon: Plane,
    title: "Automatic app runtime",
    description: "The CLI depends on the EM Kit desktop runtime and automatically launches EM Kit when needed.",
  },
  {
    icon: Database,
    title: "Local EM Kit domain",
    description: "Focused on local SQLite-backed EM Kit data and actions.",
  },
];

const EmKitCliSection = () => {
  return (
    <section id="cli" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-border bg-card/70 p-8 md:p-12"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              background:
                "radial-gradient(65% 60% at 0% 0%, hsl(217 100% 56% / 0.14), transparent 70%), radial-gradient(50% 55% at 100% 100%, hsl(217 100% 56% / 0.1), transparent 75%)",
            }}
          />

          <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
            <div>
              <p className="font-mono text-sm tracking-widest text-primary uppercase mb-4">
                EM Kit CLI
              </p>
              <div className="mb-4 inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1">
                <span className="font-mono text-[11px] font-semibold tracking-wider text-primary uppercase">Beta</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-card-foreground">
                A local-first command line interface for AI agents and advanced workflows.
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed max-w-xl">
                EM Kit now ships a standalone desktop CLI that exposes local EM Kit data and actions from the app
                domain, so agents and power users can move faster with terminal-native workflows. The CLI is currently
                in beta.
              </p>

              <p className="mt-7 text-sm text-muted-foreground">
                Install from EM Kit desktop:{" "}
                <strong className="text-card-foreground">Settings -&gt; Command Line Tool</strong>. Typical macOS
                location is <code className="text-card-foreground">~/.emkit</code>; make sure it is in your PATH.
              </p>

              <a
                href="https://emkit-help.vercel.app/command-line-tool-emkit-cli"
                className="mt-8 inline-flex rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:scale-[1.02]"
              >
                Read CLI Docs
              </a>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-border bg-secondary/70 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15">
                    <Terminal className="h-5 w-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-card-foreground">Install in-app</p>
                    <p className="text-xs text-muted-foreground">Settings -&gt; Command Line Tool</p>
                  </div>
                </div>
                <div className="mt-4 rounded-lg border border-border bg-card/60 px-3 py-2 font-mono text-xs text-muted-foreground">
                  ~/.emkit must be in PATH on macOS.
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-secondary/70 p-5">
                <div className="mb-3 flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <p className="text-sm font-semibold text-card-foreground">Designed for local reliability</p>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  The CLI requires the desktop app runtime. If EM Kit is not running, your first CLI command starts it
                  automatically so local data operations stay seamless.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.06 }}
          className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {cliFeatures.map((feature) => (
            <article
              key={feature.title}
              className="rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30"
            >
              <feature.icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
              <h3 className="mt-3 text-sm font-semibold text-card-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EmKitCliSection;
