# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

## Info

This repo is a boilerplate for new Remix hobby projects I will build. It includes the following out of the box:

- Tailwind CSS, and the following plugins:
  - The theme has been extended with the following:
    - `xs` as an additional breakpoint at 375px minimum
    - `Inter var` as the Font Family
  - Tailwind Debug Screens
  - Tailwind Typography
  - Tailwind Forms
  - Tailwind Aspect Ratio
  - Tailwind Container Queries
  - Tailwind Hero Icons
    - An additional "xs" breakpoint at 375px minimum
    - `Inter var` Font Family
- Vite, with the following plugins:
  - Vite TSConfig Paths
  - MDX with Remark Frontmatter
  - SVGR
- Zod
- Prettier
- ESLint

To-do:

- Integrate with Sanity.io as the headless CMS solution
- Connecting it to a Hydrogen Storefront on the Shopify platform as my personal website.

## Development

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
