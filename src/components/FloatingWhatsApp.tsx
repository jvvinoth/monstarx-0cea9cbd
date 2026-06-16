import { useState } from 'react';
import { MessageCircle, Send, MessageSquare, X } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

const iconMap = {
  MessageCircle,
  Send,
  MessageSquare,
};

export default function FloatingCTA() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Contact us"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-200"
      >
        {isOpen ? (
          <X className="w-7 h-7 md:w-8 md:h-8" />
        ) : (
          <MessageCircle className="w-7 h-7 md:w-8 md:h-8 animate-pulse-subtle" />
        )}
      </button>

      {/* Platform Options Menu */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 w-72 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="text-sm font-semibold text-gray-900 mb-3 px-2">
            Choose your platform
          </div>
          <div className="space-y-2">
            {siteContent.floatingCTA.platforms.map((platform, idx) => {
              const Icon = iconMap[platform.icon as keyof typeof iconMap];
              return (
                <a
                  key={idx}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors duration-200 group"
                  onClick={() => setIsOpen(false)}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
                    style={{ backgroundColor: `${platform.color}20` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: platform.color }} />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-gray-900">
                      {platform.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      Start chatting
                    </div>
                  </div>
                  <div className="text-gray-400 group-hover:text-gray-600 transition-colors">
                    →
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
