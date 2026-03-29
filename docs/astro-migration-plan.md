# Astro Migration Plan

## Objective

Move the site from Gatsby 5 to Astro without changing the content model or visual direction more than necessary.

Success criteria:

- The site keeps the same public routes
- Existing blog posts continue to render correctly
- The current refreshed design language is preserved
- Metadata, social tags, and canonical URLs remain correct
- The build remains clean on the current Node target
- The Astro version is simpler than the Gatsby version, not just different

## Current Repo Shape

The current site consists of:

- Homepage: `src/pages/index.js`
- Blog index: `src/pages/blog/index.js`
- Blog post template: `src/templates/blog-post.js`
- 404 page: `src/pages/404.js`
- Newsletter page: `src/pages/newsletter/index.js`
- Shared components under `src/components/`
- Global styles under `src/layouts/`
- Markdown posts under `src/pages/blog/**/index.md`

The current Gatsby-specific pieces are:

- File-system sourcing via `gatsby-source-filesystem`
- Markdown transformation via `gatsby-transformer-remark`
- Image processing via `gatsby-plugin-sharp` and `gatsby-remark-images`
- Programmatic page creation in `gatsby-node.js`

## Migration Strategy

Do not attempt a blind one-shot rewrite, but do replace Gatsby in-place inside this repo rather than building a parallel sibling app.

Recommended execution model:

1. Replace the Gatsby app structure incrementally inside the current repo
2. Port content and shared styles first
3. Port pages next
4. Verify route parity and metadata continuously as pages are migrated
5. Remove Gatsby-specific files only after the Astro version is complete

This reduces repo sprawl while still keeping the migration disciplined.

## Proposed Astro Structure

Replace the existing app structure with Astro-native files in place.

Suggested target structure:

- `src/layouts/BaseLayout.astro`
- `src/components/`
- `src/content/blog/`
- `src/pages/index.astro`
- `src/pages/blog/index.astro`
- `src/pages/blog/[...slug].astro`
- `src/pages/404.astro`
- `src/styles/`

## Phase 1: Scaffold Astro

Goal:

- Create a runnable Astro app with the minimum integrations needed for this site.

Add:

- Astro core
- MDX
- Sitemap support
- React integration only if we later discover a component that actually needs it

Recommendation:

- Start without React integration unless a component actually needs it
- Adopt MDX from the start so the content layer does not need a second migration later

Deliverables:

- Astro app boots locally
- A basic layout renders
- Shared global CSS is wired up

## Phase 2: Migrate Shared Design System

Goal:

- Preserve the new visual design without carrying Gatsby abstractions over.

Port these as Astro components:

- Header
- Navigation
- Footer
- SocialLinks
- BlogList

Port these style assets:

- `src/layouts/main.css`
- `src/layouts/normalize.css`
- `src/layouts/fonts.css`
- Relevant component CSS modules

Guidance:

- Keep CSS mostly as-is at first
- Only rewrite styling where Astro naturally wants a simpler structure
- Prefer static Astro components over React ports

Deliverables:

- Shared shell renders in Astro
- Home and blog pages can use the same design language

## Phase 3: Migrate Content Model

Goal:

- Move blog content from Gatsby page-sourced markdown to Astro content collections.

Move:

- `src/pages/blog/**/index.md`

Into:

- `src/content/blog/*.mdx`

At migration time:

- Preserve slug values from current frontmatter `path`
- Preserve image assets used in posts
- Normalize frontmatter fields

Recommended frontmatter schema:

- `title`
- `date`
- `slug`
- `description` optional
- `tags` optional
- `socialImage` optional

Important constraint:

- Current routes must stay stable, especially `/blog/.../`

Deliverables:

- Astro content collection exists
- Every current post has a mapped Astro entry
- Route output matches the current public URL structure

## Phase 4: Rebuild Metadata Layer

Goal:

- Replace the current Gatsby `Head` + `Seo` setup with an Astro-native metadata API.

Current source:

- `src/components/Seo/index.js`

Astro target:

- `src/components/Seo.astro`

Requirements:

- Title
- Description
- Canonical URL
- Open Graph tags
- Twitter tags
- Default social image

Deliverables:

- Reusable Astro SEO component
- Page-level metadata parity for home, blog index, posts, newsletter, and 404

## Phase 5: Port Pages

### Homepage

Current:

- `src/pages/index.js`
- `src/pages/index.module.css`

Target:

- `src/pages/index.astro`

Port approach:

- Direct Astro page using current section structure
- Reuse static components and existing CSS

### Blog Index

