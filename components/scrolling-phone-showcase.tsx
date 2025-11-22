"use client"

import Image from "next/image"
import { useRef, useState } from "react"
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion"
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
  const sectionRef = useRef<HTMLElement | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const phoneParallax = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"])

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Simple, clear logic: divide into 4 equal segments
    // Feature 0: 0.00 - 0.25
    // Feature 1: 0.25 - 0.50
    // Feature 2: 0.50 - 0.75
    // Feature 3: 0.75 - 1.00
    
    if (latest < 0.25) {
      setActiveIndex(0)
    } else if (latest < 0.50) {
      setActiveIndex(1)
    } else if (latest < 0.75) {
      setActiveIndex(2)
    } else {
      setActiveIndex(3)
    }
  })

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-b from-brand-beige/30 via-white to-surface-beige py-16 md:py-24 md:h-[400vh]"
    >
      <div className="md:hidden space-y-8 px-4">
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} feature={feature} index={index} />
        ))}
      </div>

      <div className="hidden h-full md:block">
        <div className="sticky top-0 flex h-screen items-center">
          <div className="mx-auto flex w-full max-w-6xl gap-12 px-6">
            <div className="relative w-1/2 pl-4">
              <div className="relative min-h-[360px]">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.id}
                    className="absolute inset-0 flex flex-col justify-center"
                    animate={{
                      opacity: activeIndex === index ? 1 : 0,
                      y: activeIndex === index ? 0 : 32,
                    }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
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
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 flex items-center gap-3">
                <div className="flex -space-x-1">
                  {features.map((feature, index) => (
                    <span
                      key={feature.id}
                      className="h-2 w-2 rounded-full border border-white/50"
                      style={{
                        backgroundColor: activeIndex === index ? feature.color : "transparent",
                      }}
                    />
                  ))}
                </div>
                <div className="h-px flex-1 bg-brand-forest/10">
                  <div
                    className="h-full bg-brand-forest"
                    style={{ width: `${((activeIndex + 1) / features.length) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="relative w-1/2 flex items-center justify-center pr-4">
              <div className="relative w-full max-w-[360px]">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.id}
                    className={activeIndex === index ? '' : 'hidden'}
                    style={{ y: phoneParallax }}
                  >
                    <Image
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.title}
                      width={768}
                      height={1536}
                      priority={index === 0}
                      sizes="(min-width: 768px) 360px"
                      className="w-full h-auto"
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
