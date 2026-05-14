# Project: Academia Fenix - Website

Official website for Academia Fenix, an ITF Taekwondo school in Argentina.

## Tech Stack

- **Astro** - Static site framework
- **Tailwind CSS** - Styling
- **TypeScript** - Static typing
- **Firebase/Firestore** - Database and backend

## Project Structure

```
fenix_web/
├── src/
│   ├── pages/           # Public pages (automatic routes)
│   │   ├── index.astro
│   │   ├── about.astro
│   │   └── contact.astro
│   ├── components/      # Reusable Astro components
│   ├── layouts/         # Layout templates
│   │   └── Layout.astro
│   ├── assets/          # Static images and files
│   └── firebase.js      # Firebase configuration
├── public/              # Public static files
├── astro.config.mjs
├── tailwind.config.js
└── package.json
```

## Coding Standards

- Code must be written in **English**
- Documentation and comments in **Spanish**
- Use **TypeScript** for all new files
- Follow Airbnb JavaScript Style Guide
- Use async/await for async operations

## Pages

- `index.astro` - Home page with latest news and events
- `about.astro` - Instructors, ITF values, location
- `contact.astro` - Contact form and info
- Events page - Data fetched from Firebase
- Blog/News - Articles and training tips

## Environment Variables

Firebase config via `.env.local`:
- PUBLIC_FIREBASE_API_KEY
- PUBLIC_FIREBASE_AUTH_DOMAIN
- PUBLIC_FIREBASE_PROJECT_ID
- PUBLIC_FIREBASE_STORAGE_BUCKET
- PUBLIC_FIREBASE_MESSAGING_SENDER_ID
- PUBLIC_FIREBASE_APP_ID

## Dev Commands

- `npm run dev` - Dev server
- `npm run build` - Production build
- `npm run preview` - Preview build
- `npm run check` - Type check
