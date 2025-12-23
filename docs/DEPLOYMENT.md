# Deployment Guide (GitHub Pages)

This project is deployed to GitHub Pages using GitHub Actions.

## Workflow

The workflow is defined in `.github/workflows/pages.yml`. It runs on:

- Push to `main`
- Manual dispatch

## Base Path Configuration

The `vite.config.ts` handles the base path dynamically:

- Production: `/home-depot-component-library/`
- Development: `/`

If assets fail to load (404s), ensure the repository name matches the base path.
