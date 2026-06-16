import { MessageCircle, Send, MessageSquare } from 'lucide-react';
import { siteContent } from '../lib/siteContent';
import { useEffect, useRef } from 'react';

const iconMap = {
  MessageCircle,
  Send,
  MessageSquare,
};

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

        {/* Platform CTAs - All Three Equally Featured */}
        <div className="fade-in-up grid md:grid-cols-3 gap-4 mb-6" style={{ animationDelay: '0.2s' }}>
          {siteContent.finalCTA.platforms.map((platform, idx) => {
            const Icon = iconMap[platform.icon as keyof typeof iconMap];
            return (
              <a
                key={idx}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-white border-2 px-6 py-6 rounded-2xl text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                style={{ borderColor: platform.color }}
              >
                {/* Background gradient on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  style={{ backgroundColor: platform.color }}
                ></div>
                
                {/* Icon */}
                <div className="relative mb-3 flex justify-center">
                  <div 
                    className="w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${platform.color}20` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: platform.color }} />
                  </div>
                </div>

                {/* Platform Name */}
                <div className="relative">
                  <div className="text-lg font-bold text-gray-900 mb-1">
                    {platform.name}
                  </div>
                  <div className="text-sm font-medium" style={{ color: platform.color }}>
                    Start chatting →
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Supporting Text */}
        <p className="fade-in-up text-sm text-muted" style={{ animationDelay: '0.3s' }}>
          Choose your preferred platform — we're ready on all three
        </p>
      </div>
    </section>
  );
}
