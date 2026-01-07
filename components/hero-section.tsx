import Image from "next/image"
import { Download } from 'lucide-react'
import { Logo } from "@/components/logo"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-surface-beige to-brand-beige/20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <Logo size="lg" />
        </div>

        {/* Version Badge */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-1.5 bg-brand-gold/20 text-brand-forest px-3 py-1 rounded-full text-sm font-medium">
            <span className="w-1.5 h-1.5 bg-brand-gold rounded-full"></span>
            Version 2.0
          </span>
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
        <div className="inline-flex flex-col items-center gap-2">
          <a
            href="https://apps.apple.com/us/app/promptfolio/id6752543182"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-teal text-white px-8 py-4 rounded-[var(--radius-button)] text-lg font-semibold hover:bg-brand-teal/90 transition-colors"
          >
            <Download className="w-6 h-6" />
            Download on the App Store
          </a>
        </div>

        {/* Secondary Text */}
        <p className="text-sm text-brand-forest/60 mt-4">Try free, unlock for $0.99 • No subscription • Built for iOS 26</p>

        {/* Hero Image Placeholder */}
        <div className="mt-12 md:mt-16 lg:mt-20 flex justify-center pb-16 md:pb-24 lg:pb-32">
          <div className="relative w-full max-w-md">
            <Image
              src="/hero-app-screenshot.png"
              alt="PromptFolio app interface"
              width={768}
              height={1536}
              priority
              className="h-auto w-full drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
