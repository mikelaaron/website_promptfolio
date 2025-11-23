import { Download } from 'lucide-react'

export function FinalCTA() {
  return (
    <section className="py-20 px-4 bg-brand-forest text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-[32px] md:text-4xl font-bold mb-4">Ready to Organize Your Prompts?</h2>

        <p className="text-base text-white/80 mb-8 leading-relaxed">
          Try free. Unlock unlimited for $0.99 
        </p>

        <div className="inline-flex flex-col items-center gap-2 mb-4">
          <button
            disabled
            className="inline-flex items-center gap-2 bg-brand-orange/50 text-white px-8 py-4 rounded-[var(--radius-button)] text-lg font-semibold cursor-not-allowed opacity-75"
          >
            <Download className="w-6 h-6" />
            Coming Soon to the App Store
          </button>
          <span className="text-sm text-white/60 italic">App submission in progress</span>
        </div>

        <p className="text-sm text-white/80 mt-4">Available now for iPhone and iPad - Built for iOS 26</p>
      </div>
    </section>
  )
}
