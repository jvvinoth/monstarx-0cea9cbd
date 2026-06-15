import { MessageCircle } from 'lucide-react';
import { siteContent } from '../lib/siteContent';
import { useEffect, useRef } from 'react';

export default function FinalCTASection() {
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
    <section ref={sectionRef} className="bg-background py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        {/* Heading */}
        <h2 className="fade-in-up text-4xl md:text-6xl font-bold text-secondary mb-6 tracking-tight" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>
          {siteContent.finalCTA.heading}
        </h2>

        {/* Subtext */}
        <p className="fade-in-up text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed" style={{ animationDelay: '0.1s' }}>
          {siteContent.finalCTA.subtext}
        </p>

        {/* Primary CTA */}
        <a
          href={siteContent.finalCTA.cta.href}
          target="_blank"
          rel="noopener noreferrer"
          className="fade-in-up inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 mb-6"
          style={{ animationDelay: '0.2s' }}
        >
          <MessageCircle className="w-5 h-5" />
          {siteContent.finalCTA.cta.text}
        </a>

        {/* Alternative Channels */}
        <div className="fade-in-up flex items-center justify-center gap-4 text-sm text-gray-600" style={{ animationDelay: '0.3s' }}>
          <span>Or reach us on:</span>
          {siteContent.finalCTA.altChannels.map((channel, idx) => (
            <a
              key={idx}
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-accent font-medium transition-colors underline"
            >
              {channel.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
