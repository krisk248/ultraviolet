# Writing Content

## Blog Posts

Create file: `src/content/blog/your-post.mdx`

### Required Frontmatter

```yaml
---
title: "Your Post Title"
description: "Short description for SEO"
date: 2024-11-26
tags: [tag1, tag2]
draft: false
---
```

### Optional Fields

```yaml
image: /blog/cover.png
```

### Write Your Content

After frontmatter, just write markdown:

```markdown
# Heading

Your content here. Use code blocks:

\`\`\`python
print("hello")
\`\`\`
```

---

## Projects

Create file: `src/content/projects/your-project.mdx`

### Required Frontmatter

```yaml
---
title: Project Name
description: What it does
category: security  # options: security, 3d-printing, electronics, python, ai
image: /projects/your-image.png
tags: [Python, Security]
date: 2024-11-26
---
```

### Optional Fields

```yaml
github: https://github.com/you/repo
demo: https://your-demo.com
featured: true  # shows on homepage
```

---

## Interactive Elements (MDX)

MDX = Markdown + Components. You can embed Vue/React components.

### Code Blocks with Syntax Highlighting

````markdown
```bash
npm run dev
```
````

### Callouts (if you add a component)

```jsx
<Callout type="warning">
  This is important
</Callout>
```

### Embed HTML

```html
<details>
  <summary>Click to expand</summary>
  Hidden content here
</details>
```

---

## Quick Workflow

```bash
# 1. Create file
touch src/content/blog/new-post.mdx

# 2. Add frontmatter + content

# 3. Preview
npm run dev

# 4. Deploy
git add .
git commit -m "feat: add new blog post"
git push
# Webhook triggers auto-deploy
```

---

## Tips

- `draft: true` hides post from production
- Images go in `public/` folder
- Tags are case-sensitive
- Date format: YYYY-MM-DD
