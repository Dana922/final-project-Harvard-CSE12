# Final Project

### This project is a multi-page website built with **Astro** that explores data and content from the **New York Public Library (NYPL)**. It demonstrates client-side JavaScript, API usage, maps, form validation, and responsive layout techniques.

Public URL for Live Website hosted on Cloudflare
https://final-project-harvard-cse12.pages.dev/

To do:

- [ ] Build the Astro and make sure Astro runs using Npm
- [ ] Set up the folder structure
- [ ] Find API of NYPL [decide which section of the API you are using>>Digital collection and categories only>>get token>> use the URL as a variable in index.astro]
- [ ] Build the map page using Leaflet
- [ ] Use RSS for building the news page [ linking it with NYPL blog]
- [ ] Build the rest of BaseLayout.astro , add the API package,
- [ ] Make the Nav responsive into a hamburger menu for mobile view
- [ ] Create contact page that has a form with fields and validation for each field and submit button, use prestine for field validation.

## Installation and Running

- npm install
- Npm create@astro lastest
- Npm run dev
- Npm run build
- Npm run preview

## How requirements are met

**Home**: Displays NYPL digital collections using the NYPL API in a responsive card layout.

- **Map**: Interactive map of NYPL locations using Leaflet.
- **News**: Displays recent posts from the NYPL blog using an iframe.
- **Contact**: Contact form with client-side validation using PristineJS and form submission via the CS12 form handler.>> https://cs12.net/form/submit.php

### where is API taken from

where is the api taken from:NYPL API : https://api.repo.nypl.org/#
token : NYPL_TOKEN = "umi7qsqn9w0dtm2d"
both are available in the index.astro

## 5-Planes approach

### Strategy

Create a simple, user-friendly website to show NY public library digital collection, build separate pages to have the map with the branch locations.
news page and a contact page with a unctioning form to submit any messages to NYPL.

### Use of javascript in browser

 - nav.js
 - Map.js
 - contact.js and pristine.js

<Go deeper>
I built a form in contact page and used pristine for form validation and made the submission action button functional.
each field has a specific value that if not met that validation error appears with the corresponding error message.

### Scope

Categories of digital collection
Selecting for more information
Map with information of each branch
News with updated blog using <iframe>
Contact form using pristinejs for field validation

### Structure

src/
├── layouts/
│ └── BaseLayout.astro
├── pages/
│ ├── index.astro
│ ├── map.astro
│ ├── news.astro
│ └── contact.astro
├── scripts/
│ └── contact.js # PristineJS validation logic
public/
├── scripts/
│ ├── map.js
│ └── nav.js
├── dist/
│ └── pristine.js
├── data/
│ └── nyc_libraries.json
└── images/
└── NYPL logo.svg

### Skeleton

Please refer to the attached png's labeled with name of each page for the skeleton of the pages/website

### Surface

Please refer to the attached png's labeled with name of each page for the surface of the pages/website.

### looking back at the project and the learnings 

The most challenging part of this project was deployment. I needed to push all files correctly to my personal GitHub repository and deploy the site using Cloudflare. The deployment did not work correctly at first—although the site worked locally, the map and contact form failed to render in the deployed version. I later realized that some imports used relative paths that were not recognized during deployment. In addition, duplicate files and missing assets (some of which were ignored by .gitignore) caused further issues. Resolving these problems required me to better understand the deployment process, clean up file structure conflicts, and learn new ways of managing and pushing changes through the terminal.