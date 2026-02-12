/**
 * GitHub Releases URL for EM Kit desktop app downloads.
 * Override with VITE_GITHUB_RELEASES_URL when building (e.g. in Vercel env vars).
 */
export const GITHUB_RELEASES_URL =
  import.meta.env.VITE_GITHUB_RELEASES_URL ??
  "https://github.com/arnauddb/emkit/releases";
