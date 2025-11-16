import { Grid3x3, BookOpen, Lightbulb, GitBranch, Layers, Search } from 'lucide-react'

export function FeatureGrid() {
  const features = [
    // Row 1: Core Experience
    {
      icon: Grid3x3,
      title: "Visual-First Discovery",
      description:
        "Masonry grid, Pinterest-style browsing. See your entire creative library at a glance with beautiful, high-quality previews.",
    },
    {
      icon: BookOpen,
      title: "Built-In Visual Lexicon",
      description:
        "Professional vocabulary library with visual examples. Photography terms and lighting techniques—all organized and ready to use.",
    },
    // Row 2: Unique Workflow
    {
      icon: Lightbulb,
      title: "Smart Suggestions",
      description:
        "Real-time lexicon suggestions as you write. Discover terms that match your creative direction—right when you need them.",
    },
    {
      icon: GitBranch,
      title: "Originals & Remixes",
      description:
        "Track creative iterations intelligently. See how your prompts evolved and which variations worked best.",
    },
    // Row 3: Power Features
    {
      icon: Layers,
      title: "Track What Works",
      description:
        "Multi-result comparison per prompt. Attach results from different models, rate your favorites, and track what works best.",
    },
    {
      icon: Search,
      title: "Search & Filter",
      description:
        "Advanced filtering by model, type, favorites. Find any prompt in seconds with powerful search and smart organization.",
    },
  ]

  return (
    <section className="py-24 md:py-32 px-4 bg-surface-beige">
      <div className="max-w-6xl mx-auto">
        {/* Section Headline */}
        <h2 className="text-5xl md:text-7xl font-bold text-center text-brand-forest mb-16">
          Everything You Need in One App
        </h2>

        {/* Features Grid - Changed from 3 columns to 2 columns for 3 rows layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-surface rounded-[var(--radius-card)] p-8 shadow-[var(--shadow-card-light)] hover:shadow-[var(--shadow-card-dark)] transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-brand-teal/10 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-brand-teal" />
                </div>
                <h3 className="text-2xl font-semibold text-brand-forest mb-2">{feature.title}</h3>
                <p className="text-base text-brand-forest/80 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
