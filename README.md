# Founders & Futures — Mentors Night

A local front end for Adelaide University Entrepreneurs Society’s event on 21 October 2026. The page flows from the welcome through Muhsina’s foreword and the evening programme to a three-person React Bits FlexCarousel. Each mentor portrait opens a separate presentation page.

## Run locally

```powershell
npm install
npm run dev
```

Open the local address printed by Vite. To produce static files, run `npm run build`; the output is in `dist/` and includes all three mentor pages.

## Live site

The primary site is [Founders & Futures Mentors Night on Vercel](https://founders-and-futures-mentors-night.vercel.app/). The Vercel project is connected to this GitHub repository and deploys the Vite build from `main` automatically when it is pushed.

A [GitHub Pages mirror](https://vrutikgoswami.github.io/founders-and-futures-mentors-night/) is also published from `main`'s `docs/` folder. To update that mirror, run `npm run build:pages`, commit the updated `docs/` folder, then push `main`. This build sets Vite's base path to the repository name so mentor pages and local assets resolve on GitHub Pages.

## Assets

- **Event QR code:** `public/qr/founders-and-futures-qr.png` (1,600 px) and `public/qr/founders-and-futures-qr.svg` (vector) both encode the primary Vercel URL. The code uses a four-module quiet zone and high error correction for print use.
- **Muhsina’s photo:** a sharpened, higher-resolution edit of the supplied portrait is at `public/images/muhsina-crisp.png` and appears in the foreword.
- **Club logo:** the supplied ESAU shield remains in `logo/` and is also copied to `public/logo/esau-shield.jpeg` for the society credit in the hero.
- **Event logo:** the minimalist Founders & Futures monogram and light/dark lockups are in `logo/`. The light lockup appears in the site header, the monogram is the favicon, and the ESAU shield remains beside the society credit in the hero.
- **Optional approved mentor headshots:** the current `public/images/alex-cross.png`, `jibin-jeffrey.png`, and `baber-bhatti.png` are cleaned portraits made from the screenshots supplied for this build. Replace those files with approved original headshots if available, keeping the filenames.
- **Venue or registration link:** neither was supplied in the programme, so neither is shown. Add them to the event page when confirmed.

The foreword reads: “We deeply appreciate your presence today”. The roadmap follows the supplied programme, including arrivals, speaking times, MC questions, dinner, open Q&A, networking, and closing. Each mentor page returns directly to the animated carousel.

## Components and motion

`src/components/FlexCarousel.jsx` and its CSS are adapted from the [React Bits FlexCarousel](https://github.com/DavidHDev/react-bits/tree/main/src/content/Components/FlexCarousel) JavaScript/CSS source. The adaptation makes any portrait click open its presentation page. The GhostFibers background comes from the component source included in the brief. The scroll reveals use Intersection Observer and respect reduced-motion preferences.

DM Sans and Manrope are bundled locally as WOFF2 files from Google Fonts.
