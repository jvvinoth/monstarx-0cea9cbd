import { MessageSquare, Sparkles, Zap } from 'lucide-react';
import { siteContent } from '../lib/siteContent';
import { useEffect, useRef } from 'react';

const iconMap = {
  MessageSquare,
  Sparkles,
  Zap,
};

export default function HowItWorksSection() {
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
    <section id="how-it-works" ref={sectionRef} className="bg-surface py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
        {/* Section Heading */}
        <h2 className="fade-in-up text-4xl md:text-5xl font-semibold text-secondary mb-4 tracking-tight" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>
          {siteContent.howItWorks.heading}
        </h2>
        <p className="fade-in-up text-lg text-gray-600 mb-16 max-w-2xl mx-auto" style={{ animationDelay: '0.1s' }}>
          {siteContent.howItWorks.subtext}
        </p>

        {/* 3-Step Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {siteContent.howItWorks.steps.map((step, idx) => {
            const Icon = iconMap[step.icon as keyof typeof iconMap];
            return (
              <div
                key={step.number}
                className="fade-in-up text-center"
                style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
              >
                {/* Number Badge */}
                <div className="bg-primary/10 text-primary w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold mb-4 mx-auto">
                  {step.number}
                </div>

                {/* Icon */}
                <Icon className="w-12 h-12 text-primary mb-4 mx-auto" />

                {/* Heading */}
                <h3 className="text-xl font-semibold text-secondary mb-3" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>
                  {step.heading}
                </h3>

                {/* Copy */}
                <p className="text-base text-gray-600 leading-relaxed">
                  {step.copy}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
