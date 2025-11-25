# Implementation Plan: SPEC-PORTFOLIO-001

---
spec_id: SPEC-PORTFOLIO-001
version: 1.0.0
status: draft
created: 2025-11-25
estimated_hours: 12-16
---

## 1. Implementation Phases

### Phase 1: Project Setup and Foundation (2-3 hours)

#### 1.1 Initialize Astro Project

```bash
# Create new Astro project
npm create astro@latest pfolio -- --template minimal --typescript strict

# Add integrations
npx astro add vue tailwind mdx

# Install additional dependencies
npm install @fontsource/inter gsap
```

#### 1.2 Configure Project Structure

- [ ] Setup TypeScript configuration
- [ ] Configure Tailwind with custom theme colors
- [ ] Setup content collections for projects and blog
- [ ] Create base layout with header/footer
- [ ] Configure dark/light theme support

#### 1.3 Deliverables

| File | Description |
|------|-------------|
| `astro.config.mjs` | Astro configuration with integrations |
| `tailwind.config.mjs` | Tailwind theme customization |
| `tsconfig.json` | TypeScript configuration |
| `src/layouts/BaseLayout.astro` | Main layout wrapper |
| `src/components/layout/Header.astro` | Navigation header |
| `src/components/layout/Footer.astro` | Site footer |

---

### Phase 2: Homepage Development (2-3 hours)

#### 2.1 Hero Section

- [ ] Create animated hero with name and tagline
- [ ] Implement typewriter effect or text animation
- [ ] Add background visual effect (particles, gradient, or pattern)
- [ ] Add CTA buttons (View Projects, Contact)

#### 2.2 Homepage Sections

- [ ] Stats section (years experience, projects count, technologies)
- [ ] Featured projects carousel/grid (3-4 projects)
- [ ] Latest blog posts preview (2-3 posts)
- [ ] Call-to-action section

#### 2.3 Deliverables

| File | Description |
|------|-------------|
| `src/pages/index.astro` | Homepage |
| `src/components/home/Hero.astro` | Hero section |
| `src/components/home/Stats.astro` | Statistics display |
| `src/components/home/FeaturedProjects.astro` | Project highlights |
| `src/components/home/LatestPosts.astro` | Blog preview |
| `src/components/home/CTA.astro` | Call to action |

---

### Phase 3: Projects Section (2-3 hours)

#### 3.1 Project Listing Page

- [ ] Create project collection schema
- [ ] Build project card component
- [ ] Implement category filter (Vue component)
- [ ] Add smooth filtering transitions
- [ ] Create project grid layout

#### 3.2 Project Detail Pages

- [ ] Create project layout template
- [ ] Support MDX content with components
- [ ] Add project metadata display (tech stack, links)
- [ ] Implement image gallery if needed
- [ ] Add navigation to next/previous project

#### 3.3 Content Collection Schema

```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['security', '3d-printing', 'electronics', 'python', 'ai']),
    image: z.string(),
    tags: z.array(z.string()),
    github: z.string().optional(),
    demo: z.string().optional(),
    featured: z.boolean().default(false),
    date: z.date(),
  }),
});
```

#### 3.4 Deliverables

| File | Description |
|------|-------------|
| `src/content/config.ts` | Content collection schemas |
| `src/pages/projects/index.astro` | Projects listing |
| `src/pages/projects/[...slug].astro` | Dynamic project pages |
| `src/components/projects/ProjectCard.astro` | Project card |
| `src/components/projects/ProjectFilter.vue` | Category filter |
| `src/components/projects/ProjectGrid.astro` | Grid layout |
| `src/layouts/ProjectLayout.astro` | Project page layout |

---

### Phase 4: Blog Section (2-3 hours)

#### 4.1 Blog Listing Page

- [ ] Create blog collection schema
- [ ] Build blog card component
- [ ] Implement tag filtering
- [ ] Add pagination if needed
- [ ] Create blog list layout

#### 4.2 Blog Post Pages

- [ ] Create blog layout template
- [ ] Configure MDX with custom components
- [ ] Setup syntax highlighting (Shiki)
- [ ] Add reading time calculation
- [ ] Implement table of contents

#### 4.3 Content Collection Schema

```typescript
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});
```

#### 4.4 Deliverables

| File | Description |
|------|-------------|
| `src/pages/blog/index.astro` | Blog listing |
| `src/pages/blog/[...slug].astro` | Dynamic blog pages |
| `src/components/blog/BlogCard.astro` | Blog post card |
| `src/components/blog/BlogList.astro` | Post list |
| `src/components/blog/TableOfContents.astro` | TOC component |
| `src/layouts/BlogLayout.astro` | Blog post layout |

---

### Phase 5: About and Contact Pages (1-2 hours)

#### 5.1 About Page

- [ ] Professional journey timeline
- [ ] Skills visualization (progress bars, tags, or icons)
- [ ] Certifications/education section
- [ ] Personal interests/hobbies

#### 5.2 Contact Page

- [ ] Contact form with validation
- [ ] Social media links
- [ ] Resume/CV download button
- [ ] Optional: Map or location info

