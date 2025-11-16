export function TrustBarSection() {
  const trustItems = [
    {
      emoji: "💰",
      title: "No Subscription",
      description:
        "Try the first 5 prompts free. Unlock unlimited for just $0.99—one time, forever. No subscription, no recurring fees.",
    },
    {
      emoji: "🔒",
      title: "Privacy First",
      description:
        "Your data stays private. iCloud sync uses Apple's encrypted CloudKit. No tracking, no ads, no third parties.",
    },
    {
      emoji: "📱",
      title: "iOS Native",
      description:
        "Built exclusively for iOS with iCloud sync. Works on iPhone and iPad. Requires iOS 26 or later.",
    },
    {
      emoji: "💾",
      title: "Unlimited Storage",
      description:
        "Store as many prompts as you want (after unlocking). Images and videos reference your Photos library—no duplication, no extra storage used.",
    },
  ]

  return (
    <section className="py-15 px-4 bg-brand-beige/20">
      <div className="max-w-6xl mx-auto">
        {/* Headline */}
        <h2 className="text-5xl md:text-7xl font-bold text-center text-brand-forest mb-16">
          Everything You Need to Know
        </h2>

        {/* Trust Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md"
            >
              {/* Emoji Icon in Teal Circle */}
              <div className="w-12 h-12 rounded-full bg-brand-teal flex items-center justify-center text-2xl mb-4">
                {item.emoji}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-brand-forest mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[15px] text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
