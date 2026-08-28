# Fateha Hossain — Research & Engineering Portfolio

This repository contains the source code for the personal research and engineering portfolio of **Fateha Hossain Anushka**, a final-year Computer Science and Engineering student and Research Assistant at the Health Informatics Research Lab.

## Overview & Positioning

The portfolio presents a curated record of academic research, technical case studies, and engineering prototypes across three core pillars:
1. **Health Informatics Research**: Clinical biomarker modeling, medical image classification, and trustworthy validation.
2. **Reliable & Explainable Intelligent Systems**: SDN digital twins (ResiliNet), predictive infrastructure (ComputePulse), and feature attribution (SHAP).
3. **Backend & Full-Stack Engineering**: Scalable APIs (FastAPI, Spring Boot, Laravel), deterministic calculation engines, and responsive web platforms.

## Architecture

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Static Site Generation)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict mode, zero `any`)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with CSS variables and editorial scientific design tokens
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme**: Light & Dark mode via `next-themes` with full `prefers-reduced-motion` compliance
- **Data Model**: Strongly-typed static content layer in `src/content/` for complete reproducibility and zero runtime attack surface

## Project Structure

```text
├── public/
│   ├── projects/            # Technical architecture diagrams & visual assets
│   ├── fateha-hossain.jpg   # Portrait asset
│   └── og-image.svg         # Social sharing OpenGraph card
├── src/
│   ├── app/
│   │   ├── about/           # Detailed biographical & education page
│   │   ├── projects/[slug]/ # Dedicated technical case studies
│   │   ├── research/        # Comprehensive research roadmap & outputs
│   │   ├── globals.css      # Design tokens & accessibility utilities
│   │   ├── layout.tsx       # Root layout with SEO & JSON-LD schema
│   │   ├── page.tsx         # Structured homepage
│   │   ├── robots.ts        # SEO crawler rules
│   │   └── sitemap.ts       # Dynamic sitemap generation
│   ├── components/          # Modular UI components
│   └── content/             # Canonical TypeScript content data
│       ├── projects.ts      # Flagship case studies & evidence data
│       ├── research.ts      # Research direction & manuscript records
│       ├── site.ts          # Profile, experience, and capability matrices
│       └── types.ts         # Strict TypeScript interfaces
└── tests/                   # Automated schema, link, and content tests
```

## Local Development

### Prerequisites
- Node.js 18.x or higher
- npm 9.x or higher

### Setup

```bash
# Clone repository
git clone https://github.com/anushka06onu/portfolio-site.git
cd portfolio-site

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### Verification & Testing

```bash
# Run ESLint validation
npm run lint

# Run type check
npx tsc --noEmit

# Run unit and schema tests
npm test

# Build production bundle
npm run build
```

## Continuous Integration

GitHub Actions workflow is configured in `.github/workflows/ci.yml` to automatically validate linting, type safety, test suites, and production builds on every pull request and push to `main`.

## License

This project is open source and available under the [MIT License](LICENSE).
