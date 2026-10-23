# Topline Srbije

### Multilingual HVAC Service Platform for the Serbian Market

**A business-driven web platform connecting professional HVAC services with customers through localized content, search-oriented architecture, and intuitive service discovery.**

🌐 **[Live Website](https://topline-srbije.com)**

---

## Overview

**Topline Srbije** is a commercial web platform developed for an HVAC engineering and maintenance business operating in Serbia.

The application serves as a digital touchpoint between customers and professional service providers, covering heating systems, air conditioning, heat pumps, and gas boilers.

Rather than functioning as a conventional landing page, the platform combines **technical service information, multilingual accessibility, and SEO-oriented content architecture** to support customer acquisition and establish trust in a specialized engineering market.

The project demonstrates a pragmatic approach to building business-focused web applications, balancing technical architecture, content discoverability, maintainability, and user experience.

## Key Features

- **Multilingual Experience** — Serbian and Russian localization powered by `next-intl`, with locale-aware routing, translated interfaces, and language-specific content.
- **SEO-Oriented Architecture** — Dedicated service routes, dynamically generated localized metadata, and search-focused content organization.
- **Service Discovery** — Structured, information-rich pages covering heating solutions, gas boilers, heat pumps, and air conditioning systems.
- **Responsive Interface** — Adaptive navigation and layouts designed for desktop and mobile experiences.
- **Reusable Component Architecture** — Shared layout components, consistent styling, and composable UI elements supporting maintainability.
- **Customer Engagement** — Accessible business contact information and interactive contact-copy functionality designed to simplify customer inquiries.
- **Optimized Image Handling** — Integration with Next.js image components for displaying technical illustrations and service-related visuals.

## Tech Stack

| Category | Technologies |
|---|---|
| Framework | Next.js 14, App Router |
| Frontend | React 18, TypeScript |
| Internationalization | next-intl |
| Styling | Tailwind CSS, Flowbite React |
| Rendering | Next.js Server Components, Static Generation |
| SEO | Next.js Metadata API, Localized Metadata |
| Image Handling | Next.js Image |

## Engineering Approach

The architecture prioritizes **clear separation of responsibilities, reusable UI composition, and localized content delivery**.

### Server-First Rendering

Built around the Next.js App Router, the application leverages server-side rendering capabilities and static generation for supported locales, keeping content-focused pages aligned with search engine discovery requirements.

### Internationalization by Design

Localization is integrated into routing and application structure rather than treated as a presentation-layer afterthought.

Locale-aware middleware, translation resources, and language-specific metadata enable the platform to address both Serbian-speaking and Russian-speaking audiences.

### Search-Oriented Information Architecture

Individual HVAC service categories are represented by dedicated routes with localized page titles and descriptions.

This structure makes technical content easier to navigate and provides a foundation for targeted organic search acquisition.

### Maintainable UI Composition

Reusable page sections, image components, and shared navigation patterns establish a consistent interface while reducing duplication across content-heavy pages.

Client-side interactivity is introduced for features such as navigation and contact interactions, while the framework's server-rendering capabilities support the core content experience.

## Business Value

Topline Srbije demonstrates how frontend engineering can support practical business objectives beyond visual presentation.

The platform is designed to:

- Improve discoverability of specialized HVAC services.
- Reach customers across multiple language audiences.
- Explain technically complex services through structured educational content.
- Build credibility through a consistent digital presence.
- Simplify the journey from researching a service to contacting a professional.

The result is a practical example of **product-minded frontend development**, where architectural choices are aligned with customer needs, service accessibility, and long-term business visibility.

## Getting Started

**Requirements:** Node.js 18.17+ and npm.

Clone the repository:

```bash
git clone https://github.com/dimkasss/teplo-serbii.git
cd teplo-serbii
```

Install dependencies:

```bash
npm ci
```

Start the development server:

```bash
npm run dev
```

Open **http://localhost:3000** in your browser.

For a
