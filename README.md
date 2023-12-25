# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

## Info

This repo is a boilerplate for new Remix hobby projects I will build. It includes the following out of the box:

- React v18.2.0
- Remix v2.4.1
  - RemixDevTools v3.6.2
    - See this [Youtube link](https://www.youtube.com/watch?v=VZH9cmeSwnc) for a walk-through along with a Remix Forge demo
    - Installed, but not used yet
- Tailwind CSS v3.4.0
  - The theme has been extended with the following:
    - `xs` as an additional breakpoint at 375px minimum
    - `Inter var` as the Font Family
  - Tailwind Prettier Plugin
  - Tailwind Debug Screens
  - Tailwind Typography
  - Tailwind Forms
  - Tailwind Aspect Ratio
  - Tailwind Container Queries
  - Tailwind Hero Icons
- Vite v5.0.10, with the following plugins:
  - Vite TSConfig Paths
  - MDX with Remark Frontmatter
  - SVGR
- Zod
  - Installed, but not used yet
- Prettier
- ESLint

## Development

First, fork the repo.

Install npm packages

```bash
npm install
```

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`