#### 5.3 Deliverables

| File | Description |
|------|-------------|
| `src/pages/about.astro` | About page |
| `src/pages/contact.astro` | Contact page |
| `src/components/about/Timeline.astro` | Career timeline |
| `src/components/about/Skills.astro` | Skills display |
| `src/components/contact/ContactForm.vue` | Form component |

---

### Phase 6: Interactive Playground (2-3 hours)

#### 6.1 Interactive Page Setup

- [ ] Create interactive page layout
- [ ] Setup Vue component mounting
- [ ] Create demo component structure

#### 6.2 Sample Interactive Components

- [ ] Theme preview component
- [ ] Code playground (basic)
- [ ] Tool demo components
- [ ] Animation showcase

#### 6.3 Deliverables

| File | Description |
|------|-------------|
| `src/pages/interactive.astro` | Interactive playground |
| `src/components/interactive/ThemeDemo.vue` | Theme switcher demo |
| `src/components/interactive/CodeDemo.vue` | Code example |
| `src/components/interactive/ToolDemo.vue` | Tool demonstration |

---

### Phase 7: Polish and Optimization (2 hours)

#### 7.1 Animations

- [ ] Scroll-triggered reveal animations
- [ ] Page transition effects
- [ ] Hover effects on cards/buttons
- [ ] Loading states

#### 7.2 Optimization

- [ ] Image optimization configuration
- [ ] Lazy loading implementation
- [ ] Bundle analysis and optimization
- [ ] Performance testing (Lighthouse)

#### 7.3 Final Touches

- [ ] 404 page design
- [ ] Favicon and meta images
- [ ] Sitemap generation
- [ ] robots.txt configuration
- [ ] Open Graph images

#### 7.4 Deliverables

| File | Description |
|------|-------------|
| `src/pages/404.astro` | Custom 404 page |
| `public/favicon.svg` | Site favicon |
| `public/og-image.png` | Open Graph image |

---

## 2. Technical Specifications

### 2.1 Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Astro | 4.x | Core framework |
| Vue | 3.4.x | Interactive components |
| Tailwind CSS | 3.4.x | Styling |
| TypeScript | 5.x | Type safety |
| MDX | 3.x | Content format |
| Shiki | Built-in | Code highlighting |
| GSAP | 3.x | Animations (optional) |

### 2.2 Color Theme

```javascript
// tailwind.config.mjs
colors: {
  primary: {
    50: '#f0f9ff',
    500: '#0ea5e9',
    900: '#0c4a6e',
  },
  accent: {
    500: '#8b5cf6',
  },
  dark: {
    bg: '#0f172a',
    card: '#1e293b',
    text: '#e2e8f0',
  },
}
```

### 2.3 File Organization

```
pfolio/
├── public/
│   ├── favicon.svg
│   ├── og-image.png
│   └── resume.pdf
├── src/
│   ├── components/
│   ├── content/
│   │   ├── projects/
│   │   │   ├── security-tool.mdx
│   │   │   └── 3d-project.mdx
│   │   └── blog/
│   │       └── first-post.mdx
│   ├── layouts/
│   ├── pages/
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

---

## 3. Testing Strategy

### 3.1 Manual Testing Checklist

- [ ] All pages render correctly
- [ ] Navigation works on all pages
- [ ] Theme toggle functions properly
- [ ] Project filtering works
- [ ] Blog posts render with syntax highlighting
- [ ] Interactive components are functional
- [ ] Contact form validates inputs
- [ ] Responsive design on mobile/tablet/desktop
- [ ] All links are functional
- [ ] Images load correctly

### 3.2 Automated Testing

- [ ] Lighthouse CI for performance regression
- [ ] Link checker for broken links
- [ ] HTML validation
- [ ] Accessibility audit (axe-core)

---

## 4. Deployment Strategy

### 4.1 Recommended: Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### 4.2 Alternative: Netlify

```bash
# Build command
npm run build

# Publish directory
dist/
```

### 4.3 Alternative: GitHub Pages

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## 5. Risk Mitigation

| Risk | Mitigation |
|------|------------|
| Complex Vue hydration | Use `client:only="vue"` for problematic components |
| Animation performance | Profile in Chrome DevTools, use CSS where possible |
| Large image sizes | Use Astro's `<Image />` component with optimization |
| MDX errors | Validate content in development before build |

---

## 6. Success Metrics

| Metric | Target |
|--------|--------|
| Lighthouse Performance | >= 90 |
| Lighthouse Accessibility | >= 90 |
| First Contentful Paint | < 1.5s |
| Time to Interactive | < 3s |
| Total Bundle Size | < 200KB (JS) |

---

## 7. Post-Implementation

### 7.1 Content Creation

After implementation, create initial content:

- [ ] 5-10 project entries with images
- [ ] 2-3 sample blog posts
- [ ] About page content
- [ ] Resume/CV upload

### 7.2 Ongoing Maintenance

- [ ] Add new projects as completed
- [ ] Write occasional blog posts
- [ ] Update skills and experience
- [ ] Monitor analytics
