# Company UI

A shared React component library for all company applications.

Built with:

* React 19
* TypeScript
* Tailwind CSS v4
* Shadcn UI
* Radix UI
* tsup
* Changesets

This package is intended to be used by multiple Next.js applications.

---

# Requirements

* Node.js 22+
* npm 11+ (or pnpm 10+)
* React 19
* Next.js 16

---

# Project Structure

```text
src
├── components
│   ├── ui
│   ├── forms
│   ├── layout
│   └── navigation
│
├── hooks
├── lib
│   └── utils.ts
│
├── styles
│   └── theme.css
│
└── index.ts
```

---

# Install Dependencies

```bash
npm install
```

---

# Development

Build the package.

```bash
npm run build
```

Watch for changes.

```bash
npm run dev
```

---

# Using in a Next.js App (Local Development)

Inside your Next.js project:

```bash
npm install github:illarock/company-ui
```

or

```json
{
  "dependencies": {
    "@company/ui": "github:illarock/company-ui"
  }
}
```

Build the UI package after making changes.

```bash
cd company-ui

npm run build
```

Restart the Next.js dev server if the changes are not detected automatically.

---

# Using After Publishing

```bash
npm install @company/ui
```

Import components.

```tsx
import { Button } from "@company/ui";

export default function Home() {
  return <Button>Save</Button>;
}
```

Import the shared theme once.

```tsx
import "@company/ui/theme.css";
```

---

# Adding a New Component

Example: Button

```
src/components/ui/button.tsx
```

Export it.

```ts
// src/index.ts

export * from "./components/ui/button";
```

Build.

```bash
npm run build
```

---

# Adding a New Shadcn Component

Generate the component in a temporary Next.js project (or another workspace where the Shadcn CLI is configured).

Example:

```bash
npx shadcn@latest add dialog
```

Copy the generated files into:

```
src/components/ui
```

Update imports if needed.

Example:

```tsx
import { cn } from "../../lib/utils";
```

instead of

```tsx
import { cn } from "@/lib/utils";
```

If the component requires a new Radix package, install it.

Example:

```bash
npm install @radix-ui/react-dialog
```

Export the component from `src/index.ts`.

Build.

```bash
npm run build
```

---

# Build

```bash
npm run build
```

Output:

```
dist/
```

---

# Versioning

This project uses Changesets.

## Patch Release

Bug fixes.

```bash
npx changeset
```

Select:

```
patch
```

Examples:

* Button padding fix
* Input validation fix
* Dialog accessibility fix

---

## Minor Release

New features.

```bash
npx changeset
```

Select:

```
minor
```

Examples:

* Added Calendar
* Added Data Table
* Added Date Picker

---

## Major Release

Breaking changes.

```bash
npx changeset
```

Select:

```
major
```

Examples:

* Renamed Button props
* Removed deprecated components
* Changed public API

---

# Updating the Version

After creating one or more changesets:

```bash
npm run version
```

This updates:

* package.json
* CHANGELOG.md (if configured)
* lock file

Commit the changes.

```bash
git add .

git commit -m "chore: release"
```

---

# Publish

Publish using your configured registry (for example, GitHub Packages).

```bash
npm publish
```

or use your CI/CD workflow to publish automatically.

---

# Updating an Existing Next.js App

Install the latest version.

```bash
npm update @company/ui
```

or install a specific version.

```bash
npm install @company/ui@1.2.0
```

---

# Release Workflow

```
Create Component
        │
        ▼
Export in src/index.ts
        │
        ▼
npm run build
        │
        ▼
npx changeset
        │
        ▼
npm run version
        │
        ▼
Commit
        │
        ▼
Publish
        │
        ▼
Update Next.js Apps
```

---

# Best Practices

* Keep all shared components inside `company-ui`.
* Do not copy components into consuming applications.
* Export every public component from `src/index.ts`.
* Install Radix packages only when required by a component.
* Keep React as a peer dependency.
* Keep all shared design tokens in `theme.css`.
* Do not include Next.js-specific code (`app/`, `pages/`, API routes, middleware, or Server Actions) in this package.
