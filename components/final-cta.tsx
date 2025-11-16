import { Download } from 'lucide-react'

export function FinalCTA() {
  return (
    <section className="py-20 px-4 bg-brand-forest text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-[32px] md:text-4xl font-bold mb-4">Ready to Organize Your Prompts?</h2>

        <p className="text-base text-white/80 mb-8 leading-relaxed">
          Try free. Unlock unlimited for $0.99 
        </p>

        <a
          href="https://apps.apple.com/app/promptfolio"
          className="inline-flex items-center gap-2 bg-brand-orange text-white px-8 py-4 rounded-[var(--radius-button)] text-lg font-semibold shadow-[var(--shadow-button)] hover:shadow-[var(--shadow-button-hover)] hover:bg-brand-orange-hover transition-all duration-200 hover:scale-105 mb-4"
        >
          <Download className="w-6 h-6" />
          Download on the App Store
        </a>

        <p className="text-sm text-white/80 mt-4">Available now for iPhone and iPad - Built for iOS 26</p>
      </div>
    </section>
  )
}
