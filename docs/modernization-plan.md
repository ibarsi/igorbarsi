# Site Modernization Plan

## Platform Direction

Treat the refresh as a 4-phase modernization with an early platform decision:

1. Modernize Gatsby in place
2. Migrate to Astro

For this repo, the recommended path is to do a short design and system refresh first, then decide whether to complete the work in Gatsby or migrate to Astro. The codebase is small enough that migration is feasible, but visible improvements do not need to wait on that decision.

## Phase 0: Decide The Platform

### Option 1: Modernize Gatsby In Place

Pros:

- Lower immediate disruption
- Faster first pass

Cons:

- Still carries older Gatsby conventions and ecosystem weight

### Option 2: Migrate To Astro

Pros:

- Better fit for a content-focused personal site
- Lighter output
- Simpler mental model
- Modern partial-hydration story

Cons:

- Requires moving templates and content routing
- Requires a full retest

Recommendation:

- If the goal is the best long-term result, migrate to Astro.
- If the goal is the fastest visible upgrade, do one UI and system pass first, then migrate.

## Phase 1: Rebuild The Foundation

Goal:

- Make the site feel current without changing the content yet.

Scope:

- Replace the global CSS in `src/layouts/main.css` with a mobile-first system.
- Rework the header and navigation in `src/components/Header/index.js` and `src/components/Navigation/index.js`.
- Redesign the homepage in `src/pages/index.js` around clearer sections:
  - Hero
  - Short positioning statement
  - Featured or recent writing
  - Social and contact
- Define design tokens:
  - Type scale
  - Spacing scale
  - Color variables
  - Content widths
  - Border, radius, and shadow rules

Concrete changes:

- Remove fixed-width layout patterns like `min-width: 800px`
- Reduce heavy all-caps usage
- Improve vertical rhythm and whitespace
- Move from a boxed page layout to a more intentional editorial layout
- Make mobile a first-class layout rather than a fallback

Outcome:

- The site immediately looks contemporary.
- The CSS becomes maintainable enough to support later work.

## Phase 2: Remove Legacy Implementation Choices

Goal:

- Reduce technical drag and simplify the code.

Scope:

- Replace `gatsby-link` imports with modern Gatsby `Link` usage if staying on Gatsby.
- Replace `react-helmet` usage in `src/layouts/index.js` and `src/pages/index.js` with the current metadata approach for the target framework.
- Remove `moment` from `src/templates/blog-post.js` in favor of native `Intl.DateTimeFormat`.
- Audit old plugins in `gatsby-config.js`.

Likely removals or reconsiderations:

- Legacy social feed embed on the homepage
- Newsletter feature flag if it is inactive
- Any plugin that exists only to support an old pipeline

Outcome:

- Smaller dependency surface
- Less client-side JavaScript
- Easier future upgrades

## Phase 3: Content And SEO Refresh

Goal:

- Modernize how the site presents and distributes content.

Scope:

- Improve metadata defaults and per-page metadata
- Add better social share images and page descriptions
- Refresh blog list and post templates
- Improve RSS, sitemap, and robots support depending on framework
- Consider moving markdown posts to MDX if richer article layouts become useful

Repo areas affected:

- `src/templates/blog-post.js`
- `src/pages/blog/index.js`
- `src/components/BlogList/index.js`

Outcome:

- Better search and social presentation
- Stronger editorial feel
- More flexibility for future writing

## Phase 4: Tooling And Reliability

Goal:

- Bring the project up to current engineering standards.

Scope:

- Add TypeScript
- Add ESLint
- Add a formatter script that covers the full repo
- Add basic CI for build and lint
- Add lightweight tests for critical rendering and content paths
- Update Node and runtime expectations

Outcome:

- Safer future changes
- Cleaner developer experience
- Fewer regressions

## Recommended Execution Order

1. Lock platform choice: Gatsby refresh or Astro migration.
2. Rebuild the visual foundation and homepage.
3. Remove legacy dependencies and embeds.
4. Refresh blog and content presentation plus metadata.
5. Add tooling and CI.

## Recommended First Implementation In This Repo

Start with:

1. Create a modern homepage and layout pass in the existing repo.
2. Remove the old social feed embed and fixed-width layout rules.
3. Refactor the header, navigation, and homepage sections.
4. Then decide whether to keep Gatsby or migrate.

Reasoning:

- This gives visible improvement quickly.
- It avoids spending time polishing an outdated UI architecture before the visual foundation is fixed.
