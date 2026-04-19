# SafeMobo - Static Content

Static assets for the Safe Mobo FAQ and Terms pages.

Cloudflare Workers deployment is configured through `wrangler.toml`, with browser files served from `public/`.

If you deploy from the Cloudflare Git integration using `npx wrangler deploy`, Wrangler will now upload the files in `public/` as static assets.


## Alternatively

Zip all content (HTML) and publish to https://dash.cloudflare.com/e86546e5676fcbe5a642f4b2d38f86e2/workers/services/view/static/production