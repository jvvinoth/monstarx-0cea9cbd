import { MessageCircle, Send, MessageSquare } from 'lucide-react';
import { siteContent } from '../lib/siteContent';
import { useEffect, useRef } from 'react';

const iconMap = {
  MessageCircle,
  Send,
  MessageSquare,
};

export default function HeroSection() {
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
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="fade-in-up">
            {/* Badge */}
            <span className="inline-block bg-surface text-sm font-medium text-gray-700 px-4 py-1.5 rounded-full mb-6">
              {siteContent.hero.badge}
            </span>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-bold text-secondary leading-tight tracking-tight mb-6" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>
              {siteContent.hero.headline.part1} <span className="text-primary">{siteContent.hero.headline.part2}</span>{siteContent.hero.headline.part3}
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-xl">
              {siteContent.hero.subheadline}
            </p>

            {/* Platform Badges - Equal Showcase */}
            <div className="flex flex-wrap gap-3 mb-8">
              {siteContent.hero.platforms.map((platform, idx) => {
                const Icon = iconMap[platform.icon as keyof typeof iconMap];
                return (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-2 bg-white border-2 px-4 py-2 rounded-full text-sm font-semibold shadow-sm transition-all duration-200"
                    style={{ borderColor: platform.color, color: platform.color }}
                  >
                    <Icon className="w-4 h-4" />
                    {platform.name}
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons - All Three Platforms */}
            <div className="space-y-3">
              {/* Primary CTA */}
              <a
                href={siteContent.hero.cta.primary.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 w-full sm:w-auto justify-center"
              >
                <MessageCircle className="w-5 h-5" />
                {siteContent.hero.cta.primary.text}
              </a>

              {/* Secondary CTAs - Equal Prominence */}
              <div className="flex gap-3">
                {siteContent.hero.cta.secondary.map((cta, idx) => {
                  const Icon = iconMap[cta.icon as keyof typeof iconMap];
                  return (
                    <a
                      key={idx}
                      href={cta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white text-gray-700 border-2 border-gray-200 px-6 py-3 rounded-full text-base font-semibold shadow-md hover:shadow-lg hover:scale-105 hover:border-gray-300 transition-all duration-200 flex-1 justify-center"
                    >
                      <Icon className="w-4 h-4" />
                      {cta.text}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Secondary Text */}
            <p className="text-sm text-muted mt-4">
              {siteContent.hero.secondaryText}
            </p>
          </div>

          {/* Right Column - Chat to Website Visual */}
          <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Chat Interface - Multi-platform Header */}
              <div className="bg-white rounded-2xl shadow-2xl p-6 mb-8 border border-gray-200">
                <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-200">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <span className="text-xs text-gray-500 ml-2" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    WhatsApp • Telegram • Line
                  </span>
                </div>
                <div className="space-y-3">
                  {siteContent.hero.chatMessages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`${
                        msg.sender === 'user' ? 'ml-8' : 'mr-8'
                      }`}
                    >
                      <div
                        className={`p-3 rounded-2xl ${
                          msg.sender === 'user'
                            ? 'bg-primary text-white ml-auto'
                            : 'bg-surface text-gray-800'
                        }`}
                        style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '13px' }}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Arrow/Transform Indicator */}
              <div className="flex justify-center mb-8">
                <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  ↓ Transforms into ↓
                </div>
              </div>

              {/* Browser Window Mockup */}
              <div className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
                {/* Browser Chrome */}
                <div className="bg-gray-100 px-4 py-2 flex items-center gap-2 border-b border-gray-200">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                  </div>
                  <div className="flex-1 bg-white rounded px-3 py-1 text-xs text-gray-500" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    sweettreats.com
                  </div>
                </div>
                {/* Website Preview */}
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>
                      Sweet Treats Bakery
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">Custom cakes • Cupcakes • Delivery</p>
                    <div className="flex gap-2 justify-center">
                      <div className="bg-primary text-white text-xs px-3 py-1.5 rounded-full font-medium">Menu</div>
                      <div className="bg-white text-gray-700 text-xs px-3 py-1.5 rounded-full font-medium border border-gray-200">Order Now</div>
                      <div className="bg-white text-gray-700 text-xs px-3 py-1.5 rounded-full font-medium border border-gray-200">Contact</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
