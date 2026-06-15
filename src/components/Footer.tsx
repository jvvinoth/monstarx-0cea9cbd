import { MessageCircle, Send, MessageSquare } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

const iconMap = {
  MessageCircle,
  Send,
  MessageSquare,
};

export default function Footer() {
  return (
    <footer className="bg-surface py-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Left - Branding */}
          <div>
            <div className="text-2xl font-bold text-secondary mb-3" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>
              {siteContent.footer.logo}
            </div>
            <p className="text-base text-gray-600 mb-6 max-w-sm">
              {siteContent.footer.tagline}
            </p>
            <div className="inline-block bg-primary/10 text-primary text-sm font-medium px-4 py-2 rounded-full">
              {siteContent.footer.socialProof}
            </div>
          </div>

          {/* Right - Contact Links */}
          <div>
            <h3 className="text-lg font-semibold text-secondary mb-4" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>
              Get in touch
            </h3>
            <div className="space-y-3">
              {siteContent.footer.contact.map((contact, idx) => {
                const Icon = iconMap[contact.icon as keyof typeof iconMap];
                return (
                  <a
                    key={idx}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-700 hover:text-primary transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center group-hover:border-primary transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-medium">{contact.platform}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          {siteContent.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
