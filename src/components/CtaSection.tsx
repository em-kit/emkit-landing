import { GITHUB_RELEASES_URL } from "@/lib/constants";

const CtaSection = () => {
  return (
    <section id="cta" className="mx-auto max-w-6xl px-6 pt-16 md:px-12 lg:px-24">
      <div className="relative rounded-3xl bg-accent p-3 sm:p-5 shadow-warm">
        <div className="rounded-2xl bg-card px-6 py-16 sm:px-12 sm:py-20">
          <div className="flex gap-2 mb-10">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex flex-col items-start text-left">
            <h2 className="font-serif text-4xl leading-[1.05] text-foreground sm:text-5xl lg:text-6xl mb-6 max-w-2xl">
              Ready to upgrade your management stack?
            </h2>
            <p className="text-muted-foreground text-base md:text-lg mb-9 max-w-lg">
              Join Engineering Managers who lead with context. Free to get started.
            </p>
            <a
              href="/download"
              className="rounded-full bg-foreground px-7 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/85"
            >
              Download for macOS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
