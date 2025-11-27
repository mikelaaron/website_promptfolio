'use client'

import { Download, Grid3x3, Star, ArrowRight } from 'lucide-react'

export function HowItWorks() {
  return (
    <section className="py-24 md:py-32 px-4 bg-surface-beige">
      <div className="max-w-7xl mx-auto">
        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-brand-forest mb-16">
          How It Works: From Chaos to Creative Archive
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4">
          {/* Step 1 */}
          <div className="text-center flex-1 max-w-xs">
            <div className="w-16 h-16 bg-brand-teal text-white rounded-full flex items-center justify-center mx-auto mb-6">
              <Download className="w-8 h-8" strokeWidth={2.5} />
            </div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: '#1A1A1A' }}>Save Your Work</h3>
            <p className="text-base text-brand-forest/80 leading-relaxed">
              Snap, paste, or import your prompts. OCR extracts text automatically. Takes 3 seconds.
            </p>
          </div>

          {/* Arrow 1 */}
          <div className="hidden md:block flex-shrink-0">
            <ArrowRight className="w-8 h-8 text-brand-teal" strokeWidth={2} />
          </div>

          {/* Step 2 */}
          <div className="text-center flex-1 max-w-xs">
            <div className="w-16 h-16 bg-brand-teal text-white rounded-full flex items-center justify-center mx-auto mb-6">
              <Grid3x3 className="w-8 h-8" strokeWidth={2.5} />
            </div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: '#1A1A1A' }}>Build Your Library</h3>
            <p className="text-base text-brand-forest/80 leading-relaxed">
              Lexicon integration suggests pro vocabulary. Visual grid makes browsing effortless.
            </p>
          </div>

          {/* Arrow 2 */}
          <div className="hidden md:block flex-shrink-0">
            <ArrowRight className="w-8 h-8 text-brand-teal" strokeWidth={2} />
          </div>

          {/* Step 3 */}
          <div className="text-center flex-1 max-w-xs">
            <div className="w-16 h-16 bg-brand-teal text-white rounded-full flex items-center justify-center mx-auto mb-6">
              <Star className="w-8 h-8" strokeWidth={2.5} />
            </div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: '#1A1A1A' }}>Never Lose a Great Idea</h3>
            <p className="text-base text-brand-forest/80 leading-relaxed">
              Find prompts instantly. Insert lexicon terms with one tap. Track results across models. Never start from
              scratch again.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
