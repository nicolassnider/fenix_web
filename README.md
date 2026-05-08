# Academia Fenix Website

## Overview

**Academia Fenix** is a semi-static website project for a Taekwondo ITF school in Argentina. The goal is to build a fast, affordable site using Astro and deploy it on Netlify. The website will show school information, events, a blog/news section, and a contact form.

## Goals

- Present the school clearly to students, families, and visitors.
- Show upcoming events and class updates.
- Include an easy contact form for inquiries.
- Store events data in Firebase for simple updates.
- Deploy on Netlify to minimize hosting costs.

## Recommended Stack

- **Astro**: Static site generator for fast, SEO-friendly pages.
- **TypeScript**: Safer page and component code.
- **Netlify**: Free/cheap static hosting.
- **Firebase**: Firestore for event data storage.
- **Tailwind CSS** (optional): Fast responsive styling.

## Core Pages

- **Home**: School introduction, mission, and latest news.
- **About**: Information about instructors, training style, and ITF values.
- **Events**: Upcoming events and classes loaded from Firebase.
- **Blog / News**: Articles, announcements, and training tips.
- **Contact**: Contact form for questions or trial class requests.

## Project Structure

```text
fenix_web/
├── public/                 # Static assets (images, icons)
├── src/
│   ├── assets/             # Optional local images and media
│   ├── components/         # Reusable UI components
│   ├── layouts/            # Page layout templates
│   ├── pages/              # Astro pages (.astro)
│   ├── styles/             # Global CSS or Tailwind config
│   ├── firebase/           # Firebase integration files
│   └── data/               # Static content or markdown posts
├── astro.config.mjs        # Astro configuration
├── package.json            # Dependencies and scripts
├── netlify.toml            # Netlify deploy settings (optional)
└── README.md               # Project documentation
```

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Create a Firebase project

1. Go to [Firebase Console](https://console.firebase.google.com/).
2. Create a new project for Academia Fenix.
3. Enable **Firestore Database**.
4. Add a web app to the Firebase project.
5. Copy your Firebase config values.

### 3. Configure Firebase

Create `src/firebase/config.ts` and add your Firebase config:

```ts
export const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};
```

### 4. Store Events in Firestore

Recommended event fields:

- `title`
- `date`
- `time`
- `location`
- `description`
- `imageUrl` (optional)
- `registrationLink` (optional)

Fetch event data from Firestore for the `Events` page.

## Development

Run the local development server:

```bash
npm run dev
```

Open `http://localhost:4321`.

## Build

```bash
npm run build
```

## Deploy to Netlify

1. Push the code to GitHub or another Git provider.
2. Connect the repo to Netlify.
3. Set the build command to:

```bash
npm run build
```

4. Set the publish directory to:

```bash
dist
```

5. Add Firebase config values as environment variables if needed.

## Contact Form Options

Low-cost form options:

- **Netlify Forms**: Built-in and easy for static sites.
- **Formspree / Getform**: Free plan for basic form submissions.
- **Netlify Functions** or **Firebase Functions**: Custom backend if you need email forwarding.

## Cost-Saving Notes

- Keep the site mostly static and only fetch event data dynamically.
- Use Netlify free tier for hosting.
- Use Firebase free tier for Firestore.
- Avoid heavy backend APIs to lower complexity and cost.

## Next Steps

1. Create Astro pages: `Home`, `About`, `Events`, `Blog`, `Contact`.
2. Add Firebase event fetching.
3. Add a contact form with a lightweight submission backend.
4. Deploy to Netlify and verify.

## License

This project is open source and designed for the Academia Fenix website.