# PulchriFlow Public Web

This Next.js app is the public acquisition layer for PulchriFlow.

- `pulchriflow.com` should serve this app after staged validation.
- `app.pulchriflow.com` should continue serving the existing Vite merchant app.
- Blog content is fetched from the Spring Boot CMS API; blog posts are not stored as MDX/source files.

Required environment variables:

```text
NEXT_PUBLIC_SITE_URL=https://pulchriflow.com
NEXT_PUBLIC_APP_URL=https://app.pulchriflow.com
PULCHRIFLOW_API_URL=https://api.pulchriflow.com
```

Do not switch production DNS until storefront links, auth, Paystack callbacks, email links, and PWA install behavior have passed release-blocking checks.
