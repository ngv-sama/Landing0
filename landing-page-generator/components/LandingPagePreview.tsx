'use client';

interface LandingPagePreviewProps {
  data: any;
  onReset: () => void;
}

export default function LandingPagePreview({ data, onReset }: LandingPagePreviewProps) {
  const handleExport = () => {
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.companyName}</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    ${document.getElementById('preview-content')?.innerHTML || ''}
</body>
</html>
    `;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${data.companyName.toLowerCase().replace(/\s+/g, '-')}-landing-page.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8 flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-800">Your Generated Landing Page</h2>
        <div className="flex gap-4">
          <button
            onClick={handleExport}
            className="px-6 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition"
          >
            Export HTML
          </button>
          <button
            onClick={onReset}
            className="px-6 py-3 bg-gray-600 text-white rounded-xl font-semibold hover:bg-gray-700 transition"
          >
            Create New
          </button>
        </div>
      </div>

      <div id="preview-content" className="bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 text-white py-20 px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              {data.logoPreview && (
                <img
                  src={data.logoPreview}
                  alt={`${data.companyName} logo`}
                  className="h-16 w-auto bg-white p-2 rounded-lg"
                />
              )}
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  {data.headline}
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-purple-100">
                  {data.subheadline}
                </p>
                <div className="flex gap-4">
                  <button className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold text-lg hover:shadow-xl transition transform hover:scale-105">
                    Get Started
                  </button>
                  <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20">
                  <div className="aspect-video bg-gradient-to-br from-purple-400 to-blue-400 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-20 h-20 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Why Choose {data.companyName}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {data.valueProposition}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {data.features.map((feature: any, index: number) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{data.ctaHeadline}</h2>
            <p className="text-xl md:text-2xl mb-8 text-purple-100">
              {data.ctaSubheadline}
            </p>
            <button className="px-12 py-5 bg-white text-purple-600 rounded-full font-bold text-xl hover:shadow-2xl transition transform hover:scale-105">
              {data.ctaButton}
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 px-8">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-gray-400">
              © 2025 {data.companyName}. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