Current:

- `src/pages/blog/index.js`
- `src/pages/blog/blog.module.css`

Target:

- `src/pages/blog/index.astro`

Port approach:

- Query Astro content collection
- Group posts by year in page logic
- Reuse BlogList component or fold list rendering directly into the page if simpler

### Blog Posts

Current:

- `src/templates/blog-post.js`
- `src/templates/blog-post.module.css`
- `gatsby-node.js`

Target:

- `src/pages/blog/[...slug].astro`

Port approach:

- Use Astro content collection entries
- Generate static paths from the collection
- Render post body using Astro’s Markdown pipeline

### 404 Page

Current:

- `src/pages/404.js`

Target:

- `src/pages/404.astro`

Port approach:

- Straightforward static page

Newsletter decision:

- Remove the newsletter route during migration
- Delete the signup form entirely rather than preserving it elsewhere

## Phase 6: Asset And Image Handling

Goal:

- Replace Gatsby image processing with Astro-compatible handling.

Content assets currently live alongside posts, for example:

- `src/pages/blog/groom-user-stories-your-delivery-team-wont-hate/attention_span.png`
- `src/pages/blog/habitual-testing/testing_pyramid.png`

Migration options:

1. Preserve post-local asset folders and update markdown references carefully
2. Move all post assets into a parallel content asset directory inside `src/content/blog/`

Recommendation:

- Keep asset moves minimal on the first pass
- Preserve the relationship between a post and its images

Deliverables:

- All post images resolve correctly in Astro
- No broken inline content images

## Phase 7: Verification

Before cutover, verify:

- Route parity
- Metadata parity
- Home/blog/post rendering parity
- Responsive layout parity
- No broken asset paths
- Newsletter form still submits correctly

Manual verification checklist:

1. `/`
2. `/blog/`
3. Every blog post route
4. `404.html`
5. Social preview metadata on at least one blog post

Automated verification worth adding in Astro:

- Build check
- Lint and format check
- Link checking if added later

## Phase 8: Cutover

Once the Astro app is ready:

1. Freeze Gatsby content edits briefly
2. Run final parity verification
3. Remove Gatsby-specific packages and files
4. Switch scripts and CI to Astro
5. Update README

Files expected to be removed after cutover:

- `gatsby-config.js`
- `gatsby-node.js`
- `gatsby-browser.js`
- Gatsby-specific packages in `package.json`
- Old React page/template structure under `src/pages/` and `src/templates/` after replacement

## Concrete File Mapping

### Pages

- `src/pages/index.js` -> `src/pages/index.astro`
- `src/pages/blog/index.js` -> `src/pages/blog/index.astro`
- `src/templates/blog-post.js` -> `src/pages/blog/[...slug].astro`
- `src/pages/404.js` -> `src/pages/404.astro`
- `src/pages/newsletter/index.js` -> removed

### Shared components

- `src/components/Header/index.js` -> `src/components/Header.astro`
- `src/components/Navigation/index.js` -> `src/components/Navigation.astro`
- `src/components/Footer/index.js` -> `src/components/Footer.astro`
- `src/components/SocialLinks/index.js` -> `src/components/SocialLinks.astro`
- `src/components/BlogList/index.js` -> `src/components/BlogList.astro`
- `src/components/Seo/index.js` -> `src/components/Seo.astro`
- `src/components/SignupForm/index.js` -> removed

### Styles

- `src/layouts/main.css` -> `src/styles/main.css`
- `src/layouts/normalize.css` -> `src/styles/normalize.css`
- `src/layouts/fonts.css` -> `src/styles/fonts.css`

## Risks

- Markdown image paths may be the most tedious part of the migration
- Copying Gatsby-era CSS modules directly may preserve more complexity than Astro needs
- If React integration is added too early, the Astro app may end up carrying unnecessary client runtime
- Route preservation needs to be exact for existing links and search indexing

## Decisions To Confirm Before Implementation

1. Migrate in place rather than creating a sibling `astro/` app

2. Adopt MDX immediately instead of doing Markdown first

3. Avoid React integration unless a real component needs it

4. Remove the newsletter page
5. Remove the signup form entirely

## Recommended First Astro Milestone

The best first milestone is not full migration. It is:

1. Scaffold Astro in the current repo root
2. Port the shared shell and home page
3. Port the blog content collection and one blog post route in MDX
4. Remove the newsletter route from the new Astro page map
5. Remove the signup form and newsletter feature logic
6. Verify design parity

That gives a meaningful checkpoint quickly and de-risks the rest of the migration.
