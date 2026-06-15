import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
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
          {/* Logo */}
          <div className="text-2xl font-bold text-secondary" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>
            {siteContent.header.logo}
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
            <span className="sm:hidden">Order</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
