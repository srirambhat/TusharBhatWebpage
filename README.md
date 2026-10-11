# Tushar Bhat Portfolio

A personal aerospace engineering portfolio built with React and Vite. It includes project and experience sections, a portfolio viewer, contact information, and downloadable resume and portfolio PDFs.

## Requirements

- Node.js
- npm

## Run locally

```sh
npm install
npm run dev
```

## Validate and build

```sh
npm run lint
npm run build
```

The production site is generated in `dist/`.

## Deployment

The repository includes Firebase Hosting configuration. Set up the Firebase project locally before deploying:

```sh
firebase use --add
npm run build
firebase deploy
```
