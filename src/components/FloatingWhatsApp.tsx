import { MessageCircle } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export default function FloatingWhatsApp() {
  return (
    <a
      href={siteContent.floatingWhatsApp.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={siteContent.floatingWhatsApp.label}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-200 animate-pulse-subtle"
    >
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />
    </a>
  );
}
