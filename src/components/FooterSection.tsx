import logo from "@/assets/logo-white.svg";
import { GITHUB_RELEASES_URL } from "@/lib/constants";

const FooterSection = () => {
  return (
    <footer id="cta" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-12 lg:px-24">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl mb-4">
            Ready to upgrade your management stack?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md">
            Join hundreds of Engineering Managers who lead with context.
          </p>
          <a
            href={GITHUB_RELEASES_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="glow-accent rounded-xl bg-primary px-8 py-4 text-base font-bold text-primary-foreground transition-all hover:scale-105"
          >
            Get EM Kit for Desktop
          </a>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-border pt-8 sm:flex-row">
          <div className="flex items-center gap-3">
            <img src={logo} alt="EM Kit logo" className="h-4" />
          </div>
          <nav className="flex gap-6 text-sm text-muted-foreground">
            <a href="https://emkit-help.vercel.app" target="_blank" className="hover:text-foreground transition-colors">Documentation</a>
            <a href="https://emkit-help.vercel.app/terms-policy/privacy-policy/" target="_blank" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="https://emkit-help.vercel.app/terms-policy/terms-of-service" target="_blank" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="mailto:contact@emkit.app" className="hover:text-foreground transition-colors">Contact</a>
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
