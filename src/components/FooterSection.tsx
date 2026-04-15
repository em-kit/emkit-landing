import logo from "@/assets/logo.png";
import { GITHUB_RELEASES_URL } from "@/lib/constants";

const FooterSection = () => {
  return (
    <footer id="cta">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-12 lg:px-24">
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
                href={GITHUB_RELEASES_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-foreground px-7 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/85"
              >
                Download for macOS
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-border pt-8 sm:flex-row">
          <div className="flex items-center gap-3">
            <img src={logo} alt="EM Kit logo" className="h-8" />
          </div>
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="https://help.emkit.app" target="_blank" className="hover:text-foreground transition-colors">Documentation</a>
            <a href="https://help.emkit.app/terms-policy/privacy-policy/" target="_blank" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="https://help.emkit.app/terms-policy/terms-of-service" target="_blank" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="mailto:contact@emkit.app" className="hover:text-foreground transition-colors">Contact</a>
            <a href="https://discord.com/invite/W6unmDxt" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Discord</a>
          </nav>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} EM Kit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
