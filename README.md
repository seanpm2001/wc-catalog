# webcomponents.org monorepo

A new implementation of the webcompoents.org site

This repo contains several packages:

- `wc-registry`: A data-only backend that indexes npm packages and provides a GraphQL API into the database
- `wc-org-server`: A frontend server that serves the user-facing webcompoents.org site
- `wc-org-content`: An HTML client served by the frontend server
- `wc-org-shared`: Shared libraries, like GraphQL schemas.

## Quick Start

```bash
npm ci
cd packages/wc-registry
npm run build
npm run emulators:start & npm run dev
```

This starts a GraphQL service. The web server only serves a simple welcome page and an interactive GraphiQL editor at `/graphql`.
