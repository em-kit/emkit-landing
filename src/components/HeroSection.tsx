import { motion } from "framer-motion";
import logo from "@/assets/logo.png";
import hero from "@/assets/emkit-hero.png";
import { GITHUB_RELEASES_URL } from "@/lib/constants";

const HeroSection = () => {
  return (
    <header className="relative overflow-hidden">
      <nav className="relative z-10 flex items-center justify-between px-6 py-5 md:px-12 lg:px-24">
        <div>
          <img src={logo} alt="EM Kit" className="h-12 w-12" />
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground" />
        <a
          href={GITHUB_RELEASES_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background transition-colors hover:bg-foreground/85"
        >
          Download
        </a>
      </nav>

      <div className="relative z-10 mx-auto max-w-4xl px-6 pt-20 pb-12 text-center md:pt-28 md:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-serif text-5xl leading-[1.05] text-foreground sm:text-6xl lg:text-7xl">
            The Engineering Manager's
            <br className="hidden sm:block" />
            Second Brain.
          </h1>
          <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Prepare 1:1s, write performance reviews, log feedback, and stay close to your team's
            work — all in a private, local-first desktop app.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
        >
          <a
            href={GITHUB_RELEASES_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-foreground px-7 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/85"
          >
            Download for macOS
          </a>
          <a
            href="https://help.emkit.app"
            target="_blank"
            className="rounded-full border border-border bg-background px-7 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            Read the docs
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 md:mt-20"
        >
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-border bg-card shadow-warm">
            <div className="flex items-center gap-2 border-b border-border bg-secondary/60 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            </div>
            <img
              src={hero}
              alt="EM Kit home — pastel category tiles for team directory, notes, issues, work log, performance reviews and analytics"
              className="block w-full"
            />
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default HeroSection;
