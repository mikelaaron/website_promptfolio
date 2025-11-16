import { Logo } from "@/components/logo"

export function Footer() {
  return (
    <footer className="bg-brand-forest text-white/50 py-5 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs mb-2">
          PromptFolio |{' '}
          <a href="/privacy" className="hover:text-white/70 transition-colors">
            Privacy Policy
          </a>{' '}
          |{' '}
          <a href="/support" className="hover:text-white/70 transition-colors">
            Support
          </a>
        </p>
        
        <p className="text-xs italic">
          Apple, iPhone, iPad, and iCloud are trademarks of Apple Inc.
        </p>
      </div>
    </footer>
  )
}
