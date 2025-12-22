"use client";

import { useState } from "react";
import GeneratedLanding from "./GeneratedLanding";
import { GeneratedContent } from "@/types";

interface PreviewPaneProps {
  content: GeneratedContent | null;
  isGenerating: boolean;
}

export default function PreviewPane({ content, isGenerating }: PreviewPaneProps) {
  const [showCode, setShowCode] = useState(false);

  const handleDownload = () => {
    if (!content) return;

    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${content.companyName} - Landing Page</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
    body { font-family: 'Inter', sans-serif; }
  </style>
</head>
<body>
${content.html}
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${content.companyName.toLowerCase().replace(/\s+/g, "-")}-landing-page.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleCopyCode = () => {
    if (!content) return;
    navigator.clipboard.writeText(content.html);
    alert("Code copied to clipboard!");
  };

  if (isGenerating) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-purple-100">
        <div className="flex flex-col items-center justify-center py-20">
          <div className="relative w-24 h-24 mb-6">
            <div className="absolute inset-0 border-4 border-purple-200 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-purple-600 rounded-full border-t-transparent animate-spin"></div>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Generating Your Landing Page
          </h3>
          <p className="text-gray-600 text-center max-w-md">
            Our AI is analyzing your screenshot and creating a beautiful landing page...
          </p>
        </div>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-purple-100">
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-24 h-24 mb-6 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
            <svg
              className="w-12 h-12 text-purple-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Ready to Create
          </h3>
          <p className="text-gray-600 max-w-md">
            Fill in your company details and upload a screenshot to generate your landing page
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-purple-100 overflow-hidden">
      {/* Header with tabs */}
      <div className="border-b border-gray-200 bg-gray-50 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex space-x-4">
            <button
              onClick={() => setShowCode(false)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                !showCode
                  ? "bg-white text-purple-600 shadow-sm"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Preview
            </button>
            <button
              onClick={() => setShowCode(true)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                showCode
                  ? "bg-white text-purple-600 shadow-sm"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Code
            </button>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={handleCopyCode}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg font-medium transition-all"
            >
              Copy Code
            </button>
            <button
              onClick={handleDownload}
              className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg font-medium transition-all"
            >
              Download HTML
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {showCode ? (
          <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
            <pre className="text-sm text-green-400 font-mono">
              <code>{content.html}</code>
            </pre>
          </div>
        ) : (
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <GeneratedLanding content={content} />
          </div>
        )}
      </div>
    </div>
  );
}
