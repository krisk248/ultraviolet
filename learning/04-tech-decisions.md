# Tech Decisions

Why this stack? What makes it good?

---

## The Stack

| Tech | Purpose |
|------|---------|
| Astro | Static site generator |
| MDX | Markdown + Components |
| Tailwind | Styling |
| Vue | Interactive components |
| Coolify | Self-hosted deployment |

---

## Why Astro?

### Zero JS by Default
Ships pure HTML. JavaScript only when needed. Result: **blazing fast**.

### Content Collections
Type-safe content. Schema validation. No broken frontmatter.

### Framework Agnostic
Use Vue, React, Svelte - whatever you want. Mix them.

### Built for Content
Blog, portfolio, docs - Astro's sweet spot. Not fighting the tool.

**Alternative considered**: Next.js
**Why not**: Overkill for static content. More complexity, same result.

---

## Why MDX?

### Markdown + Power
Write naturally, but embed components when needed.

```mdx
# Normal markdown

<InteractiveDemo />

More markdown...
```

### Content Collections
Astro validates your frontmatter. Catches errors at build time.

**Alternative considered**: Plain Markdown
**Why not**: Sometimes you need interactive elements.

---

## Why Tailwind?

### Speed
No context switching. Style in the HTML. Ship fast.

### Consistency
Design tokens built-in. Colors, spacing, typography - all consistent.

### Purging
Only ships CSS you actually use. Tiny bundles.

**Alternative considered**: Plain CSS, styled-components
**Why not**: Slower to write, harder to maintain.

---

## Why Vue (for components)?

### Familiarity
If you know it, use it. That's it.

### SFC
Single File Components. Template, script, style in one file. Clean.

### Partial Hydration
Astro only hydrates Vue components that need interactivity.

**Note**: Could easily swap for React or Svelte. Astro doesn't care.

---

## Why Coolify?

### Self-Hosted
Your server, your data. No vendor lock-in.

### Free
No monthly fees like Vercel/Netlify at scale.

### Simple
GitHub webhook → auto-deploy. Done.

### Full Control
SSL, domains, resources - you control everything.

**Alternative considered**: Vercel, Netlify
**Why not**: Free tiers have limits. Self-hosting is cheaper long-term.

---

## Why Static?

### Performance
No server rendering. CDN serves pre-built HTML. Instant loads.

### Security
No backend = no attack surface. Can't hack what doesn't exist.

### Cost
Host anywhere. S3, GitHub Pages, your own server. Pennies.

### Reliability
No database to crash. No server to go down. Just files.

---

## Trade-offs Accepted

| What We Lose | Why It's OK |
|--------------|-------------|
| Server-side logic | Don't need it for portfolio |
| Real-time data | Content doesn't change that often |
| Database | MDX files are the database |
| Comments system | Can add Giscus (GitHub-based) |

---

## Performance Result

```
Lighthouse Score: 100/100
First Paint: <1s
Bundle Size: ~50KB
Build Time: <10s
```

---

## Summary

**Philosophy**: Ship the simplest thing that works.

- Static over dynamic (when possible)
- Zero JS over framework JS
- Self-hosted over SaaS
- Simple over clever

This stack is boring. Boring is good. Boring works.
