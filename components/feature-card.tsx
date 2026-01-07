"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export type Feature = {
  id: string
  title: string
  description: string
  image: string
  color: string
  badge?: string
}

type FeatureCardProps = {
  feature: Feature
  index: number
}

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1 },
}

export function FeatureCard({ feature, index }: FeatureCardProps) {
  return (
    <motion.article
      className="group relative overflow-hidden rounded-[32px] border border-brand-forest/10 bg-white/80 shadow-[0_25px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-transform duration-300"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={cardVariants}
      transition={{ duration: 0.45, delay: index * 0.05, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative aspect-[9/19.5] w-full overflow-hidden">
        <Image
          src={feature.image || "/placeholder.svg"}
          alt={feature.title}
          fill
          priority={index === 0}
          sizes="(max-width: 768px) 90vw, 420px"
          className="object-contain object-center"
        />
      </div>

      <div className="space-y-3 p-4">
        <div className="flex items-center gap-2 text-sm font-medium tracking-wide text-brand-forest/70">
          <span
            className="inline-block h-1.5 w-8 rounded-full"
            style={{ backgroundColor: feature.color }}
          />
          Feature
          {feature.badge && (
            <span className="inline-flex items-center gap-1 bg-brand-gold/20 text-brand-forest px-2 py-0.5 rounded-full text-xs font-medium ml-auto">
              <span className="w-1 h-1 bg-brand-gold rounded-full"></span>
              {feature.badge}
            </span>
          )}
        </div>
        <h3 className="text-2xl font-semibold text-brand-forest leading-snug">{feature.title}</h3>
        <p className="text-base text-brand-forest/80 leading-relaxed">{feature.description}</p>
      </div>
    </motion.article>
  )
}
