# Arcbizz - Technology Solutions & Innovation

A modern, responsive company website built with Next.js 16, showcasing Arcbizz's technology solutions, services, case studies, and blog content.

## 🚀 Overview

Arcbizz is a technology solutions company founded in 2023, delivering cutting-edge web applications and digital innovation. This website serves as the company's digital presence, featuring comprehensive information about services, team, case studies, and industry insights.

## ✨ Features

### Core Pages
- **Modern Landing Page** - Engaging hero section, client showcases, user stories, testimonials, and blog preview
- **About Us** - Company story, mission, values, and team members
- **Services** - Comprehensive service listings with dynamic detail pages, filtering, and category-based navigation
- **Industries** - Industry-specific solutions with detailed pages for each sector
- **Case Studies** - Showcase of successful projects and client work with filtering capabilities
- **Blog System** - Full-featured blog with categories, search, pagination, table of contents, reading progress, and detailed article pages
- **Careers** - Job listings, company culture, benefits information, and application process
- **Hire Developers** - Developer hiring services with type-specific pages and hiring process
- **Apply for Job** - Job application form with application process information
- **Our Team** - Team member profiles and company structure
- **Why Arcbizz** - Company differentiators and value propositions
- **Technologies** - Technology stack and expertise showcase
- **Contact Us** - Contact form and company information

### Legal & Policy Pages
- **Privacy Policy** - Data protection and privacy information
- **Terms of Service** - Terms and conditions
- **Cookie Policy** - Cookie usage and preferences

### Technical Features
- **SEO Optimized** - Comprehensive metadata, sitemap, robots.txt, and structured data (JSON-LD)
- **Dark Mode Support** - Theme switching with next-themes (light/dark/system preference)
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Performance Optimized** - React Compiler, image optimization (AVIF/WebP), and compression enabled
- **Dynamic Routing** - Dynamic routes for blog posts, case studies, services, industries, and developer types
- **Advanced Blog Features** - Article reading progress, table of contents, social sharing, related posts, newsletter CTA

## 🛠️ Tech Stack

### Core
- **Next.js 16.0.1** - React framework with App Router
- **React 19.2.0** - UI library
- **TypeScript 5** - Type safety
- **React Compiler** - Performance optimization

### Styling & UI
- **Tailwind CSS 4** - Utility-first CSS framework
- **shadcn/ui** - UI component library (Radix UI primitives)
- **Lucide React** - Icon library
- **next-themes** - Theme management

### UI Components (Radix UI)
- Accordion, Alert Dialog, Aspect Ratio, Avatar
- Dialog, Drawer (Vaul), Dropdown Menu, Hover Card
- Label, Menubar, Navigation Menu, Popover
- Progress, Radio Group, Scroll Area, Select
- Separator, Sheet, Tabs, Tooltip

### Additional Libraries
- **date-fns** (v4.1.0) - Date formatting and manipulation
- **react-slick** (v0.31.0) - Carousel/slider component
- **slick-carousel** (v1.8.1) - Carousel styles
- **sonner** (v2.0.7) - Toast notifications
- **cmdk** (v1.1.1) - Command menu component
- **vaul** (v1.1.2) - Drawer component
- **react-day-picker** (v9.11.1) - Date picker component
- **class-variance-authority** (v0.7.1) - Component variant management
- **clsx** (v2.1.1) - Conditional className utility
- **tailwind-merge** (v3.3.1) - Merge Tailwind CSS classes
- **tw-animate-css** (v1.4.0) - Additional Tailwind animations

## 📁 Project Structure

