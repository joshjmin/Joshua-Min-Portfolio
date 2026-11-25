# joshmin.me

Joshua Min's personal site: case studies in product, program and solutions work.

Built with React and Vite. All copy lives in `src/content.js`.

```
npm install
npm run dev            # local preview
npm run build          # production build in dist/
npm run build:review   # build that highlights figures still to confirm
```

In `src/content.js`, text wrapped in `{{double braces}}` is a figure that still needs confirming.
The review build highlights it; the production build shows it as plain text.
Remove the braces once a figure is confirmed.
