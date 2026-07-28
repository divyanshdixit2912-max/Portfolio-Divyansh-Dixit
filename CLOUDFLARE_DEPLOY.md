Cloudflare Pages deployment notes

Required Pages project settings for this repo:

- Node version: 20.9.0 (or newer). The repo requires Node >= 20.9.0.
- Install command: npm ci --legacy-peer-deps
- Build command: npm run build
- Environment variables (set in Pages UI or the build command):
  - NODE_OPTIONS=--max-old-space-size=4096
  - NEXT_DISABLE_TURBOPACK=1
- Build output directory: leave default (do not use next export with the app/ router).

Steps to produce a deterministic build locally and on Pages:

1. Use Node 20.9.0:
   nvm install 20.9.0 && nvm use 20.9.0

2. Install dependencies and create the lockfile (run locally once):
   npm install --legacy-peer-deps
   git add package-lock.json && git commit -m "chore: add package-lock for deterministic installs" && git push

3. Build (locally or CI):
   NODE_OPTIONS=--max-old-space-size=4096 NEXT_DISABLE_TURBOPACK=1 npm run build

Notes and rationale:
- We pin Next, React, and React-DOM to stable tested versions to avoid "latest" surprises on the build agent.
- We disabled Turbopack for production builds to avoid Turbopack-related worker crashes seen in Pages logs.
- We raise Node memory to 4GB during build to avoid OOM crashes in the build worker.
- Commiting package-lock.json (recommended) makes installs deterministic and prevents bun from resolving different versions in Pages.

If the build still fails after these changes, paste the full Pages build log and I'll iterate further.
