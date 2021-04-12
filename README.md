# Burger House

A simple Next.js app with Contentful.

## Technologies

-   Next.js
-   Styled JSX
-   Contentful CMS
-   Contentful Richt Text React Renderer
-   Deployed to Vercel

## Installation

1. Clone repo, cd into folder
2. Install dependencies: `npm i`
3. Fill in `.env` according to `.env.example`
4. Start server in dev mode: `npm run dev`

## Scripts

| Description              | Command         | Value        |
| ------------------------ | --------------- | ------------ |
| Start server in dev mode | `npm run dev`   | `next dev`   |
| Build app                | `npm run build` | `next build` |
| Start server             | `npm run start` | `next start` |

## Notes

Based on [this](https://www.youtube.com/playlist?list=PL4cUxeGkcC9jClk8wl1yJcN3Zlrr8YSA1) NetNinja tutorial, but with the following adjustments:

-   React strict mode
-   AMP
-   Custom 404
-   Custom `_app.js`
-   Head

## Issues

Contentful slug regex (not used due to unknown input error): `^[a-z0-9]+(?:-[a-z]0-9+)*$`
