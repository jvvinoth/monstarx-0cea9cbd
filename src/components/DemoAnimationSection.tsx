import { useEffect, useState } from 'react';
import { siteContent } from '../lib/siteContent';
import { Sparkles, Layout, Palette, FileText, Zap } from 'lucide-react';

const DemoAnimationSection = () => {
  const { heading, subtext, animation } = siteContent.demoAnimation;
  const [step, setStep] = useState<'chat' | 'building' | 'site'>('chat');
  const [chatIndex, setChatIndex] = useState(0);
  const [buildingIndex, setBuildingIndex] = useState(0);

  useEffect(() => {
    // Reset animation
    const resetAnimation = () => {
      setStep('chat');
      setChatIndex(0);
      setBuildingIndex(0);
    };

    // Chat phase
    if (step === 'chat') {
      if (chatIndex < animation.chatMessages.length) {
        const currentMessage = animation.chatMessages[chatIndex];
        const timer = setTimeout(() => {
          setChatIndex(chatIndex + 1);
        }, currentMessage.delay + 1500);
        return () => clearTimeout(timer);
      } else {
        // Move to building phase
        const timer = setTimeout(() => {
          setStep('building');
        }, 500);
        return () => clearTimeout(timer);
      }
    }

    // Building phase
    if (step === 'building') {
      if (buildingIndex < animation.buildingPhase.elements.length) {
        const timer = setTimeout(() => {
          setBuildingIndex(buildingIndex + 1);
        }, 400);
        return () => clearTimeout(timer);
      } else {
        // Move to final site phase
        const timer = setTimeout(() => {
          setStep('site');
        }, 800);
        return () => clearTimeout(timer);
      }
    }

    // Final site phase - loop back
    if (step === 'site') {
      const timer = setTimeout(() => {
        resetAnimation();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [step, chatIndex, buildingIndex, animation]);

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {heading}
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            {subtext}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Chat Interface */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden transition-all duration-500"
            style={{ 
              opacity: step === 'chat' ? 1 : 0.4,
              transform: step === 'chat' ? 'scale(1)' : 'scale(0.95)'
            }}>
            <div className="bg-emerald-600 px-4 py-3 flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-white text-sm font-medium">Chat with MonPage</span>
            </div>
            <div className="p-4 space-y-3 min-h-[320px]">
              {animation.chatMessages.slice(0, chatIndex).map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2 rounded-2xl ${
                      msg.sender === 'user'
                        ? 'bg-emerald-600 text-white rounded-br-sm'
                        : 'bg-slate-100 text-slate-900 rounded-bl-sm'
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Building Phase */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 flex flex-col items-center justify-center transition-all duration-500"
            style={{ 
              opacity: step === 'building' ? 1 : 0.4,
              transform: step === 'building' ? 'scale(1)' : 'scale(0.95)'
            }}>
            <div className="relative mb-6">
              <Sparkles className="w-16 h-16 text-emerald-600 animate-pulse" />
              <div className="absolute inset-0 bg-emerald-400 blur-xl opacity-30 animate-pulse"></div>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-6">Building...</h3>
            <div className="space-y-3 w-full">
              {animation.buildingPhase.elements.map((element, idx) => {
                const icons = [Layout, Palette, FileText, Zap];
                const Icon = icons[idx];
                const isActive = idx < buildingIndex;
                const isCurrent = idx === buildingIndex - 1;
                return (
                  <div
                    key={idx}
                    className={`flex items-center gap-3 transition-all duration-300 ${
                      isActive ? 'opacity-100' : 'opacity-30'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      isActive ? 'bg-emerald-100' : 'bg-slate-100'
                    }`}>
                      <Icon className={`w-4 h-4 ${
                        isActive ? 'text-emerald-600' : 'text-slate-400'
                      } ${isCurrent ? 'animate-pulse' : ''}`} />
                    </div>
                    <span className={`text-sm font-medium ${
                      isActive ? 'text-slate-900' : 'text-slate-400'
                    }`}>
                      {element}
                    </span>
                    {isActive && (
                      <div className="ml-auto">
                        <div className="w-4 h-4 rounded-full bg-emerald-600 flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Final Website */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden transition-all duration-500"
            style={{ 
              opacity: step === 'site' ? 1 : 0.4,
              transform: step === 'site' ? 'scale(1)' : 'scale(0.95)'
            }}>
            <div className="bg-slate-100 px-3 py-2 flex items-center gap-2 border-b border-slate-200">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
              </div>
              <div className="flex-1 bg-white rounded px-2 py-0.5 text-xs text-slate-500">
                beanandbrewcafe.com
              </div>
            </div>
            <div className="min-h-[320px]">
              <div className="relative h-32 bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="relative text-center">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {animation.finalSite.heroText}
                  </h3>
                  <p className="text-amber-100 text-sm">
                    {animation.finalSite.tagline}
                  </p>
                </div>
              </div>
              <div className="p-4 space-y-3">
                {animation.finalSite.sections.map((section, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50 rounded-lg p-3 border border-slate-200 animate-in fade-in slide-in-from-bottom-1 duration-300"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded bg-amber-100"></div>
                      <div className="flex-1">
                        <div className="h-3 bg-slate-200 rounded w-20"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Phase Labels */}
        <div className="flex justify-center items-center gap-4 mt-12">
          <div className={`flex items-center gap-2 transition-opacity duration-300 ${
            step === 'chat' ? 'opacity-100' : 'opacity-40'
          }`}>
            <div className={`w-2 h-2 rounded-full ${step === 'chat' ? 'bg-emerald-600' : 'bg-slate-300'}`}></div>
            <span className="text-sm font-medium text-slate-600">Chat</span>
          </div>
          <div className="w-8 h-px bg-slate-200"></div>
          <div className={`flex items-center gap-2 transition-opacity duration-300 ${
            step === 'building' ? 'opacity-100' : 'opacity-40'
          }`}>
            <div className={`w-2 h-2 rounded-full ${step === 'building' ? 'bg-emerald-600' : 'bg-slate-300'}`}></div>
            <span className="text-sm font-medium text-slate-600">Building</span>
          </div>
          <div className="w-8 h-px bg-slate-200"></div>
          <div className={`flex items-center gap-2 transition-opacity duration-300 ${
            step === 'site' ? 'opacity-100' : 'opacity-40'
          }`}>
            <div className={`w-2 h-2 rounded-full ${step === 'site' ? 'bg-emerald-600' : 'bg-slate-300'}`}></div>
            <span className="text-sm font-medium text-slate-600">Live Site</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoAnimationSection;
