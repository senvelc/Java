# Devendra Fadnavis - Website Clone (React)

A standalone React.js clone of the Devendra Fadnavis official website. Fully self-contained – no external `www` links, no third-party API calls. All pages are generated using React Router (client-side routing).

## Features

- Multi-page React app with React Router v7
- Pixel-close visual replica of the original layout
- Pages: Home, About Him, News & Events, Stock Images, Manifesto (BMC Election 2026), Press Room, Contact Us
- Auto-rotating hero slider (4 slides) with dot/arrow navigation
- Responsive header with dropdown menus & mobile hamburger
- News & Media grid with hover overlay
- Social media-style cards (Facebook / Twitter / YouTube look-alike)
- Stock Images gallery with lightbox preview
- Multi-pillar manifesto layout
- Working Contact form (saves to localStorage)
- Cookie consent banner, floating WhatsApp & back-to-top buttons
- Tailwind CSS + shadcn/ui style components
- Lucide-react icons (no emoji icons)

## Tech Stack

- React 19
- React Router v7
- Tailwind CSS 3
- Lucide-react (icons)
- CRACO (Create-React-App config override)

## Run locally

```bash
cd frontend
yarn install        # or: npm install
yarn start          # or: npm start
```

The app runs on http://localhost:3000

## Build for production

```bash
cd frontend
yarn build
# output: frontend/build/
```

## File structure

```
frontend/
├── public/
│   └── index.html
├── src/
│   ├── App.js                       # Routes
│   ├── App.css
│   ├── index.js / index.css
│   ├── components/
│   │   ├── Header.jsx               # Top nav with dropdowns
│   │   ├── Footer.jsx
│   │   ├── HeroSlider.jsx           # Auto-rotating banner
│   │   ├── SocialBar.jsx
│   │   ├── ScrollToTop.jsx
│   │   ├── FloatingButtons.jsx      # WhatsApp + back-to-top
│   │   ├── CookieBanner.jsx
│   │   └── ui/                      # shadcn-style components (kept from template)
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── AboutHim.jsx
│   │   ├── NewsEvents.jsx           # Tabs: News / Events / Speeches / Videos
│   │   ├── StockImages.jsx
│   │   ├── Manifesto.jsx
│   │   ├── PressRoom.jsx
│   │   └── Contact.jsx
│   └── data/
│       └── content.js               # All mock data (slides, news, videos, etc.)
├── tailwind.config.js
├── craco.config.js
├── package.json
└── yarn.lock
```

## Customising content

All text, news items, event entries, video titles, manifesto pillars, press
releases and gallery images are defined in **`src/data/content.js`**. Edit
this single file to update site content without touching the components.

## Images

The site uses public images from Pexels & Unsplash referenced by URL.
Replace the URLs in `src/data/content.js` with your own asset paths (e.g.
move images into `frontend/public/images/` and reference `/images/foo.jpg`).

## Notes

- Backend folder (`backend/`) is present from the template but not used by
  the site. All data is mock/static in `src/data/content.js`.
- The Contact form saves submissions to `localStorage` under the key
  `df_contacts` – wire it to your own API endpoint when ready.
- No external www links are present – every nav link points to an internal
  React route. External social links use `#` placeholders (e.preventDefault).
