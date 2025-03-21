# Orrisa Academy Trust Website

A professional website for Orrisa Academy Trust featuring trust information, photo galleries, a donation button, and required legal pages.

## About

The Orrisa Academy Trust website is designed to showcase the trust's educational activities, provide information about programs, team members, and allow visitors to contact the trust and make donations.

## Features

- Responsive design with mobile-friendly navigation
- Information about the trust and its mission
- Programs and initiatives showcase
- Team member profiles
- Image gallery
- Contact form (using Netlify Forms)
- Donation functionality (ready for payment gateway integration)
- Legal pages (Terms & Conditions, Privacy Policy, Refund Policy)

## Deployment on Netlify

This project is configured for free static site deployment on Netlify.

### Deployment Steps

1. Push the code to a GitHub repository
2. Sign up on [Netlify](https://www.netlify.com/)
3. Click "New site from Git"
4. Select your GitHub repository
5. Keep the default settings (the build command and publish directory are already configured in netlify.toml)
6. Click "Deploy site"

### Forms

The contact form is already configured to work with Netlify Forms, a free feature of Netlify that handles form submissions without requiring a backend server.

### Future Payment Integration

The donation functionality is currently a placeholder that can be integrated with Cashfree payment gateway in the future.

## Local Development

To run the project locally:

```
npm install
npm run dev
```

The site will be available at http://localhost:5000