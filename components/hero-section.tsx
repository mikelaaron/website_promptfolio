import { Download } from 'lucide-react'
import { Logo } from "@/components/logo"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-surface-beige to-brand-beige/20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <Logo size="lg" />
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-brand-forest mb-6 leading-tight">
          {"Build Your Visual Archive"}
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-brand-forest/80 mb-8 max-w-2xl mx-auto leading-relaxed">
          {"A reference library for image generation. Save prompts, attach results, and track what works—across every tool you use."}
        </p>

        {/* Primary CTA */}
        <a
          href="https://apps.apple.com/app/promptfolio"
          className="inline-flex items-center gap-2 bg-brand-teal text-white px-8 py-4 rounded-[var(--radius-button)] text-lg font-semibold shadow-[var(--shadow-button)] hover:shadow-[var(--shadow-button-hover)] hover:bg-brand-teal-dark transition-all duration-200 hover:scale-105"
        >
          <Download className="w-6 h-6" />
          Download on the App Store
        </a>

        {/* Secondary Text */}
        <p className="text-sm text-brand-forest/60 mt-4">Try free, unlock for $0.99 • No subscription • Built for iOS 26</p>

        {/* Hero Image Placeholder */}
        <div className="mt-12">
          <div className="max-w-md mx-auto aspect-[9/19] bg-gradient-to-br from-brand-teal/10 to-brand-gold/10 rounded-[50px] border-8 border-brand-forest/10 shadow-2xl flex items-center justify-center">
            <img
              src="/iphone-mockup-showing-promptfolio-app-with-visual-.jpg"
              alt="PromptFolio app interface"
              className="w-full h-full object-cover rounded-[42px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
