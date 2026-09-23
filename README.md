# KinetikUI Monorepo

Welcome to the KinetikUI workspace. This is a framework-agnostic design system built with Lit (Web Components), managed via Turborepo and pnpm, and visually driven by Style Dictionary design tokens.

## Prerequisites

- Node.js (v18 or higher)
- pnpm (Install globally via `npm install -g pnpm`)

## Getting Started

### Install Dependencies:
Run this at the root of the project to install all dependencies and link the workspace packages together.

```bash
pnpm install
```

### Start the Playground:
To spin up the Vite dev server and view your components in the browser:

```bash
pnpm --filter playground dev
```

Open http://localhost:5173 in your browser.

### GitHub Pages

After the first deployment, the playground is available at https://norinot.github.io/kinetikui/. On each push to `main`, the **Deploy playground** workflow builds and deploys it. You can also run the workflow manually from the **Actions** tab.

To enable deployment, set **Settings > Pages > Build and deployment > Source** to **GitHub Actions** in the repository.

## Common Commands

Because this is a monorepo, you will frequently use the `--filter` flag to run scripts inside specific packages without having to cd into their directories.

### Design Tokens (@kinetik/design-tokens):
Rebuilds the CSS variables from the JSON tokens.

```bash
pnpm --filter @kinetik/design-tokens build
```

### Core Components (@kinetik/core):
Runs the TypeScript compiler for the Web Components.

```bash
pnpm --filter @kinetik/core build
```

Run TypeScript in watch mode during active development:

```bash
pnpm --filter @kinetik/core dev
```

## Workflow: Adding a New Component

### Create the Folder:
Inside `packages/core/src/components/`, create a new folder (e.g., `input/`).

### Create the 3 Required Files:
- `input-base.ts`: The Headless LitElement containing logic and HTML (`part="base"`).
- `input.styles.ts`: The Lit css template containing the Kinetic Pop design rules.
- `kp-input.ts`: The custom element registration that ties the base and styles together.

### Export it:
Add the following to `packages/core/src/index.ts`:

```typescript
export * from './components/input/kp-input.js';
```

### Test it:
Add `<kp-input></kp-input>` to `apps/playground/index.html`, import it in `main.ts`, and run the playground!
