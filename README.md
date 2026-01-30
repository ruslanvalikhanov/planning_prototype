# Prototype Website

A modern web application prototype for user testing, built with Vite + Vue.js and deployed to GitHub Pages.

## Getting Started

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:5173](http://localhost:5173) in your browser to see your prototype.

## Development

- Edit `src/components/LoginPage.vue` to modify the login page
- Add new components in the `src/components/` directory
- Global styles are in `src/style.css`

### Project Structure

```
prototype/
├── src/
│   ├── main.ts           # Vue app entry point
│   ├── App.vue           # Root Vue component with RouterView
│   ├── router/
│   │   └── index.ts      # Vue Router configuration
│   ├── views/
│   │   ├── TCPrototype.vue # TC variant view
│   │   └── ECPrototype.vue # EC variant view
│   ├── components/       # Vue components
│   │   └── LoginPage.vue # Login page component
│   ├── styles/
│   │   └── design-tokens.css # Design system tokens
│   └── style.css         # Global styles
├── public/
│   └── 404.html          # SPA fallback for GitHub Pages
├── index.html            # HTML entry point
├── vite.config.ts        # Vite configuration
└── package.json         # Dependencies and scripts
```

## Building for Production

Build the static site:
```bash
npm run build
```

The output will be in the `dist/` directory, ready for deployment.

## Deployment to GitHub Pages

1. Create a new repository on GitHub
2. Push your code to GitHub
3. Enable GitHub Pages in repository settings (select "GitHub Actions" as the source)
4. The workflow will automatically deploy when you push to the `main` branch

## Prototype Variants

The prototype supports two variants accessible via different routes:

- **TC Variant**: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/TC`
- **EC Variant**: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/EC`
- **Root**: Redirects to TC variant by default

Each variant can have different content while sharing the same design system and components.

## Sharing Your Prototype

Once deployed, share the GitHub Pages URL with your testers:
- TC Variant: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/TC`
- EC Variant: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/EC`

**Note**: If your repository is not at the root (e.g., `username.github.io/repo-name/`), you may need to update the `base` path in `vite.config.ts` to match your repository name.

## Tech Stack

- **Vite**: Fast build tool and dev server
- **Vue 3**: Progressive JavaScript framework
- **Vue Router**: Client-side routing for multiple prototype variants
- **TypeScript**: Type-safe development
- **GitHub Pages**: Free hosting for static sites
