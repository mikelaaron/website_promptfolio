import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { ScrollingPhoneShowcase } from "@/components/scrolling-phone-showcase"
import { FeatureGrid } from "@/components/feature-grid"
import { UseCases } from "@/components/use-cases"
import { HowItWorks } from "@/components/how-it-works"
import { TrustBarSection } from "@/components/trust-bar-section"
import { QuickAnswersSection } from "@/components/quick-answers-section"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="bg-[#FCFCF9] text-[#2C3E2C] font-sans antialiased">
      <HeroSection />
      <ProblemSection />
      <ScrollingPhoneShowcase />
      <FeatureGrid />
      <UseCases />
      <HowItWorks />
      <TrustBarSection />
      <QuickAnswersSection />
      <FinalCTA />
      <Footer />
    </div>
  )
}
