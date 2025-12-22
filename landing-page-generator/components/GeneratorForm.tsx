'use client';

import { useState, useRef } from 'react';
import axios from 'axios';

interface GeneratorFormProps {
  onGenerate: (data: any) => void;
  isGenerating: boolean;
  setIsGenerating: (value: boolean) => void;
}

export default function GeneratorForm({
  onGenerate,
  isGenerating,
  setIsGenerating,
}: GeneratorFormProps) {
  const [companyName, setCompanyName] = useState('');
  const [companyDetails, setCompanyDetails] = useState('');
  const [screenshot, setScreenshot] = useState<File | null>(null);
  const [logo, setLogo] = useState<File | null>(null);
  const [screenshotPreview, setScreenshotPreview] = useState<string | null>(null);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);

  const screenshotInputRef = useRef<HTMLInputElement>(null);
  const logoInputRef = useRef<HTMLInputElement>(null);

  const handleScreenshotChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setScreenshot(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setScreenshotPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setLogo(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);

    try {
      const formData = new FormData();
      formData.append('companyName', companyName);
      formData.append('companyDetails', companyDetails);
      if (screenshot) formData.append('screenshot', screenshot);
      if (logo) formData.append('logo', logo);

      const response = await axios.post('/api/generate', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      onGenerate({
        ...response.data,
        logoPreview,
        companyName,
      });
    } catch (error) {
      console.error('Error generating landing page:', error);
      alert('Failed to generate landing page. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-2xl p-8 space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Company Name
          </label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
            placeholder="Enter your company name"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Company Details
          </label>
          <textarea
            value={companyDetails}
            onChange={(e) => setCompanyDetails(e.target.value)}
            required
            rows={4}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition resize-none"
            placeholder="Describe your company, products, or services..."
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Website Screenshot
            </label>
            <input
              ref={screenshotInputRef}
              type="file"
              onChange={handleScreenshotChange}
              accept="image/*"
              className="hidden"
            />
            <button
              type="button"
              onClick={() => screenshotInputRef.current?.click()}
              className="w-full h-32 border-2 border-dashed border-gray-300 rounded-xl hover:border-purple-500 transition flex items-center justify-center"
            >
              {screenshotPreview ? (
                <img
                  src={screenshotPreview}
                  alt="Screenshot preview"
                  className="h-full w-full object-cover rounded-xl"
                />
              ) : (
                <div className="text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="mt-2 text-sm text-gray-500">Upload Screenshot</p>
                </div>
              )}
            </button>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Company Logo
            </label>
            <input
              ref={logoInputRef}
              type="file"
              onChange={handleLogoChange}
              accept="image/*"
              className="hidden"
            />
            <button
              type="button"
              onClick={() => logoInputRef.current?.click()}
              className="w-full h-32 border-2 border-dashed border-gray-300 rounded-xl hover:border-purple-500 transition flex items-center justify-center"
            >
              {logoPreview ? (
                <img
                  src={logoPreview}
                  alt="Logo preview"
                  className="h-full w-full object-contain rounded-xl p-4"
                />
              ) : (
                <div className="text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="mt-2 text-sm text-gray-500">Upload Logo</p>
                </div>
              )}
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={isGenerating}
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isGenerating ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Generating...
            </span>
          ) : (
            'Generate Landing Page'
          )}
        </button>
      </form>
    </div>
  );
}
