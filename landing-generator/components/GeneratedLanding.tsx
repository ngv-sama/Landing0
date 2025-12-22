"use client";

import { GeneratedContent } from "@/types";

interface GeneratedLandingProps {
  content: GeneratedContent | null;
}

export default function GeneratedLanding({ content }: GeneratedLandingProps) {
  if (!content) return null;

  return (
    <div 
      className="w-full min-h-[600px] bg-white"
      dangerouslySetInnerHTML={{ __html: content.html }}
    />
  );
}
