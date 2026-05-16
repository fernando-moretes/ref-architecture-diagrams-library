# Setup — Vercel + Cloudflare

Connect this repository to Vercel and expose it on `diagrams.moretes.com`.

## 1. Create the Vercel project

1. https://vercel.com → **Add New… → Project** → import
   `fernandofatech/architecture-diagrams-library`.
2. Framework: **Next.js** · Root directory: `frontend`.
3. Click **Deploy**.

## 2. Capture IDs

In **Settings → General**, copy `Project ID` (`VERCEL_PROJECT_ID`) and the
team/account ID (`VERCEL_ORG_ID`). Create a token at
https://vercel.com/account/tokens (`VERCEL_TOKEN`).

## 3. GitHub Actions secrets

```bash
gh secret set VERCEL_TOKEN      --body "<token>"
gh secret set VERCEL_ORG_ID     --body "<org-id>"
gh secret set VERCEL_PROJECT_ID --body "<project-id>"
```

## 4. Custom subdomain

Vercel: **Settings → Domains → Add** → `diagrams.moretes.com`.

## 5. Cloudflare DNS

Add a CNAME record:

- **Type:** CNAME
- **Name:** `diagrams`
- **Target:** `cname.vercel-dns.com`
- **Proxy status:** **DNS only** (gray cloud)

## 6. Verify

```bash
curl -I https://diagrams.moretes.com
```
