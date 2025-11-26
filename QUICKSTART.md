# Pfolio Quick Start Guide

## Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Development Server

The development server runs at `http://localhost:3000` with hot module reloading.

```bash
npm run dev
```

Visit these pages to see the working site:
- Homepage: http://localhost:3000/
- About: http://localhost:3000/about
- Projects: http://localhost:3000/projects
- Blog: http://localhost:3000/blog
- Contact: http://localhost:3000/contact
- Interactive: http://localhost:3000/interactive

## Adding Content

### Add a Project

Create a new file in `src/content/projects/your-project.mdx`:

```mdx
---
title: My Awesome Project
description: A brief description of the project
category: security  # or 3d-printing, electronics, python, ai
image: /projects/image.png
tags: [Python, Security, CLI]
github: https://github.com/user/repo
demo: https://demo.example.com
featured: true
date: 2024-11-25
---

# Project Title

Your content here using MDX format...
```

### Add a Blog Post

Create a new file in `src/content/blog/your-post.mdx`:

```mdx
---
title: My Blog Post
description: A brief description
date: 2024-11-25
tags: [Astro, Web Development]
draft: false  # Set to true to hide from listing
---

# Your Blog Post Title

Your content here using MDX format...

## Code Examples

```python
def hello():
    print("Hello, World!")
```
```

## Customization

### Theme Colors

Edit `tailwind.config.mjs` to customize:
- Primary colors (currently Sky Blue)
- Accent colors (currently Purple)
- Dark mode colors

### Navigation Links

Edit `src/components/layout/Navigation.astro` to add/remove nav items.

### Site Metadata

Edit `src/layouts/BaseLayout.astro` for:
- Default meta descriptions
- OG image
- Theme color
- Other SEO settings

### Homepage Content

Main homepage sections are in `src/pages/index.astro` and use components from:
- `src/components/home/Hero.astro`
- `src/components/home/Stats.astro`
- `src/components/home/FeaturedProjects.astro`
- `src/components/home/LatestPosts.astro`
- `src/components/home/CTA.astro`

## Key Features

### Dark/Light Mode
- Toggle with button in header (ThemeToggle.vue)
- Persists to localStorage
- Detects system preference on first visit

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Touch-friendly interface

### Interactive Components
- Vue 3 components with client:only hydration
- ThemeToggle for theme switching
- ContactForm with validation
- ProjectFilter for category filtering
- ThemePreview for color showcase

### SEO Optimized
- Meta tags on all pages
- Open Graph support
- Twitter cards
- Canonical URLs
- Semantic HTML

### Accessibility
- WCAG AA compliance
- Semantic HTML structure
- Proper heading hierarchy
- ARIA labels on interactive elements
- Keyboard navigation support

## Production Deployment

### Option 1: Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Option 2: Netlify

```bash
# Build locally
npm run build

# Deploy dist/ folder to Netlify
```

### Option 3: GitHub Pages

Update `astro.config.mjs`:
```javascript
export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/repository-name',
  // ... rest of config
});
```

## File Structure

```
src/
├── components/     # Reusable UI components
├── content/        # Projects and blog posts
├── layouts/        # Page layouts
├── pages/          # Astro page routes
└── styles/         # Global CSS
```

- Each folder in `src/pages/` becomes a route
- `src/content/` collections are available via `getCollection()`
- `.astro` files are Astro components
- `.vue` files are Vue 3 components

## Common Tasks

### Change Color Scheme
1. Open `tailwind.config.mjs`
2. Update color definitions in `extend.colors`
3. Rebuild with `npm run build`

### Add a New Page
1. Create `src/pages/new-page.astro`
2. Import `BaseLayout` and wrap content
3. Access at `/new-page`

### Add Social Links
1. Edit `src/components/layout/Footer.astro`
2. Add link with icon

### Update Stats Section
1. Edit `src/components/home/Stats.astro`
2. Change numbers and descriptions

## Troubleshooting

### Port 3000 already in use
```bash
# Kill the process
lsof -i :3000
kill -9 <PID>

# Or use a different port
npm run dev -- --port 3001
```

### Cache issues
```bash
# Clear Astro cache
rm -rf .astro

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Build fails
```bash
# Check for TypeScript errors
npm run check

# Validate Astro config
npx astro validate

# Try building in debug mode
npm run build -- --verbose
```

## Resources

- [Astro Documentation](https://docs.astro.build)
- [Vue 3 Documentation](https://vuejs.org)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [MDX Documentation](https://mdxjs.com)

## Support

For issues or questions:
1. Check the Astro docs
2. Review the component source code
3. Check browser console for errors
4. Review Astro build output for warnings

---

Happy building! 🚀
