'use client';

import { useState } from 'react';
import GeneratorForm from '@/components/GeneratorForm';
import LandingPagePreview from '@/components/LandingPagePreview';

export default function Home() {
  const [generatedData, setGeneratedData] = useState<any>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Landing Page Generator
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Upload a screenshot, add your company details, and let AI create a stunning landing page for you
          </p>
        </div>

        {!generatedData ? (
          <GeneratorForm
            onGenerate={setGeneratedData}
            isGenerating={isGenerating}
            setIsGenerating={setIsGenerating}
          />
        ) : (
          <LandingPagePreview
            data={generatedData}
            onReset={() => setGeneratedData(null)}
          />
        )}
      </main>
    </div>
  );
}
