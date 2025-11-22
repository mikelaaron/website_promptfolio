"use client"

import Image from "next/image"
import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FeatureCard, type Feature } from "@/components/feature-card"

const features: Feature[] = [
  {
    id: "feature-library",
    title: "See Your Work at a Glance",
    description:
      "Browse your entire prompt library with a beautiful, Pinterest-style grid. Instantly preview images and videos, making rediscovery and organization effortless.",
    color: "var(--brand-teal)",
    image: "/feature1.png",
  },
  {
    id: "feature-vocab",
    title: "Vocabulary That Inspires",
    description:
      "Unlock a curated library of 70+ visual terms—photography, lighting, and style examples—right inside your prompt editor. Learn what creative descriptors actually look like, and add them to your prompts with a tap.",
    color: "var(--brand-gold)",
    image: "/feature2.png",
  },
  {
    id: "feature-guidance",
    title: "Real-Time Prompt Guidance",
    description:
      "As you write, PromptFolio suggests professional vocabulary and techniques tailored to your prompt. Discover new ideas and refine your vision in seconds—no guesswork, just instant creative support.",
    color: "var(--brand-orange)",
    image: "/feature3.png",
  },
  {
    id: "feature-compare",
    title: "Compare and Learn from Your Results",
    description:
      "Save outputs from multiple AI models under a single prompt. Rate favorites, add notes, and see exactly which approach delivered the best result. Build your creative knowledge with every experiment.",
    color: "var(--brand-teal)",
    image: "/feature4.png",
  },
]

export function ScrollingPhoneShowcase() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  // Track which feature is in view using Intersection Observer
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            setActiveIndex(index)
          }
        })
      },
      {
        root: container,
        threshold: 0.5, // Feature must be 50% visible to be considered active
      }
    )

    const items = container.querySelectorAll('[data-index]')
    items.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* MOBILE VIEW */}
      <section className="md:hidden relative bg-gradient-to-b from-brand-beige/30 via-white to-surface-beige py-16 px-4">
        <div className="space-y-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </section>

      {/* DESKTOP/TABLET VIEW with CSS Scroll Snap */}
      <section 
        ref={containerRef}
        className="hidden md:block relative bg-gradient-to-b from-brand-beige/30 via-white to-surface-beige overflow-y-auto h-screen"
        style={{
          scrollSnapType: 'y mandatory',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {features.map((feature, index) => (
          <div
            key={feature.id}
            data-index={index}
            className="h-screen flex items-center justify-center"
            style={{
              scrollSnapAlign: 'start',
              scrollSnapStop: 'always',
            }}
          >
            <div className="mx-auto flex w-full max-w-6xl gap-12 px-6">
              {/* LEFT SIDE: Text Content */}
              <div className="relative w-1/2 pl-4">
                <motion.div
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  viewport={{ once: false, amount: 0.5 }}
                >
                  <p className="text-xs font-medium uppercase tracking-[0.08em] text-brand-forest/60">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 text-4xl font-semibold leading-tight text-brand-forest">
                    {feature.title}
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-brand-forest/80">
                    {feature.description}
                  </p>

                  {/* Progress Indicator */}
                  <div className="mt-12 flex items-center gap-3">
                    <div className="flex -space-x-1">
                      {features.map((f, i) => (
                        <span
                          key={f.id}
                          className="h-2 w-2 rounded-full border border-white/50"
                          style={{
                            backgroundColor: activeIndex === i ? f.color : "transparent",
                          }}
                        />
                      ))}
                    </div>
                    <div className="h-px flex-1 bg-brand-forest/10">
                      <div
                        className="h-full bg-brand-forest transition-all duration-300"
                        style={{ width: `${((activeIndex + 1) / features.length) * 100}%` }}
                      />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* RIGHT SIDE: Phone Mockup */}
              <div className="relative w-1/2 flex items-center justify-center pr-4">
                <motion.div
                  className="w-full max-w-[360px]"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  viewport={{ once: false, amount: 0.5 }}
                >
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={768}
                    height={1536}
                    priority={index === 0}
                    sizes="(min-width: 768px) 360px"
                    className="w-full h-auto"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  )
}
