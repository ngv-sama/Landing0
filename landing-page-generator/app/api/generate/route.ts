import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const companyName = formData.get('companyName') as string;
    const companyDetails = formData.get('companyDetails') as string;
    const screenshot = formData.get('screenshot') as File;

    let screenshotAnalysis = '';

    if (screenshot) {
      const buffer = await screenshot.arrayBuffer();
      const base64Image = Buffer.from(buffer).toString('base64');

      const visionPrompt = `Analyze this website screenshot and describe:
1. The overall design style and color scheme
2. Key visual elements and layout patterns
3. The type of business or service it appears to be
4. Any notable features or sections

Keep the analysis concise and focused on design elements.`;

      try {
        const visionResponse = await axios.post(
          'https://api.blackbox.ai/v1/chat/completions',
          {
            messages: [
              {
                role: 'user',
                content: [
                  {
                    type: 'text',
                    text: visionPrompt,
                  },
                  {
                    type: 'image_url',
                    image_url: {
                      url: `data:${screenshot.type};base64,${base64Image}`,
                    },
                  },
                ],
              },
            ],
            model: 'gpt-4o',
            max_tokens: 500,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        screenshotAnalysis = visionResponse.data.choices[0].message.content;
      } catch (visionError) {
        console.error('Vision API error:', visionError);
        screenshotAnalysis = 'Unable to analyze screenshot';
      }
    }

    const contentPrompt = `Create compelling landing page content for ${companyName}.

Company Details: ${companyDetails}

${screenshotAnalysis ? `Design Inspiration: ${screenshotAnalysis}` : ''}

Generate a JSON response with the following structure:
{
  "headline": "A powerful, attention-grabbing headline (5-10 words)",
  "subheadline": "A compelling subheadline that explains the value proposition (15-25 words)",
  "valueProposition": "A clear statement of what makes this company unique (20-30 words)",
  "features": [
    {
      "title": "Feature 1 Title",
      "description": "Benefit-focused description (15-20 words)"
    },
    {
      "title": "Feature 2 Title",
      "description": "Benefit-focused description (15-20 words)"
    },
    {
      "title": "Feature 3 Title",
      "description": "Benefit-focused description (15-20 words)"
    }
  ],
  "ctaHeadline": "Call-to-action headline (5-8 words)",
  "ctaSubheadline": "Supporting CTA text (10-15 words)",
  "ctaButton": "Button text (2-4 words)"
}

Make it compelling, professional, and action-oriented. Focus on benefits over features. ONLY respond with valid JSON, no additional text.`;

    const contentResponse = await axios.post(
      'https://api.blackbox.ai/v1/chat/completions',
      {
        messages: [
          {
            role: 'user',
            content: contentPrompt,
          },
        ],
        model: 'blackboxai',
        max_tokens: 1500,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    let generatedContent = contentResponse.data.choices[0].message.content;

    generatedContent = generatedContent.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();

    const parsedContent = JSON.parse(generatedContent);

    return NextResponse.json(parsedContent);
  } catch (error: any) {
    console.error('Error generating landing page:', error);
    return NextResponse.json(
      { error: 'Failed to generate landing page', details: error.message },
      { status: 500 }
    );
  }
}
