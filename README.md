# Varun Shivaram Portfolio

A responsive React portfolio website for Varun Shivaram, designed with a dark interstellar visual style, purple accents, a starry sky background, subtle cursor smoke effects, and sections for profile, education, skills, experience, projects, and contact.

## Features

- Dark purple space-inspired theme with a fixed starry background
- Subtle cursor-reactive smoky/dust animation
- Responsive layout for desktop, tablet, and mobile
- Portfolio sections for profile, education, skills, experience, and projects
- Contact form that opens the visitor's email client with a prefilled message
- Personal links for LinkedIn, GitHub, and Codolio

## Tech Stack

- React
- Vite
- CSS
- pnpm

## Getting Started

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Build for production:

```bash
pnpm build
```

Preview the production build:

```bash
pnpm preview
```

Run the production server locally:

```bash
pnpm build
pnpm start
```

## Project Structure

```text
public/assets/   Static images used by the portfolio
src/App.jsx      Main portfolio page and content
src/index.css    Global styles, responsive layout, and animations
src/main.jsx     React entry point
```

## Contact

- Email: varunshivaram2024@gmail.com
- LinkedIn: https://www.linkedin.com/in/varun-shivaram-32538132b/
- GitHub: https://github.com/varunshivaram56
- Codolio: https://codolio.com/profile/VarunShivaram

## Azure App Service Deployment

This project is prepared for Azure App Service by serving the Vite build output from `server.js`.

- Build command: `pnpm install --frozen-lockfile && pnpm build`
- Startup command: `npm start`
- Runtime: `Node 20 LTS`

The repository also includes a GitHub Actions workflow at `.github/workflows/azure-webapp.yml`.
To use it, create these GitHub repository secrets:

- `AZURE_WEBAPP_NAME`
- `AZURE_WEBAPP_PUBLISH_PROFILE`

When connecting GitHub from Azure App Service Deployment Center, choose `Use available workflow`.
This workflow expects publish-profile based deployment and does not require `azure/login` or `AZURE_CREDENTIALS`.
