# Landing Page Generator

A beautiful, AI-powered landing page generator that creates stunning landing pages from website screenshots. Built with Next.js, TypeScript, Tailwind CSS, and powered by Blackbox AI.

## Features

- 🎨 **AI-Powered Generation**: Upload a website screenshot and let AI analyze the design and create a custom landing page
- 🏢 **Company Branding**: Add your company name, details, and logo for personalized results
- 🎭 **Lovable-Inspired Design**: Modern, clean interface with beautiful gradients and smooth animations
- 📱 **Responsive Design**: Generated landing pages work perfectly on all devices
- 💾 **Export Options**: Download generated HTML or copy the code directly
- ⚡ **Real-time Preview**: See your landing page as it's generated
- 🎯 **Tailwind CSS**: All generated pages use Tailwind CSS for easy customization

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **AI**: Blackbox API
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd landing-generator
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

1. **Enter Company Details**:
   - Fill in your company name
   - Add a description of your company, products, or services

2. **Upload Files**:
   - Upload a screenshot of a website you like (required)
   - Optionally upload your company logo

3. **Generate**:
   - Click "Generate Landing Page"
   - Wait for the AI to analyze and create your landing page

4. **Preview & Export**:
   - View the generated landing page in the preview pane
   - Switch between Preview and Code views
   - Copy the code or download as HTML file

## Project Structure

```
landing-generator/
├── app/
│   ├── api/
│   │   └── generate/
│   │       └── route.ts          # API endpoint for Blackbox integration
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Main page
│   └── globals.css               # Global styles
├── components/
│   ├── InputForm.tsx             # Form for company details and file uploads
│   ├── PreviewPane.tsx           # Preview and code display
│   └── GeneratedLanding.tsx      # Rendered landing page component
├── public/                       # Static assets
├── next.config.ts                # Next.js configuration
├── tailwind.config.ts            # Tailwind CSS configuration
└── tsconfig.json                 # TypeScript configuration
```

## How It Works

1. **User Input**: The application collects company information and a website screenshot
2. **Image Processing**: Files are converted to base64 format for API transmission
3. **AI Analysis**: Blackbox AI analyzes the screenshot's design, colors, and layout
4. **Content Generation**: AI generates a complete HTML landing page with:
   - Hero section with company branding
   - About section
   - Features/Services section
   - Call-to-action elements
   - Responsive design with Tailwind CSS
5. **Preview & Export**: Users can preview, edit, and download the generated page

## API Integration

The application uses the Blackbox AI API for content generation. The API endpoint is located at `/app/api/generate/route.ts` and handles:

- Image processing and base64 encoding
- Prompt engineering for optimal results
- Communication with Blackbox AI
- Response parsing and HTML extraction

## Customization

### Styling

The application uses Tailwind CSS with a custom color scheme inspired by Lovable:
- Purple gradients (`from-purple-600 to-pink-600`)
- Soft backgrounds (`purple-50`, `blue-50`, `pink-50`)
- Smooth transitions and hover effects

To customize colors, edit the Tailwind classes in the component files.

### AI Prompts

To modify the generated landing page style, edit the prompt in `/app/api/generate/route.ts`:

```typescript
const prompt = `You are a professional web designer...`;
```

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

## Deployment

The application is ready to deploy on Vercel:

```bash
vercel deploy
```

Or connect your GitHub repository to Vercel for automatic deployments.

## Environment Variables

No environment variables are required. The application uses the public Blackbox API endpoint.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Credits

- Built with [Next.js](https://nextjs.org/)
- Powered by [Blackbox AI](https://www.blackbox.ai/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Design inspired by [Lovable](https://lovable.dev/)

## Support

For issues or questions, please open an issue on the repository.

---

Made with ❤️ using Blackbox AI
