# Next Rewrites Test

This repository is intended to verify that the host header is properly passed when reverse proxying another web server in a Next.js project.

This repository consists of three projects:

- `edge-middleware` - This project uses the [edge middleware feature](https://nextjs.org/docs/app/building-your-application/routing/middleware) to return the content from `localhost:4000/foo` when accessed via `localhost:3000/foo`.
- `nextjs-rewrites` - This project accomplishes the same task as the above using the [rewrites feature of the Next.js config.](https://nextjs.org/docs/pages/api-reference/next-config-js/rewrites)
- `rewrite-target` - This project provides an API at `localhost:4000/foo` that returns whatever host header it receives.

## How to run

```sh
pnpm install
pnpm dev:edge-middleware # or pnpm dev:nextjs-rewrites
open http://localhost:3000/foo
```
