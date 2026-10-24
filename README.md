# Zeus System Technologies website

Astro + Tailwind CSS v4 (static output).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Where things live
- `src/data/site.ts` company details, navigation, services (single source of truth)
- `src/data/projects.ts` featured projects (empty = labeled demonstration area on Home)
- `src/data/services-catalog.ts` Services page categories and offerings
- `src/styles/global.css` design tokens (`@theme`) and component styles
- `src/styles/services.css` Services page styles and motion
- `src/components/` Header, Footer, Button, Icon, SectionHeading, HeroNetwork, ServiceArt, CtaBand
- `src/pages/about.astro` About Us page
- `src/pages/projects/index.astro` Projects and illustrative scenarios
- `src/pages/contact.astro` Contact details and enquiry form
- `src/pages/request-quote.astro` Request a quote form
- `src/pages/services/index.astro` interactive Services directory
- `.env.example` Web3Forms access key for Contact and Request a Quote delivery

## Contact and quote forms
The Contact Us, Request a Quote, six service-specific, and Technology Training enquiry forms use the official Web3Forms endpoint with separate keys. Set `PUBLIC_FORM_ACCESS_KEY` for Contact Us, `PUBLIC_QUOTE_FORM_ACCESS_KEY` for Request a Quote, and `PUBLIC_SERVICE_FORM_ACCESS_KEY` for service and training enquiries in `.env` **before running the production build**. If Web3Forms asks for the service form URL, use `https://zeus.com.ng/services/`; for the Training form, use `https://zeus.com.ng/training/`. For cPanel hosting, upload the contents of `dist/` to `public_html/`; cPanel does not read `.env` or run the build. Access Keys are public in a static site and route submissions to the email associated with each key. Forms retain entries and offer an email draft if delivery is not configured or fails.

## cPanel Git deployment
This project includes a `.cpanel.yml` deployment task that copies the committed `dist/` contents to `$HOME/public_html` for the primary domain. The repository intentionally tracks `dist/` for this cPanel-only deployment flow; Node.js/npm is not required on the cPanel server.

Before pushing a release to the `main` branch:

1. Set the three Web3Forms access keys in your local `.env`.
2. Run `npm ci` and `npm run build`.
3. Review and commit the generated `dist/` changes along with the source changes.
4. In cPanel Git Version Control, select **Update from Remote**, then **Deploy HEAD Commit**.

cPanel's Git pull deployment does not automatically run when the GitHub repository changes; repeat both cPanel actions for each release. The deployment task copies files but does not delete existing files from `public_html`. Do not commit `.env`; it remains ignored.
