import { useEffect } from "react";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";
import step1 from "@/assets/install-step-1.png";
import step2 from "@/assets/install-step-2.png";
import step3 from "@/assets/install-step-3.png";
import { GITHUB_RELEASES_URL } from "@/lib/constants";
import FooterSection from "@/components/FooterSection";

const steps = [
  {
    image: step1,
    alt: "Open EM Kit DMG from Downloads folder",
    caption: (
      <>
        Open <strong className="text-foreground">EMKit.dmg</strong> from
        <br />
        your <strong className="text-foreground">Downloads</strong> folder
      </>
    ),
  },
  {
    image: step2,
    alt: "Drag EM Kit icon into Applications folder",
    caption: (
      <>
        Drag the <strong className="text-foreground">EM Kit</strong> icon into
        <br />
        your <strong className="text-foreground">Applications</strong> folder
      </>
    ),
  },
  {
    image: step3,
    alt: "Open EM Kit from Applications folder",
    caption: (
      <>
        Open the <strong className="text-foreground">EM Kit</strong> app from
        <br />
        your <strong className="text-foreground">Applications</strong> folder
      </>
    ),
  },
];

const Download = () => {
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(
          "https://api.github.com/repos/em-kit/emkit-releases/releases/latest",
        );
        if (!res.ok) throw new Error(`GitHub API ${res.status}`);
        const data = (await res.json()) as {
          assets?: { name: string; browser_download_url: string }[];
        };
        const dmg =
          data.assets?.find((a) => /arm64.*\.dmg$/i.test(a.name)) ??
          data.assets?.find((a) => /\.dmg$/i.test(a.name));
        if (cancelled) return;
        window.location.href = dmg?.browser_download_url ?? GITHUB_RELEASES_URL;
      } catch {
        if (cancelled) return;
        window.location.href = GITHUB_RELEASES_URL;
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <main className="min-h-screen">
      <header className="relative overflow-hidden">
        <nav className="relative z-10 flex items-center justify-between px-6 py-5 md:px-12 lg:px-24">
          <a href="/">
            <img src={logo} alt="EM Kit" className="h-12 w-12" />
          </a>
          <a
            href="/download"
            className="rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background transition-colors hover:bg-foreground/85"
          >
            Download
          </a>
        </nav>

        <div className="relative z-10 mx-auto max-w-5xl px-6 pt-16 pb-12 text-center md:pt-24 md:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-foreground" />
              Download started
            </div>
            <h1 className="font-serif text-4xl leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
              Thanks for downloading!
              <br />
              Just a few steps left
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Your download will begin automatically. If it didn't start,{" "}
              <a
                href={GITHUB_RELEASES_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline underline-offset-4 hover:no-underline"
              >
                download EM Kit manually
              </a>
              .
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 grid gap-10 md:mt-20 md:grid-cols-3 md:gap-6"
          >
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="relative w-full">
                  <span className="absolute -top-4 left-1/2 z-10 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full bg-foreground text-sm font-semibold text-background shadow-warm">
                    {i + 1}
                  </span>
                  <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-warm">
                    <img
                      src={step.image}
                      alt={step.alt}
                      className="block w-full"
                    />
                  </div>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  {step.caption}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </header>

      <FooterSection />
    </main>
  );
};

export default Download;
