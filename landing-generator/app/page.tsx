"use client";

import { useState } from "react";
import InputForm from "@/components/InputForm";
import PreviewPane from "@/components/PreviewPane";
import { GeneratedContent } from "@/types";

export default function Home() {
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async (formData: FormData) => {
    setIsGenerating(true);
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to generate landing page");
      }

      const data = await response.json();
      setGeneratedContent(data);
    } catch (error) {
      console.error("Error generating landing page:", error);
      alert("Failed to generate landing page. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      {/* Header */}
      <header className="border-b border-purple-100 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Landing Page Generator
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="mb-12 text-center">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
            Create Beautiful Landing Pages
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Upload a screenshot of any website, add your company details, and let AI generate a stunning landing page for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <div className="lg:sticky lg:top-8 h-fit">
            <InputForm onGenerate={handleGenerate} isGenerating={isGenerating} />
          </div>

          {/* Preview Pane */}
          <div>
            <PreviewPane content={generatedContent} isGenerating={isGenerating} />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-purple-100 bg-white/50 backdrop-blur-sm mt-20">
        <div className="container mx-auto px-6 py-8 text-center text-gray-600">
          <p>Powered by Blackbox AI</p>
        </div>
      </footer>
    </div>
  );
}
