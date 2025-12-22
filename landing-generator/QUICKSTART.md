# Quick Start Guide

Get your Landing Page Generator up and running in 3 simple steps!

## 🚀 Quick Setup

```bash
# 1. Navigate to the project directory
cd landing-generator

# 2. Install dependencies (if not already done)
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 How to Use

### Step 1: Enter Company Information
- **Company Name**: Enter your company or product name
- **Company Details**: Describe what your company does, your products, or services

### Step 2: Upload Files
- **Screenshot** (Required): Upload a screenshot of a website whose design you like
  - The AI will analyze the colors, layout, and style
  - Supported formats: JPG, PNG, WebP
- **Logo** (Optional): Upload your company logo
  - Will be integrated into the generated landing page
  - Supported formats: JPG, PNG, SVG

### Step 3: Generate
- Click the **"Generate Landing Page"** button
- Wait 10-30 seconds while AI creates your page
- The AI analyzes the screenshot and creates a custom landing page

### Step 4: Preview & Export
- **Preview Tab**: See how your landing page looks
- **Code Tab**: View the generated HTML code
- **Copy Code**: Copy the HTML to your clipboard
- **Download HTML**: Download a complete HTML file

## 💡 Tips for Best Results

1. **Choose Good Screenshots**:
   - Use screenshots of professional, well-designed websites
   - Ensure the screenshot shows clear design elements
   - Higher resolution images work better

2. **Write Clear Descriptions**:
   - Be specific about your company's value proposition
   - Include key features or services
   - Mention your target audience

3. **Logo Guidelines**:
   - Use transparent PNG for best results
   - Ensure logo is high quality
   - Square or horizontal logos work best

## 🎨 Customizing Generated Pages

The generated HTML uses Tailwind CSS classes. To customize:

1. **Download the HTML file**
2. **Edit the Tailwind classes** to change:
   - Colors: `bg-blue-500`, `text-purple-600`
   - Spacing: `p-4`, `m-8`, `gap-6`
   - Layout: `flex`, `grid`, `container`
3. **Add your own content** by editing the text
4. **Replace placeholder images** with your own

## 🔧 Troubleshooting

### Server won't start
```bash
# Kill any process using port 3000
lsof -ti:3000 | xargs kill -9

# Try starting again
npm run dev
```

### Build errors
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Build again
npm run build
```

### Images not uploading
- Check file size (keep under 10MB)
- Ensure file format is supported (JPG, PNG, WebP)
- Try a different browser

## 📦 Production Deployment

### Deploy to Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Build for Self-Hosting
```bash
# Create production build
npm run build

# Start production server
npm start
```

## 🎯 Example Use Cases

1. **Startup Landing Page**: Upload a screenshot of a modern SaaS website
2. **Product Launch**: Create a landing page for a new product
3. **Portfolio Site**: Generate a professional portfolio page
4. **Event Page**: Create a landing page for an event or conference
5. **Service Business**: Generate a page for consulting or agency services

## 📚 Next Steps

- Customize the generated HTML with your branding
- Add analytics tracking (Google Analytics, Plausible, etc.)
- Connect a contact form to your email service
- Deploy to your custom domain
- A/B test different designs by generating multiple versions

## 🆘 Need Help?

- Check the main [README.md](./README.md) for detailed documentation
- Review the code in `/components` to understand how it works
- Open an issue if you encounter bugs

---

Happy building! 🎉
