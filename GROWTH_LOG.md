# GROWTH_LOG.md

## How To Use This File

Record every growth-relevant edit here. Keep entries short, factual, and useful for future agents.

## Change Log

### 2026-10-01 - Source rule labels renamed; the batch repair confirmed live

- Task: Finish the render-quality pass on this site and confirm the earlier repair commit is the one serving traffic.
- Copy changed: Four Key Facts across `/codes` and `/updates` were labelled "Source rule". That is the authoring pipeline's name for its own sourcing policy; the value beside it -- the official Roblox game page plus the Code&Bricks social channels -- is a real provenance fact a reader can act on, so only the label changes, to "Primary sources". No value is altered.
- Confirmed: The earlier repair commit `15a8d1d` is on `origin/main` and is what the live site is serving. The render-quality audit re-run against the current data reports 0 findings across all 18 pages, and a read of the live site at `https://jumptostealscpmonsters.pro` returns 200 with 0 findings on all 11 routes.
- URLs affected: None. No title, H1, canonical, page type, keyword, CTA or internal-link role changed, so `CONTENT_INDEX.md` is not revised.
- Verification: `npm run verify` (typecheck, lint, template, content, IndexNow, static export, rendered SEO for 12 pages / 12 sitemap URLs / 12 manifest routes) passes and a sweep of the exported HTML finds no pipeline label and no unrendered Markdown link.

### 2026-10-01 - Public page render-quality repair

- Task: Repair the homepage and inner pages so the first screen carries a positioning line, key facts and priority entry points, and so authoring-pipeline artifacts never reach a public page.
- Defects found: placeholder_module (4 finding(s)) across 12 page(s).
- Files changed: `src/data/pages/*.ts` and `src/data/faq.ts` (fold and module data), `src/components/content/ModuleRenderer.tsx` (prose body now renders Markdown), `src/components/pages/ContentPage.tsx` (Quick Answer renders inline Markdown), `src/lib/markdown.tsx` (new minimal Markdown-to-React renderer, including tables), `src/styles/modules.css` (prose body and table rules), `scripts/validate-render-integrity.ts` (new regression), `package.json` (new `validate:render` step in the `verify` chain).
- URLs affected: None. Titles, H1s, canonicals, CTAs, page types and internal-link roles are unchanged, so `CONTENT_INDEX.md` is not revised.
- SEO/GEO changed: FAQ entries that previously existed only as a Markdown module are now real entries in `src/data/faq.ts` and render through the accessible FAQ block, so FAQPage schema coverage is no longer limited to the pre-existing entries. `hero.subtitle` is now a positioning line and `quickAnswer` is the concise answer, so the fold is a summary rather than a duplicate of the article.
- Copy changed: Reader copy no longer refers to the build-now brief, the game-check brief, the research cut-off date or the source-tier labels. Game facts, URLs, keyword intent, ad units and analytics are unchanged.
- Verification: `npm run verify` (typecheck, lint, template, content, render integrity, IndexNow tests, static export, rendered SEO) passes; a full-text scan of every exported page finds no raw heading markers, raw Markdown links, tables or bold markers, pipeline headings, research metadata or literal question/answer labels; a content-conservation check against the previous commit confirms no reader copy, page identity or SEO field was lost.


## 2026-10-01 — shared Worker deployment maintenance

User-authorized routing migration to `guide-pool-08` / Worker `moggedlooksmaxxordie-wiki`; source push is connected to the shared Cloudflare Git build via the repository deploy hook. Content and public URL identities are unchanged. Completion is tracked by the central group migration report and live source/version verification.
