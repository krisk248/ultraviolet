# Deployment Guide

## Coolify Setup

### Build Configuration

| Setting | Value |
|---------|-------|
| Build Command | `npm run build` |
| Install Command | `npm install` |
| Output Directory | `dist` |
| Branch | `main` |

### Environment

No environment variables needed for static site.

---

## Auto-Deploy with GitHub Webhook

### Step 1: Get Webhook URL from Coolify

1. Coolify Dashboard > Your App > Webhooks
2. Find **"Manual Git Webhooks"** section
3. Copy the URL (looks like `/webhooks/source/github/events/manual`)

**Important**: Do NOT use `/api/v1/deploy` - that needs Bearer token.

### Step 2: Set Secret in Coolify

1. Same Webhooks page
2. Find "GitHub Webhook Secret"
3. Generate secret: `openssl rand -hex 32`
4. Paste and save

### Step 3: Add Webhook to GitHub

1. GitHub repo > Settings > Webhooks > Add webhook
2. Configure:

```
Payload URL: [Your Coolify manual webhook URL]
Content type: application/json
Secret: [Same secret from Step 2]
Events: Just the push event
Active: Yes
```

### Step 4: Done

Every push to `main` now auto-deploys.

---

## Manual Deploy

If webhook fails, trigger manually in Coolify:

1. Dashboard > Your App
2. Click "Deploy" button

---

## Troubleshooting

| Error | Fix |
|-------|-----|
| "Unauthenticated" | Wrong URL. Use manual webhook, not `/api/v1/deploy` |
| Build fails | Run `npm run build` locally first |
| Old content | Clear Coolify cache, redeploy |
| 404 webhook | Check URL is correct, secret matches |

---

## Workflow

```
Write content locally
    ↓
npm run dev (preview)
    ↓
git add . && git commit -m "feat: new post"
    ↓
git push origin main
    ↓
GitHub webhook fires
    ↓
Coolify pulls, builds, deploys
    ↓
Live in ~2 minutes
```
