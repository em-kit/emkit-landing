import { motion } from "framer-motion";
import { Terminal, Wrench, Bot } from "lucide-react";

const integrations = [
  {
    name: "Claude Code",
    logo: "/claude.png",
  },
  {
    name: "Codex CLI",
    logo: "/openai.png",
  },
];

const EmKitCliSection = () => {
  return (
    <section id="ai" className="section-padding">
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

          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl text-card-foreground">
                Give your AI agents full context on your team.
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed max-w-xl">
                EM Kit exposes your local management data through a CLI and an MCP server — letting AI coding agents
                query your team's context, surface risks, and draft feedback without ever leaving your terminal.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://help.emkit.app/guides/emkit-cli"
                  className="inline-flex rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:scale-[1.02]"
                >
                  Read Docs
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-border bg-secondary/70 p-5">
                <div className="flex items-center gap-3 mb-3">
                  <Terminal className="h-5 w-5 text-primary" strokeWidth={1.5} />
                  <p className="text-sm font-semibold text-card-foreground">CLI</p>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Run <code className="text-card-foreground">emkit</code> commands to script lookups, create feedback, log notes, or manage issues — all backed by your local SQLite data.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-secondary/70 p-5">
                <div className="flex items-center gap-3 mb-3">
                  <Wrench className="h-5 w-5 text-primary" strokeWidth={1.5} />
                  <p className="text-sm font-semibold text-card-foreground">MCP Server</p>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Expose 39 tools via <code className="text-card-foreground">emkit mcp</code> so AI agents can read and write your EM Kit data through the standard Model Context Protocol.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-secondary/70 p-5">
                <div className="flex items-center gap-3 mb-3">
                  <Bot className="h-5 w-5 text-primary" strokeWidth={1.5} />
                  <p className="text-sm font-semibold text-card-foreground">Works with</p>
                </div>
                <div className="flex items-center gap-5">
                  {integrations.map((integration) => (
                    <div key={integration.name} className="flex items-center gap-2.5">
                      <img
                        src={integration.logo}
                        alt={integration.name}
                        className="h-7 w-7 rounded-md"
                      />
                      <span className="text-sm font-medium text-card-foreground">{integration.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EmKitCliSection;
