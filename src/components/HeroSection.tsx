import { motion } from "framer-motion";
import logo from "@/assets/logo-white.svg";
import hero from "@/assets/emkit-hero.png";
import { GITHUB_RELEASES_URL } from "@/lib/constants";

const HeroSection = () => {
  return (
    <header className="relative overflow-hidden">
      {/* Subtle grid bg */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(0 0% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 50%) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <nav className="relative z-10 flex items-center justify-between px-6 py-5 md:px-12 lg:px-24">
        <div className="flex items-center gap-3">
          <img src={logo} alt="EM Kit - Local-First Management Tool for Engineering Managers" className="h-8" />
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#pain-points" className="hover:text-foreground transition-colors">Problems</a>
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#privacy" className="hover:text-foreground transition-colors">Privacy</a>
          <a href="#specs" className="hover:text-foreground transition-colors">Specs</a>
        </div>
        <a
          href={GITHUB_RELEASES_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-opacity hover:opacity-90"
        >
          Download
        </a>
      </nav>

      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-24 pb-16 text-center md:pt-32 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-7xl leading-[1.1]">
            <span className="text-gradient">The Engineering Manager's</span>
            <br />
            <span className="text-gradient-accent">Second Brain.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed md:text-xl">
            Master your daily routines, track performance, and reclaim your time.
            <br className="hidden sm:block" />
            A local-first, privacy-focused command center designed specifically for <strong className="text-foreground">Engineering Leaders</strong>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href={GITHUB_RELEASES_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="glow-accent rounded-xl bg-primary px-8 py-4 text-base font-bold text-primary-foreground transition-all hover:scale-105"
          >
            Download for MacOS
          </a>
          <a
            href="#"
            className="rounded-xl border border-border px-8 py-4 text-base font-semibold text-foreground transition-all hover:border-primary/40 hover:bg-card"
          >
            View Documentation
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 md:mt-20"
        >
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-xl border border-border bg-card shadow-2xl shadow-black/20 glow-accent">
            {/* macOS-style title bar */}
            <div className="flex items-center gap-3 border-b border-border bg-muted/50 px-4 py-3">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex-1 flex justify-center">
                <span className="text-xs text-muted-foreground">EM Kit</span>
              </div>
              <div className="w-14" aria-hidden />
            </div>
            <img
              src={hero}
              alt="EM Kit desktop application showing contextual 1-on-1 meeting tool for developers with GitHub and Jira integration"
              className="w-full block"
            />
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default HeroSection;
