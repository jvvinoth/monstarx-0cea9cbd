import { siteContent } from '../lib/siteContent';
import { useEffect, useRef } from 'react';

export default function LiveExamplesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up-active');
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-in-up');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-surface py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="fade-in-up text-4xl md:text-5xl font-semibold text-secondary mb-4 tracking-tight" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>
            {siteContent.liveExamples.heading}
          </h2>
          <p className="fade-in-up text-lg text-gray-600 max-w-2xl mx-auto" style={{ animationDelay: '0.1s' }}>
            {siteContent.liveExamples.subtext}
          </p>
        </div>

        {/* Examples */}
        <div className="space-y-20">
          {siteContent.liveExamples.examples.map((example, exampleIdx) => (
            <div
              key={exampleIdx}
              className="fade-in-up"
              style={{ animationDelay: `${0.2 + exampleIdx * 0.2}s` }}
            >
              {/* Business Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-secondary mb-1" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>
                  {example.businessName}
                </h3>
                <p className="text-sm text-gray-500 uppercase tracking-wide font-medium">
                  {example.businessType}
                </p>
              </div>

              {/* Before/After Grid */}
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                {/* Chat Transcript (Before) */}
                <div>
                  <div className="bg-gray-800 text-gray-400 text-xs font-medium px-4 py-2 rounded-t-xl" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    CHAT TRANSCRIPT
                  </div>
                  <div className="bg-white rounded-b-xl shadow-lg p-6 border border-gray-200">
                    <div className="space-y-3">
                      {example.chat.map((msg, idx) => (
                        <div
                          key={idx}
                          className={`${
                            msg.sender === 'user' ? 'ml-6' : 'mr-6'
                          }`}
                        >
                          <div
                            className={`p-3 rounded-2xl text-sm ${
                              msg.sender === 'user'
                                ? 'bg-primary text-white ml-auto'
                                : 'bg-gray-100 text-gray-800'
                            }`}
                            style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '13px' }}
                          >
                            {msg.text}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Site Preview (After) */}
                <div>
                  <div className="bg-primary text-white text-xs font-medium px-4 py-2 rounded-t-xl" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    LIVE WEBSITE
                  </div>
                  <div className="bg-white rounded-b-xl shadow-lg border border-gray-200 overflow-hidden">
                    {/* Browser Chrome */}
                    <div className="bg-gray-100 px-3 py-2 flex items-center gap-2 border-b border-gray-200">
                      <div className="flex gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-red-400"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      </div>
                      <div className="flex-1 bg-white rounded px-2 py-1 text-xs text-gray-500" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                        {example.businessName.toLowerCase().replace(/[^a-z0-9]/g, '')}.com
                      </div>
                    </div>
                    
                    {/* Site Preview Content */}
                    <div className="p-8 bg-gradient-to-br from-gray-50 to-white">
                      <div className="text-center mb-6">
                        <div className="w-full h-32 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg mb-4 flex items-center justify-center text-gray-500 text-sm">
                          Hero Image
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>
                          {example.sitePreview.heroText}
                        </h4>
                        <div className="flex gap-2 justify-center flex-wrap">
                          {example.sitePreview.sections.map((section, idx) => (
                            <div
                              key={idx}
                              className={`text-xs px-3 py-1.5 rounded-full font-medium ${
                                idx === 0
                                  ? 'bg-primary text-white'
                                  : 'bg-white border border-gray-200 text-gray-700'
                              }`}
                            >
                              {section}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="text-xs text-gray-500 text-center italic">
                        {example.sitePreview.visualDescription}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
