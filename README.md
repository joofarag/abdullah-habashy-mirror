# abdullah-habashy.com — static mirror

A point-in-time static snapshot of [abdullah-habashy.com](https://abdullah-habashy.com/), fetched with `wget --mirror --page-requisites --convert-links --span-hosts`.

Captured on 2026-04-23.

## Layout

```
abdullah-habashy.com/              # main site (entry point: index.html)
├── index.html                     # homepage (rendered HTML from the Next.js app)
├── api/manifest.html              # PWA manifest
├── _next/static/chunks/...        # Next.js JS/CSS bundles
├── Fonts/...                      # custom web fonts
└── media/svg/...                  # inline SVG assets
storage.abdullah-habashy.com/      # cross-origin image/media storage (MinIO-backed)
console-minio.abdullah-habashy.com/ # MinIO console CSS/SVGs referenced by the site
```

## Serving locally

```bash
python3 -m http.server 8000
# then open http://localhost:8000/abdullah-habashy.com/index.html
```

Or serve `abdullah-habashy.com/` as the webroot and symlink the other two host folders alongside so the `../storage.abdullah-habashy.com/...` relative links resolve.

## Known gaps / caveats

The original site is a **Next.js SPA** whose navigation, forms, and data are client-side and call a live backend at `https://api.abdullah-habashy.com`. A static crawl captures only what the server renders on first paint, so the following will **not** work in the mirror:

- Any in-app navigation that relies on client-side routing (the homepage is the only HTML page captured — no internal links to `/about`, `/services`, etc. were discoverable from the rendered HTML).
- Any request to `api.abdullah-habashy.com` (bookings, forms, dynamic content).
- Any third-party analytics/pixels (Google Tag Manager, Facebook Connect) — these are loaded but won't function without their IDs in a deployed context.
- `convert-links` rewrote URLs to relative paths; some cross-origin assets may still be requested from the internet depending on CORS/preconnect hints in the HTML.

## Provenance

Mirrored on behalf of the repo owner, who confirmed they have rights to the content.
