import { Smartphone, Layers, BookMarked } from 'lucide-react'

export function UseCases() {
  return (
    <section className="py-24 md:py-32 px-4 bg-gradient-to-br from-brand-beige/30 to-brand-gold/10">
      <div className="max-w-6xl mx-auto">
        {/* Headline */}
        <h2 className="text-5xl md:text-7xl font-bold text-center text-brand-forest mb-16">
          Built for Mobile-First Creators
        </h2>

        {/* Use Case Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-surface rounded-[var(--radius-card)] p-8 shadow-[var(--shadow-card-light)]">
            <div className="w-12 h-12 mb-4 text-brand-forest">
              <Smartphone className="w-full h-full" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-semibold text-brand-forest mb-2">Discover on the Go</h3>
            <p className="text-base text-brand-forest/80 leading-relaxed">
              Found an amazing prompt on Twitter? Saw a style you love on Instagram? Save it instantly, right from your phone. Your inspiration is mobile. Your library should be too.
            </p>
          </div>

          <div className="bg-surface rounded-[var(--radius-card)] p-8 shadow-[var(--shadow-card-light)]">
            <div className="w-12 h-12 mb-4 text-brand-forest">
              <Layers className="w-full h-full" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-semibold text-brand-forest mb-2">Test Across Models</h3>
            <p className="text-base text-brand-forest/80 leading-relaxed">
              {"Compared results from Gemini, Seedream, and Flux? Track what worked where. Rate your favorites. Build a knowledge base of 'what delivered dramatic portraits' vs. 'what nailed photorealism.'"}
            </p>
          </div>

          <div className="bg-surface rounded-[var(--radius-card)] p-8 shadow-[var(--shadow-card-light)]">
            <div className="w-12 h-12 mb-4 text-brand-forest">
              <BookMarked className="w-full h-full" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-semibold text-brand-forest mb-2">Build Your Reference Library</h3>
            <p className="text-base text-brand-forest/80 leading-relaxed">
              {"Stop rewriting prompts from memory. Save variations. Document what works. With a curated lexicon of photography terms, lighting techniques, and art styles, you're always one tap away from pro-level vocabulary."}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
