import { ImageIcon, Brain, TrendingDown } from 'lucide-react'

export function ProblemSection() {
  return (
    <section className="bg-brand-forest text-white py-32 md:py-40 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Headline */}
        <h2 className="text-6xl md:text-8xl font-extrabold text-center mb-20 md:mb-24">You're Losing Your Best Work</h2>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-3 gap-12 md:gap-20 lg:gap-24 mb-20 md:mb-24">
          {/* Pain Point 1 */}
          <div className="text-center">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center mx-auto mb-8 bg-gradient-to-br from-brand-gold/20 to-brand-gold/10 border border-brand-gold/30 shadow-inner">
              <ImageIcon className="w-9 h-9 md:w-11 md:h-11 text-brand-gold" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-semibold mb-6">Screenshots Everywhere</h3>
            <p className="text-lg text-white/80 leading-relaxed">
              Notes app. Camera roll. Discord history. That perfect prompt? Buried under 500 photos.
            </p>
          </div>

          {/* Pain Point 2 */}
          <div className="text-center">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center mx-auto mb-8 bg-gradient-to-br from-brand-gold/20 to-brand-gold/10 border border-brand-gold/30 shadow-inner">
              <Brain className="w-9 h-9 md:w-11 md:h-11 text-brand-gold" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-semibold mb-6">Memory Isn't Enough</h3>
            <p className="text-lg text-white/80 leading-relaxed">
              "It was something about golden hour and Kodak film..." Close, but not quite. The details matter.
            </p>
          </div>

          {/* Pain Point 3 */}
          <div className="text-center">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center mx-auto mb-8 bg-gradient-to-br from-brand-gold/20 to-brand-gold/10 border border-brand-gold/30 shadow-inner">
              <TrendingDown className="w-9 h-9 md:w-11 md:h-11 text-brand-gold" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-semibold mb-6">No Way to Track</h3>
            <p className="text-lg text-white/80 leading-relaxed">
              Which model worked best? What tweaks improved results? You're reinventing the wheel every time.
            </p>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-lg text-brand-gold font-semibold mb-2">
            You're experimenting across platforms, models and tools...
          </p>
          <p className="text-3xl md:text-4xl font-semibold text-white">But your prompts live in 15 different places.</p>
        </div>
      </div>
    </section>
  )
}
