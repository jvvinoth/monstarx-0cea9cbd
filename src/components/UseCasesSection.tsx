import { UtensilsCrossed, Briefcase, Scissors, Hammer, ShoppingBag, Music } from 'lucide-react';
import { siteContent } from '../lib/siteContent';
import { useEffect, useRef } from 'react';

const iconMap = {
  UtensilsCrossed,
  Briefcase,
  Scissors,
  Hammer,
  ShoppingBag,
  Music,
};

const colorMap = {
  emerald: 'text-emerald-600 bg-emerald-50',
  blue: 'text-blue-600 bg-blue-50',
  pink: 'text-pink-600 bg-pink-50',
  orange: 'text-orange-600 bg-orange-50',
  purple: 'text-purple-600 bg-purple-50',
  indigo: 'text-indigo-600 bg-indigo-50',
};

export default function UseCasesSection() {
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
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="fade-in-up text-4xl md:text-5xl font-semibold text-secondary mb-4 tracking-tight" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>
            {siteContent.useCases.heading}
          </h2>
          <p className="fade-in-up text-lg text-gray-600 max-w-2xl mx-auto" style={{ animationDelay: '0.1s' }}>
            {siteContent.useCases.subtext}
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteContent.useCases.cases.map((useCase, idx) => {
            const Icon = iconMap[useCase.icon as keyof typeof iconMap];
            const colorClass = colorMap[useCase.color as keyof typeof colorMap];
            
            return (
              <div
                key={idx}
                className="fade-in-up bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl ${colorClass} flex items-center justify-center mb-4`}>
                  <Icon className="w-7 h-7" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-secondary mb-3" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>
                  {useCase.title}
                </h3>

                {/* Description */}
                <p className="text-base text-gray-600 leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
