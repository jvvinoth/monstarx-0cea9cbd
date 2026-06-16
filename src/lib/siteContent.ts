export const siteContent = {
  meta: {
    title: "MonPage — Text us. Get your website.",
    description: "Open WhatsApp, Telegram, or Lion. Describe your business. Your site goes live — no coding, no design decisions, no waiting.",
  },
  header: {
    logo: "MonPage",
    navLink: {
      text: "How it works",
      href: "#how-it-works"
    },
    cta: {
      text: "Order on WhatsApp",
      href: "https://wa.me/1234567890?text=Hi%2C%20I%20want%20to%20build%20my%20website"
    }
  },
  hero: {
    badge: "🚀 500+ sites built this week",
    headline: {
      part1: "Text us. Get",
      part2: "your website",
      part3: "."
    },
    subheadline: "Open WhatsApp, Telegram, or Lion. Describe your business. Your site goes live — no coding, no design decisions, no waiting.",
    cta: {
      text: "Start building on WhatsApp",
      href: "https://wa.me/1234567890?text=Hi%2C%20I%20want%20to%20build%20my%20website"
    },
    secondaryText: "No signup. No credit card. Just text.",
    chatMessages: [
      { sender: "user", text: "I run a bakery called Sweet Treats" },
      { sender: "monpage", text: "Great! What services do you offer?" },
      { sender: "user", text: "Custom cakes, cupcakes, delivery" },
      { sender: "monpage", text: "✓ Building your site..." }
    ]
  },
  howItWorks: {
    heading: "Three steps. Zero complexity.",
    subtext: "If you can send a text message, you can build a professional website.",
    steps: [
      {
        number: 1,
        icon: "MessageSquare",
        heading: "Open your chat app",
        copy: "WhatsApp, Telegram, or Lion — use what you already have."
      },
      {
        number: 2,
        icon: "Sparkles",
        heading: "Describe your business",
        copy: "Tell us what you do, who you serve, and what makes you special."
      },
      {
        number: 3,
        icon: "Zap",
        heading: "Your site goes live",
        copy: "We build, design, and publish. Usually within hours, not weeks."
      }
    ]
  },
  demoAnimation: {
    heading: "See it in action",
    subtext: "Watch how a conversation becomes a website in seconds",
    animation: {
      chatMessages: [
        { sender: "user", text: "I need a website for my coffee shop", delay: 0 },
        { sender: "monpage", text: "Perfect! What's the name and what makes it special?", delay: 1000 },
        { sender: "user", text: "Bean & Brew — artisan coffee, fresh pastries, cozy vibe", delay: 2000 },
        { sender: "monpage", text: "Great! Building your website now...", delay: 3000 }
      ],
      buildingPhase: {
        delay: 4000,
        duration: 2000,
        elements: ["Layout", "Design", "Content", "Optimize"]
      },
      finalSite: {
        delay: 6000,
        heroText: "Bean & Brew",
        tagline: "Artisan coffee & fresh pastries",
        sections: ["Menu", "Visit Us", "Order Online"]
      },
      loopDelay: 8000
    }
  },
  useCases: {
    heading: "Built for real businesses",
    subtext: "From solo founders to growing teams — if you have customers, you need a site.",
    cases: [
      {
        icon: "UtensilsCrossed",
        title: "Restaurants & Cafés",
        description: "Menu, hours, location, online ordering — everything your customers need to find you and order.",
        color: "emerald"
      },
      {
        icon: "Briefcase",
        title: "Consultants & Coaches",
        description: "Showcase your expertise, share testimonials, and make it easy to book your time.",
        color: "blue"
      },
      {
        icon: "Scissors",
        title: "Salons & Wellness",
        description: "Display services, pricing, and your portfolio. Let clients book appointments instantly.",
        color: "pink"
      },
      {
        icon: "Hammer",
        title: "Local Services",
        description: "Plumbers, electricians, cleaners — show your work, service area, and contact options.",
        color: "orange"
      },
      {
        icon: "ShoppingBag",
        title: "Online Stores",
        description: "Product catalog, cart, checkout — sell online without the complexity of Shopify.",
        color: "purple"
      },
      {
        icon: "Music",
        title: "Creators & Artists",
        description: "Portfolio, bookings, media kit — a home base for your creative work.",
        color: "indigo"
      }
    ]
  },
  liveExamples: {
    heading: "From chat to live site",
    subtext: "Real conversations. Real results. No mockups.",
    examples: [
      {
        businessName: "Bella's Bistro",
        businessType: "Italian Restaurant",
        chat: [
          { sender: "user", text: "I need a website for my Italian restaurant, Bella's Bistro" },
          { sender: "monpage", text: "Perfect! Tell me about your menu and atmosphere." },
          { sender: "user", text: "Homemade pasta, wood-fired pizza, cozy family vibe. We do dine-in and takeout." },
          { sender: "monpage", text: "Got it. What's your location and hours?" },
          { sender: "user", text: "123 Main St, open Tue-Sun 11am-10pm" }
        ],
        sitePreview: {
          heroText: "Authentic Italian in the heart of downtown",
          sections: ["Menu", "Reserve", "Location"],
          visualDescription: "Warm hero image of pasta dish, clean menu grid, map with hours"
        }
      },
      {
        businessName: "Marcus Chen Coaching",
        businessType: "Career Coach",
        chat: [
          { sender: "user", text: "Career coach looking for a simple site" },
          { sender: "monpage", text: "Great! Who do you help and what results do they get?" },
          { sender: "user", text: "Mid-career professionals pivoting to tech. 85% land offers within 3 months." },
          { sender: "monpage", text: "Love it. Do you have testimonials or a booking calendar?" },
          { sender: "user", text: "Yes, I'll send 3 testimonials and my Calendly link" }
        ],
        sitePreview: {
          heroText: "Land your dream tech role in 90 days",
          sections: ["Results", "Testimonials", "Book a call"],
          visualDescription: "Professional headshot, stats callouts, testimonial cards, calendar embed"
        }
      }
    ]
  },
  finalCTA: {
    heading: "Your website, one text away",
    subtext: "No forms to fill. No meetings to book. Just open your chat app and start.",
    cta: {
      text: "Start building on WhatsApp",
      href: "https://wa.me/1234567890?text=Hi%2C%20I%20want%20to%20build%20my%20website"
    },
    altChannels: [
      { name: "Telegram", href: "https://t.me/monpage" },
      { name: "Lion", href: "https://lion.com/monpage" }
    ]
  },
  footer: {
    logo: "MonPage",
    tagline: "Professional websites, zero complexity",
    contact: [
      { platform: "WhatsApp", href: "https://wa.me/1234567890", icon: "MessageCircle" },
      { platform: "Telegram", href: "https://t.me/monpage", icon: "Send" },
      { platform: "Lion", href: "https://lion.com/monpage", icon: "MessageSquare" }
    ],
    socialProof: "500+ websites built this week",
    copyright: "© 2024 MonPage. All rights reserved."
  },
  floatingWhatsApp: {
    href: "https://wa.me/1234567890?text=Hi%2C%20I%20want%20to%20build%20my%20website",
    label: "Chat on WhatsApp"
  }
} as const;

export type SiteContent = typeof siteContent;
