# Beyond Arc Website Starter

A configurable Astro static site template. Fork per client, edit one config file, deploy.

## Quick Start

```bash
# 1. Clone / fork this repo
git clone <repo-url> client-website
cd client-website

# 2. Install dependencies
npm install

# 3. Edit the config — this drives the entire site
#    Open src/site.config.ts and replace all placeholder values:
#    - Business name, tagline, email, location
#    - Colours, fonts
#    - Hero copy, services, about content
#    - Social links, newsletter URL

# 4. Replace the logo
#    Drop your client logo at public/logo.png (or .svg)
#    Optionally add public/og-image.png for social sharing
#    Optionally add public/headshot.jpg for the about page

# 5. Run locally
npm run dev
# Opens at http://localhost:4321

# 6. Build
npm run build
```

## Deploy to Cloudflare Pages

1. Push the repo to GitHub.
2. In the Cloudflare dashboard, go to **Workers & Pages > Create > Pages**.
3. Connect the GitHub repo.
4. Set build command: `npm run build`
5. Set output directory: `dist`
6. Deploy.

Or via CLI:

```bash
npx wrangler pages deploy dist
```

## File Structure

```
beyond-arc-starter/
  src/
    site.config.ts        # Single config file — drives everything
    layouts/
      BaseLayout.astro    # HTML shell, SEO, CSS vars, JSON-LD
    components/
      Header.astro        # Nav from config pages
      Footer.astro        # Links, email, socials from config
      Logo.astro          # Loads public/logo.png with fallback
      StarField.astro     # Deep space background (house style)
      ArcMotif.astro      # Signature arc decorative element
      ServiceCard.astro   # Glassmorphism service card
      ContactForm.astro   # Mailto form from config email
      NewsletterCTA.astro # Links to config newsletter (hidden if empty)
    pages/
      index.astro         # Home — hero, services, credibility, CTAs
      about.astro         # Founder bio, values, headshot placeholder
      services.astro      # Services, process, pricing note
      contact.astro       # Contact form, details, socials
      privacy.astro       # GDPR privacy policy template
    styles/
      global.css          # Design tokens, glassmorphism, utilities
  public/
    favicon.svg           # Placeholder — replace per client
    robots.txt            # Update sitemap URL
    logo.png              # DROP CLIENT LOGO HERE
  astro.config.mjs
  tailwind.config.mjs
  wrangler.toml           # Cloudflare Pages config
  tsconfig.json
  package.json
```

## Design System

- Dark space theme with glassmorphism cards
- Star field background with parallax layers
- Arc motif decorative elements
- Scroll reveal animations
- Accessible: skip links, focus rings, ARIA labels, 48px touch targets
- Reduced motion support
- SEO: meta tags, Open Graph, JSON-LD structured data
- All colours and fonts driven from `site.config.ts`

## Toggling Pages

Set any page to `false` in `siteConfig.pages` to remove it from navigation.
The `blog` page links to an external newsletter URL when enabled.
