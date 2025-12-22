import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const companyName = formData.get("companyName") as string;
    const companyDetails = formData.get("companyDetails") as string;
    const screenshot = formData.get("screenshot") as File;
    const logo = formData.get("logo") as File | null;

    if (!companyName || !companyDetails || !screenshot) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Convert screenshot to base64
    const screenshotBuffer = await screenshot.arrayBuffer();
    const screenshotBase64 = Buffer.from(screenshotBuffer).toString("base64");
    const screenshotDataUrl = `data:${screenshot.type};base64,${screenshotBase64}`;

    // Convert logo to base64 if provided
    let logoDataUrl = null;
    if (logo) {
      const logoBuffer = await logo.arrayBuffer();
      const logoBase64 = Buffer.from(logoBuffer).toString("base64");
      logoDataUrl = `data:${logo.type};base64,${logoBase64}`;
    }

    // Call Blackbox API to analyze screenshot and generate landing page
    const prompt = `You are a professional web designer. Analyze the provided website screenshot and create a beautiful, modern landing page HTML for the following company:

Company Name: ${companyName}
Company Details: ${companyDetails}
${logoDataUrl ? "A company logo has been provided." : "No logo provided."}

Based on the screenshot's design style, color scheme, and layout, create a complete, standalone HTML landing page that:
1. Uses Tailwind CSS classes (assume Tailwind CDN is loaded)
2. Includes a hero section with the company name and details
3. Features sections for: About, Features/Services, and Call-to-Action
4. Uses modern design principles with gradients, shadows, and smooth animations
5. Is fully responsive and mobile-friendly
6. Incorporates the color scheme and design style from the screenshot
7. ${logoDataUrl ? "Includes the company logo in the header" : "Uses the company name as the header"}
8. Has smooth scroll animations and hover effects
9. Includes a contact section or CTA button

Return ONLY the HTML body content (everything that goes inside <body> tags), without the <!DOCTYPE>, <html>, <head>, or <body> tags. Use inline Tailwind classes and include any necessary inline styles. Make it visually stunning and professional.`;

    const blackboxResponse = await fetch("https://api.blackbox.ai/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: [
          {
            role: "user",
            content: prompt,
            data: {
              imageData: [screenshotDataUrl],
              fileText: "",
              title: ""
            }
          }
        ],
        previewToken: null,
        userId: null,
        codeModelMode: true,
        agentMode: {},
        trendingAgentMode: {},
        isMicMode: false,
        userSystemPrompt: null,
        maxTokens: 4096,
        playgroundTopP: 0.9,
        playgroundTemperature: 0.5,
        isChromeExt: false,
        githubToken: null,
        clickedAnswer2: false,
        clickedAnswer3: false,
        clickedForceWebSearch: false,
        visitFromDelta: false,
        mobileClient: false,
        userSelectedModel: null,
        validated: "00f37b34-a166-4efb-bfed-0d5f4af3b06d"
      }),
    });

    if (!blackboxResponse.ok) {
      throw new Error("Blackbox API request failed");
    }

    const blackboxData = await blackboxResponse.text();
    
    // Extract HTML from the response
    let generatedHtml = blackboxData;
    
    // Clean up the response - remove markdown code blocks if present
    generatedHtml = generatedHtml.replace(/```html\n?/g, "").replace(/```\n?/g, "");
    
    // If logo is provided, inject it into the HTML
    if (logoDataUrl && generatedHtml) {
      // Try to find a suitable place to inject the logo
      // This is a simple approach - in production, you'd want more sophisticated HTML parsing
      generatedHtml = generatedHtml.replace(
        /(<nav[^>]*>)/i,
        `$1<img src="${logoDataUrl}" alt="${companyName} logo" class="h-12 w-auto" />`
      );
    }

    return NextResponse.json({
      companyName,
      html: generatedHtml,
      logoDataUrl,
    });
  } catch (error) {
    console.error("Error generating landing page:", error);
    return NextResponse.json(
      { error: "Failed to generate landing page" },
      { status: 500 }
    );
  }
}