```
project/
├── public/                 # Static assets (images, media files)
├── src/
│   ├── app/               # Next.js App Router pages
│   │   ├── about-us/      # About Us page
│   │   ├── apply-for-job/ # Job application page
│   │   ├── blog/          # Blog pages
│   │   │   ├── [slug]/    # Dynamic blog post pages
│   │   │   └── category/[category]/ # Category pages
│   │   ├── careers/       # Careers page
│   │   ├── case-study/    # Case studies pages
│   │   │   └── [id]/      # Dynamic case study pages
│   │   ├── contact-us/    # Contact page
│   │   ├── cookie-policy/ # Cookie policy page
│   │   ├── hire-developers/ # Developer hiring pages
│   │   │   └── [type]/    # Dynamic developer type pages
│   │   ├── industries/    # Industries pages
│   │   │   └── [slug]/    # Dynamic industry pages
│   │   ├── our-team/      # Team page
│   │   ├── privacy-policy/ # Privacy policy page
│   │   ├── services/      # Services pages
│   │   │   └── [slug]/    # Dynamic service pages
│   │   ├── technologies/  # Technologies page
│   │   ├── terms-of-service/ # Terms of service page
│   │   ├── why-arcbizz/   # Why Arcbizz page
│   │   ├── favicon.ico    # Site favicon
│   │   ├── globals.css    # Global styles and CSS variables
│   │   ├── layout.tsx     # Root layout with metadata and theme
│   │   ├── page.tsx       # Landing page
│   │   ├── robots.ts      # Robots.txt generation
│   │   └── sitemap.ts     # Sitemap generation
│   ├── assets/            # Images and media files
│   │   └── images/        # Image assets organized by section
│   ├── components/
│   │   ├── customComponents/  # Custom page components
│   │   │   ├── aboutUs/   # About Us components
│   │   │   ├── applyForJob/ # Job application components
│   │   │   ├── blog/      # Blog listing components
│   │   │   ├── blog-detail/ # Blog detail page components
│   │   │   ├── careers/   # Careers components
│   │   │   ├── caseStudy/ # Case study components
│   │   │   ├── contactUs/ # Contact components
│   │   │   ├── footer/    # Footer component
│   │   │   ├── hireDevelopers/ # Developer hiring components
│   │   │   ├── industries/ # Industry components
│   │   │   ├── landingPage/ # Landing page components
│   │   │   ├── layout/    # Layout components (Header, CustomLayout)
│   │   │   ├── legal/     # Legal page components
│   │   │   ├── services/  # Service components
│   │   │   ├── slider/    # Slider component
│   │   │   ├── team/      # Team components
│   │   │   ├── technologies/ # Technology components
│   │   │   └── whyArcbizz/ # Why Arcbizz components
│   │   └── ui/            # shadcn/ui components
│   └── lib/               # Utility functions and helpers
│       ├── data/          # Static data files
│       │   ├── blog-data.ts
│       │   ├── case-studies-data.ts
│       │   ├── industries-data.ts
│       │   ├── service-data.ts
│       │   └── team-data.ts
│       ├── hooks/         # Custom React hooks
│       │   └── useViewport.ts
│       ├── types/         # TypeScript type definitions
│       │   └── types.ts
│       ├── utils/         # Utility functions
│       │   ├── blog-utils.ts
│       │   └── utils.ts
├── components.json        # shadcn/ui configuration
├── next.config.ts        # Next.js configuration
├── package.json          # Dependencies and scripts
├── postcss.config.mjs    # PostCSS configuration
└── tsconfig.json         # TypeScript configuration
```

## 🚦 Getting Started

### Prerequisites

- **Node.js** 18+ (recommended: 20+)
- **npm**, **yarn**, **pnpm**, or **bun**

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd project
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Set up environment variables (optional):
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_SITE_URL=https://arcbizz.com
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📜 Available Scripts

- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build for production
- `npm run start` - Start production server (after build)

## 🗺️ Available Routes

### Static Pages
- `/` - Landing page
- `/about-us` - About Us page
- `/careers` - Careers page
- `/contact-us` - Contact page
- `/technologies` - Technologies page
- `/our-team` - Team page
- `/why-arcbizz` - Why Arcbizz page
- `/apply-for-job` - Job application page
- `/hire-developers` - Developer hiring page
- `/privacy-policy` - Privacy policy
- `/terms-of-service` - Terms of service
- `/cookie-policy` - Cookie policy

