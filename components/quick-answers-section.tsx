export function QuickAnswersSection() {
  const questions = [
    {
      question: "Does PromptFolio generate images?",
      answer:
        "No. PromptFolio is a library and reference tool, not an image generator. It lets you save and organize the images you've created in other tools—along with the prompts that generated them.",
    },
    {
      question: "Why not just use Notes or Photos?",
      answer:
        "Notes can't show you visual results at a glance or suggest professional vocabulary as you write. Photos can't search prompt text or track which AI model created each image. PromptFolio is purpose-built for organizing image generation work.",
    },
    {
      question: "Does it work offline?",
      answer:
        "Yes. Your library is stored locally on your device. iCloud sync happens automatically when online, but you can browse, search, and edit anytime.",
    },
  ]

  return (
    <section className="py-16 px-4 bg-surface">
      <div className="max-w-[700px] mx-auto">
        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-bold text-brand-forest mb-12">
          Quick Answers
        </h2>

        {/* Q&A List */}
        <div className="space-y-10">
          {questions.map((item, index) => (
            <div key={index} className="text-left">
              <h3 className="text-lg md:text-xl font-semibold text-brand-forest mb-3">
                {item.question}
              </h3>
              <p className="text-base text-brand-forest/60 leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
