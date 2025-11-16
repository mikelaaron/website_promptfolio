"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function ScrollingPhoneShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Track scroll progress within this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Map scroll progress to feature index (0-3)
  const activeFeature = useTransform(scrollYProgress, [0.2, 0.35, 0.5, 0.65, 0.8], [0, 1, 2, 3, 3])

  // Features data
  const features = [
    {
      title: "Capture with Your Camera",
      description:
        "Snap a screenshot. Extract the prompt instantly with OCR. No typing. No copy-paste. Just point and save.",
      color: "var(--brand-teal)",
      image: "/iphone-app-screenshot-showing-camera-view-capturin.jpg",
    },
    {
      title: "Find by Feel, Not Memory",
      description:
        "Pinterest-style masonry grid. Remember the blue penguin in neon? Find it in seconds. Visual browsing beats text search every time.",
      color: "var(--brand-gold)",
      image: "/iphone-app-screenshot-showing-pinterest-masonry-gr.jpg",
    },
    {
      title: "Remix with Pro Vocabulary",
      description:
        "800+ curated terms from 'Kodak Portra 400' to 'chiaroscuro lighting.' Tap to insert. Learn as you build. Never start from scratch.",
      color: "var(--brand-orange)",
      image: "/iphone-app-screenshot-showing-bottom-drawer-interf.jpg",
    },
    {
      title: "Track What Works, Where",
      description:
        "Same prompt. Multiple models. Star ratings. Notes. Build your playbook of what works in Midjourney vs. DALL-E vs. Flux.",
      color: "var(--brand-teal)",
      image: "/iphone-app-screenshot-showing-split-screen-compari.jpg",
    },
  ]

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-gradient-to-b from-brand-beige/20 to-surface-beige">
      {/* Section Headline */}
      <div className="absolute top-24 left-0 right-0 text-center z-10 px-4">
        <h2 className="text-5xl md:text-7xl font-bold text-brand-forest">Built for How You Actually Work</h2>
      </div>

      {/* Sticky Container */}
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side: Feature Text */}
          <div className="text-center md:text-left">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: Math.round(activeFeature.get()) === index ? 1 : 0,
                  x: Math.round(activeFeature.get()) === index ? 0 : -20,
                }}
                transition={{ duration: 0.4 }}
                className="absolute"
              >
                <h3 className="text-3xl md:text-4xl font-semibold text-brand-forest mb-4">{feature.title}</h3>
                <p className="text-lg text-brand-forest/80 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Right Side: iPhone Mockup */}
          <div className="relative">
            <div className="relative w-[300px] h-[600px] mx-auto">
              {/* iPhone frame */}
              <div className="absolute inset-0 rounded-[50px] border-8 border-brand-forest/90 shadow-[var(--shadow-card-dark)]"></div>

              {/* Dynamic Notch */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-brand-forest rounded-b-3xl z-10"></div>

              {/* Screen Content */}
              <div className="absolute inset-4 top-8 bottom-8 rounded-[42px] overflow-hidden bg-white">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: Math.round(activeFeature.get()) === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <img
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
