import { useState, useEffect } from 'react';
import { MessageCircle, Send, MessageSquare } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector(siteContent.header.navLink.href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo with Animated Icons */}
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <MorphingIcons />
            </div>
            <div className="text-2xl font-bold text-secondary" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>
              {siteContent.header.logo}
            </div>
          </div>

          {/* Center Nav Link (Desktop Only) */}
          <a
            href={siteContent.header.navLink.href}
            onClick={handleNavClick}
            className="hidden md:block text-base font-medium text-gray-700 hover:text-primary transition-colors"
          >
            {siteContent.header.navLink.text}
          </a>

          {/* CTA Button */}
          <a
            href={siteContent.header.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-white px-4 md:px-6 py-2 md:py-2.5 rounded-full text-sm md:text-base font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">{siteContent.header.cta.text}</span>
            <span className="sm:hidden">Start</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

// Morphing Icons Animation Component
function MorphingIcons() {
  const [phase, setPhase] = useState<'flowing' | 'unified'>('flowing');
  const [iconIndex, setIconIndex] = useState(0);

  useEffect(() => {
    // Flowing phase: cycle through icons
    if (phase === 'flowing') {
      const interval = setInterval(() => {
        setIconIndex((prev) => (prev + 1) % 3);
      }, 800);

      // After 3 cycles, move to unified
      const unifyTimer = setTimeout(() => {
        setPhase('unified');
      }, 2400);

      return () => {
        clearInterval(interval);
        clearTimeout(unifyTimer);
      };
    }

    // Unified phase: stay for a moment, then loop back
    if (phase === 'unified') {
      const resetTimer = setTimeout(() => {
        setPhase('flowing');
        setIconIndex(0);
      }, 2000);

      return () => clearTimeout(resetTimer);
    }
  }, [phase, iconIndex]);

  const icons = [
    { Icon: MessageCircle, color: '#25D366' }, // WhatsApp
    { Icon: Send, color: '#0088cc' },         // Telegram
    { Icon: MessageSquare, color: '#00B900' } // Line
  ];

  if (phase === 'unified') {
    // Show all three blended together as a unified symbol
    return (
      <div className="relative w-full h-full">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <MessageCircle 
              className="w-6 h-6 absolute top-0 left-0 transition-all duration-500" 
              style={{ 
                color: '#25D366',
                opacity: 0.4,
                transform: 'translate(-2px, -2px)'
              }} 
            />
            <Send 
              className="w-6 h-6 absolute top-0 left-0 transition-all duration-500" 
              style={{ 
                color: '#0088cc',
                opacity: 0.4,
                transform: 'translate(2px, -2px)'
              }} 
            />
            <MessageSquare 
              className="w-6 h-6 absolute top-0 left-0 transition-all duration-500" 
              style={{ 
                color: '#00B900',
                opacity: 0.4,
                transform: 'translate(0px, 2px)'
              }} 
            />
            {/* Central unified icon */}
            <MessageCircle 
              className="w-6 h-6 relative transition-all duration-500" 
              style={{ 
                color: '#059669',
                opacity: 1
              }} 
            />
          </div>
        </div>
      </div>
    );
  }

  // Flowing phase: show current icon with transition
  const currentIcon = icons[iconIndex];
  const CurrentIcon = currentIcon.Icon;

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <CurrentIcon
        className="w-6 h-6 transition-all duration-500 animate-in fade-in zoom-in"
        style={{ color: currentIcon.color }}
      />
    </div>
  );
}
