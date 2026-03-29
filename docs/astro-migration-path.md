# Gatsby To Astro Migration Path

## Recommendation

Migrate after the current visual and content refresh is stable, not before. The repo is small enough that migration is realistic, but there is no need to block visible improvements on a framework move.

## Why Astro Fits This Site

This site is primarily:

- A homepage
- A blog index
- Markdown blog posts
- A small set of shared presentational components
- Light interactivity

That makes it a strong fit for Astro's content-first model, static output, and selective hydration instead of a heavier app-oriented runtime.

## Migration Goals

- Remove Gatsby 3 and its aging plugin chain
- Simplify routing and content loading
- Reduce framework overhead and client-side JavaScript
- Keep the site mostly static and fast
- Preserve the refreshed visual design and content structure

## Proposed Migration Sequence

### Phase 1: Prepare The Current Gatsby Codebase

Before migrating:

- Finish the visual refresh
- Simplify legacy dependencies
- Move shared formatting and metadata logic into framework-agnostic utilities where possible
- Keep content and route structure clear and predictable

Why:

- It is easier to migrate a cleaner codebase than an old one mid-refactor.

### Phase 2: Create The Astro Skeleton

Create a new Astro app with:

- A base layout
- Shared components
- A content collection for blog posts
- A global style entry point

Suggested Astro structure:

- `src/layouts/BaseLayout.astro`
- `src/components/`
- `src/content/blog/`
- `src/pages/index.astro`
- `src/pages/blog/index.astro`
- `src/pages/blog/[...slug].astro`

### Phase 3: Migrate Content

Move blog posts from:

- `src/pages/blog/**/index.md`

Into:

- `src/content/blog/*.md`

At the same time:

- Normalize frontmatter
- Add stable slugs
- Add optional fields such as description, tags, and social image if useful

If the current nested folder structure is important for assets, preserve that deliberately instead of mirroring Gatsby's shape by default.

### Phase 4: Migrate Layout And Shared Components

Port these first:

- Header
- Navigation
- Footer
- Social links
- Blog list cards

Recommended approach:

- Rebuild static pieces as `.astro` components
- Only keep React where client interactivity is genuinely needed

This repo likely does not need much React after migration.

### Phase 5: Migrate Pages

Port the main routes:

1. Homepage
2. Blog index
3. Blog post template
4. 404 page
5. Newsletter page if it remains active

Guideline:

- Do not mechanically port Gatsby APIs
- Re-express each page in Astro using direct template logic and content queries

### Phase 6: Rebuild Metadata And SEO

Create a reusable metadata layer in Astro for:

- Title
- Description
- Canonical URL
- Open Graph tags
- Twitter tags
- Default social image

This should replace the current scattered `react-helmet` usage and make metadata easier to reason about.

### Phase 7: Replace Gatsby Features With Astro Equivalents

Replace:

- Gatsby page generation with Astro file-based routes
- Gatsby markdown sourcing with Astro content collections
- Gatsby image and plugin-driven patterns with Astro-native or direct build-time approaches
- Gatsby `Link` usage with standard links or Astro-supported patterns

### Phase 8: Verification And Cutover

Before cutover:

- Match existing route structure where it matters for SEO
- Validate canonical URLs and metadata
- Verify RSS, sitemap, redirects, and 404 behavior if added
- Compare Lighthouse and page weight before and after

## Repo Mapping

### Current Gatsby Pages

- `src/pages/index.js` -> `src/pages/index.astro`
- `src/pages/blog/index.js` -> `src/pages/blog/index.astro`
- `src/templates/blog-post.js` -> `src/pages/blog/[...slug].astro`
- `src/pages/404.js` -> `src/pages/404.astro`
- `src/pages/newsletter/index.js` -> `src/pages/newsletter.astro`

### Current Shared Components

- `src/components/Header/` -> `src/components/Header.astro`
- `src/components/Navigation/` -> `src/components/Navigation.astro`
- `src/components/Footer/` -> `src/components/Footer.astro`
- `src/components/SocialLinks/` -> `src/components/SocialLinks.astro`
- `src/components/BlogList/` -> `src/components/BlogList.astro`

### Current Content

- `src/pages/blog/**/index.md` -> `src/content/blog/*.md`

## Migration Risks

- Asset paths embedded in markdown posts may need cleanup
- Some CSS module assumptions may be better rewritten than copied
- Metadata behavior will change as Helmet is removed
- Any future interactive features should be intentionally hydrated, not automatically ported as React

## Recommended Order For This Repo

1. Finish the Gatsby-side refresh
2. Freeze content structure and design direction
3. Scaffold the Astro app
4. Port shared layout and blog content
5. Verify parity
6. Cut over once the Astro version is clearly simpler and faster

## Definition Of Done

The Astro migration is complete when:

- All current routes are available
- Blog posts render from Astro content collections
- Metadata is centralized
- The homepage and blog preserve the refreshed design language
- The build works on a current Node runtime without legacy compatibility flags
