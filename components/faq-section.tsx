import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Why not just use Notes or Photos?",
      answer:
        "Notes can't organize by visuals, match vocabulary, or track results across AI models. PromptFolio is built specifically for prompt engineering—auto-tagging, lexicon integration, cross-model comparison, and visual-first search.",
    },
    {
      question: "Does it work offline?",
      answer:
        "Yes! OCR, lexicon suggestions, and all core features work without internet. iCloud sync happens automatically when you're connected, but you can capture and organize offline anytime.",
    },
    {
      question: "Can I export my prompts?",
      answer:
        "Absolutely. Export to plain text, share via iOS ShareSheet to any app, or backup to the Files app. Your data is yours, always.",
    },
    {
      question: "What about privacy?",
      answer:
        "Your prompts stay on your device. iCloud sync uses a private CloudKit container (Apple's end-to-end encrypted storage). No third-party servers. No analytics. Your creative work is yours alone.",
    },
    {
      question: "How many prompts can I store?",
      answer:
        "Unlimited. PromptFolio uses efficient photo references instead of duplicating images, so storage is minimal. Store thousands of prompts without worrying about space.",
    },
    {
      question: "What AI models does it support?",
      answer:
        "PromptFolio is model-agnostic. Works with any text-to-image, text-to-video, or text-to-text AI model—Midjourney, DALL-E, Stable Diffusion, Claude, ChatGPT, Flux, and more.",
    },
  ]

  return (
    <section className="py-24 md:py-32 px-4 bg-brand-beige/20">
      <div className="max-w-4xl mx-auto">
        {/* Headline */}
        <h2 className="text-5xl md:text-7xl font-bold text-center text-brand-forest mb-16">Frequently Asked Questions</h2>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-surface rounded-[var(--radius-card)] px-6 shadow-[var(--shadow-card-light)] border-none"
            >
              <AccordionTrigger className="text-2xl font-semibold text-brand-forest hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-brand-forest/80 leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
