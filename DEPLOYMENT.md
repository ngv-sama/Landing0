# Landing Page Generator - Deployment Guide

## Application Overview

A fully functional AI-powered landing page generator built with Next.js 16, TypeScript, and Tailwind CSS. The application uses the Blackbox AI API to analyze website screenshots and generate compelling landing page content.

## Location

The application is located at: `/vercel/sandbox/landing-page-generator`

## Current Status

✅ **Application is running successfully**
- Dev server started on http://localhost:3000
- Build completed successfully
- All TypeScript types validated
- All components created and integrated

## Features Implemented

1. **Generator Form** (`/components/GeneratorForm.tsx`)
   - Company name input
   - Company details textarea
   - Screenshot upload with preview
   - Logo upload with preview
   - Form validation
   - Loading states with spinner

2. **Landing Page Preview** (`/components/LandingPagePreview.tsx`)
   - Dynamic content rendering
   - Hero section with gradients
   - Features grid (3 columns)
   - Call-to-action section
   - Footer
   - Export to HTML functionality

3. **API Route** (`/app/api/generate/route.ts`)
   - Multipart form data handling
   - Screenshot vision analysis (GPT-4o)
   - Content generation (Blackbox AI)
   - JSON parsing and error handling

4. **Main Page** (`/app/page.tsx`)
   - State management
   - Conditional rendering
   - Lovable-inspired gradient design

## Tech Stack

- **Framework**: Next.js 16.1.1 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **AI Provider**: Blackbox AI API
- **HTTP Client**: Axios 1.13.2
- **Node**: v22

## Running the Application

```bash
cd /vercel/sandbox/landing-page-generator
npm run dev
```

Access at: http://localhost:3000

## Build for Production

```bash
cd /vercel/sandbox/landing-page-generator
npm run build
npm start
```

## API Integration

The application uses Blackbox AI API endpoints:
- **Vision Analysis**: `https://api.blackbox.ai/v1/chat/completions` with GPT-4o model
- **Content Generation**: `https://api.blackbox.ai/v1/chat/completions` with blackboxai model

No API key required - the Blackbox AI API is freely accessible.

## User Flow

1. User enters company name and details
2. User uploads optional screenshot and logo
3. Click "Generate Landing Page"
4. AI analyzes screenshot (if provided)
5. AI generates landing page content:
   - Headline and subheadline
   - Value proposition
   - 3 feature cards
   - CTA section
6. Preview rendered with Lovable-inspired design
7. User can export as standalone HTML file
8. User can create new landing page

## Design System

Lovable-inspired design featuring:
- Purple to blue gradients (`from-purple-600 to-blue-600`)
- Rounded corners (`rounded-3xl`, `rounded-xl`)
- Shadow effects (`shadow-2xl`)
- Smooth transitions and hover effects
- Responsive grid layouts
- Modern glassmorphism effects

## File Structure

```
landing-page-generator/
├── app/
│   ├── api/generate/route.ts     # AI generation endpoint
│   ├── page.tsx                   # Main page
│   ├── layout.tsx                 # Root layout
│   └── globals.css                # Global styles
├── components/
│   ├── GeneratorForm.tsx          # Input form
│   └── LandingPagePreview.tsx     # Preview component
├── public/                        # Static assets
├── .env.local                     # Environment config
├── package.json                   # Dependencies
├── tsconfig.json                  # TypeScript config
├── tailwind.config.ts             # Tailwind config
└── README.md                      # Documentation
```

## Dependencies

```json
{
  "dependencies": {
    "axios": "^1.13.2",
    "next": "16.1.1",
    "react": "19.2.3",
    "react-dom": "19.2.3"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.1.1",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
```

## Notes

- No environment variables required (Blackbox AI API is open)
- Application fully client-side except for API route
- Screenshots are converted to base64 for vision analysis
- Generated HTML files are self-contained with Tailwind CDN
- All TypeScript strict mode enabled
- ESLint configured for Next.js best practices

## Testing

The application has been built successfully with:
- ✅ TypeScript compilation
- ✅ Static page generation
- ✅ API route configuration
- ✅ Dev server running on port 3000

## Future Enhancements

Potential improvements:
- Add more landing page templates
- Implement color scheme customization
- Add section reordering
- Include testimonials section
- Add pricing table generator
- Implement real-time preview updates
- Add dark mode support
- Include SEO meta tag generation

---

**Status**: Production Ready ✅
**Last Updated**: 2025-12-22