### Dynamic Pages
- `/blog` - Blog listing page
- `/blog/[slug]` - Individual blog post
- `/blog/category/[category]` - Blog posts by category
- `/case-study` - Case studies listing
- `/case-study/[id]` - Individual case study
- `/services` - Services listing
- `/services/[slug]` - Individual service detail
- `/industries` - Industries listing
- `/industries/[slug]` - Individual industry detail
- `/hire-developers/[type]` - Developer type-specific page

## 🎨 Customization

### Adding New UI Components

This project uses [shadcn/ui](https://ui.shadcn.com). To add new components:

```bash
npx shadcn@latest add [component-name]
```

### Theme Configuration

The project uses `next-themes` for theme management. Theme configuration can be found in:
- `src/app/layout.tsx` - ThemeProvider setup with system preference detection
- `src/app/globals.css` - CSS variables for theming (light/dark mode)

### Font Configuration

The project uses **Inter** font from Google Fonts, configured in `src/app/layout.tsx` with CSS variable `--font-sans`.

### Adding Blog Posts

Blog posts are managed in `src/lib/data/blog-data.ts`. Add new posts following the existing structure with required fields like title, content, category, publishedAt, etc.

### Adding Case Studies

Case studies are managed in `src/lib/data/case-studies-data.ts`. Add new case studies following the existing structure.

### Adding Services

Services are managed in `src/lib/data/service-data.ts`. Add new services with comprehensive details including overview, features, process, technologies, and deliverables.

### Adding Industries

Industries are managed in `src/lib/data/industries-data.ts`. Add new industry pages with challenges, solutions, technologies, and use cases.

### Adding Team Members

Team members are managed in `src/lib/data/team-data.ts`. Add new team members with their roles, bio, and social links.

## 🔧 Configuration

### Next.js Config (`next.config.ts`)

- React Compiler enabled for performance optimization
- Image optimization configured (AVIF and WebP formats)
- Multiple device sizes and image sizes for responsive images
- Compression enabled
- Security headers configured (X-Powered-By removed)

### TypeScript Config (`tsconfig.json`)

- Path aliases: `@/*` maps to `./src/*`
- Strict mode enabled
- React JSX transform

### shadcn/ui Config (`components.json`)

- Style: "new-york"
- Base color: "neutral"
- CSS variables enabled
- Icon library: Lucide React
- React Server Components (RSC) enabled
- Path aliases configured for components, utils, lib, and hooks

### PostCSS Config (`postcss.config.mjs`)

- Tailwind CSS PostCSS plugin configured for Tailwind CSS v4

## 📱 SEO Features

- **Comprehensive Metadata** - Page-specific metadata for all routes
- **Open Graph & Twitter Cards** - Social media sharing optimization
- **Structured Data (JSON-LD)** - Organization and Website schema markup
- **Automatic Sitemap Generation** - Dynamic sitemap including:
  - Static pages (home, blog, services, industries, etc.)
  - Dynamic blog posts with priorities
  - Blog categories
  - Case studies
  - Industry pages
- **Robots.txt** - Search engine crawler configuration
- **Canonical URLs** - Prevent duplicate content issues
- **Search Action Schema** - Enables search functionality in search results

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

The easiest way to deploy is using the [Vercel Platform](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and configure the build

### Environment Variables

Set the following environment variables in your deployment platform:

- `NEXT_PUBLIC_SITE_URL` - Your production site URL (e.g., `https://arcbizz.com`)

## 📄 License

This project is private and proprietary.

## 👥 Team

Arcbizz - Founded in 2023

## 📞 Contact

For inquiries, visit the [Contact Us](/contact-us) page.

---

Built with ❤️ by Arcbizz
