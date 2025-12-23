# Landing Page Generator

A beautiful AI-powered landing page generator that creates stunning landing pages based on website screenshots, company details, and logos. Built with Next.js, TypeScript, and Tailwind CSS, powered by the Blackbox AI API.

## Features

- 🎨 **Lovable-inspired UI** - Modern, gradient-rich design with smooth animations
- 🤖 **AI-Powered Content Generation** - Uses Blackbox AI to create compelling copy
- 📸 **Screenshot Analysis** - Analyzes website screenshots to understand design patterns
- 🎯 **Smart Content Creation** - Generates headlines, features, and CTAs automatically
- 💾 **Export Functionality** - Download your landing page as a standalone HTML file
- 🖼️ **Logo Integration** - Upload and integrate your company logo seamlessly

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **AI**: Blackbox AI API
- **HTTP Client**: Axios

## Getting Started

### Prerequisites

- Node.js 22 or later
- npm

### Installation

1. Navigate to the project directory:
```bash
cd landing-page-generator
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

1. **Enter Company Name**: Provide your company or product name
2. **Add Company Details**: Describe your business, products, or services
3. **Upload Screenshot** (Optional): Upload a screenshot of a website for design inspiration
4. **Upload Logo** (Optional): Add your company logo
5. **Generate**: Click the "Generate Landing Page" button
6. **Preview & Export**: Review your generated landing page and export as HTML

## API Integration

The application uses the Blackbox AI API for:
- Vision analysis of uploaded screenshots
- Content generation for landing pages
- Feature descriptions and CTAs

The API endpoints are called from `/app/api/generate/route.ts`

## Project Structure

```
landing-page-generator/
├── app/
│   ├── api/
│   │   └── generate/
│   │       └── route.ts          # API route for AI generation
│   ├── page.tsx                   # Main page component
│   └── layout.tsx                 # Root layout
├── components/
│   ├── GeneratorForm.tsx          # Form for input collection
│   └── LandingPagePreview.tsx     # Preview and export component
├── public/                        # Static assets
└── package.json
```

## Features Breakdown

### Generator Form
- File upload with preview
- Form validation
- Loading states
- Responsive design

### AI Generation
- Screenshot vision analysis using GPT-4o
- Content generation using Blackbox AI
- Structured JSON response parsing
- Error handling

### Landing Page Preview
- Hero section with gradient backgrounds
- Features grid layout
- Call-to-action section
- Responsive footer
- Export to HTML functionality

## Styling

The application uses a Lovable-inspired design system:
- Purple to blue gradients
- Rounded corners and smooth shadows
- Hover animations and transitions
- Modern card-based layouts
- Responsive grid systems

## License

MIT

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Powered by [Blackbox AI](https://www.blackbox.ai/)
- Inspired by [Lovable](https://lovable.dev/)
