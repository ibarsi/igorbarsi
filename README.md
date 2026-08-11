# IGOR BARSI

[http://www.igorbarsi.com](http://www.igorbarsi.com)

Astro-powered personal site and blog.

## Development

This project uses `mise` for the Node runtime and local tasks.

1. Install the toolchain and npm dependencies:

```bash
mise install
mise run install
```

2. Use `mise` tasks for day-to-day work:

```bash
mise tasks
mise run dev
mise run build
mise run preview
mise run lint
mise run typecheck
mise run check
mise run ci
mise run format
mise run format-check
```

Note:

- The project runtime is pinned in `mise.toml`.
- `mise run ci` is the quick local verification path before pushing changes.
- Blog content now lives under `src/content/blog/` as MDX.
