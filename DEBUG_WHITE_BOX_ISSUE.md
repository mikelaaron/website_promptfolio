# iPad Safari White Box Debug Information

## Problem Description
White box/container appearing around phone mockup images on iPad Safari (Retina display) in the scrolling features section. The section should show text on the left and phone mockup images on the right that fade/transition as the user scrolls.

## Section Background
The section has a gradient background: `bg-gradient-to-b from-brand-beige/30 via-white to-surface-beige`

Brand colors defined in globals.css:
- `--brand-beige: #d4c5b8`
- `--surface-beige: #fcfcf9`

---

## 1. React Component (scrolling-phone-showcase.tsx)

```tsx
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
    const segment = 1 / features.length
    const nextIndex = Math.min(
      features.length - 1,
      Math.max(0, Math.floor(latest / segment))
    )

    setActiveIndex((prev) => (prev === nextIndex ? prev : nextIndex))
  })

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-b from-brand-beige/30 via-white to-surface-beige py-16 md:py-24 md:h-[400vh]"
    >
      {/* MOBILE VIEW - Works fine, no white box issue */}
      <div className="md:hidden space-y-8 px-4">
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} feature={feature} index={index} />
        ))}
      </div>

      {/* DESKTOP/TABLET VIEW - This is where the white box appears on iPad */}
      <div className="hidden h-full md:block">
        <div className="sticky top-0 flex h-screen items-center">
          <div className="mx-auto flex w-full max-w-6xl gap-12 px-6">
            {/* LEFT SIDE: Text content - works fine */}
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

              {/* Progress indicator */}
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

            {/* RIGHT SIDE: Phone mockup images - WHITE BOX APPEARS HERE ON IPAD */}
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
                      className="w-full h-auto drop-shadow-2xl"
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
```

---

## 2. Mobile Feature Card Component (feature-card.tsx)

```tsx
"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export type Feature = {
  id: string
  title: string
  description: string
  image: string
  color: string
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
        </div>
        <h3 className="text-2xl font-semibold text-brand-forest leading-snug">{feature.title}</h3>
        <p className="text-base text-brand-forest/80 leading-relaxed">{feature.description}</p>
      </div>
    </motion.article>
  )
}
```

---

## 3. Global CSS (app/globals.css)

```css
@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --destructive-foreground: oklch(0.577 0.245 27.325);
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
  --radius: 0.625rem;
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.145 0 0);
  --sidebar-primary: oklch(0.205 0 0);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.97 0 0);
  --sidebar-accent-foreground: oklch(0.205 0 0);
  --sidebar-border: oklch(0.922 0 0);
  --sidebar-ring: oklch(0.708 0 0);

  /* Brand-specific semantic tokens */
  --brand-forest: #2c3e2c;
  --brand-beige: #d4c5b8;
  --brand-gold: #e8a95b;
  --brand-gold-dark: #c08645;
  --brand-gold-light: #f0c896;
  --brand-teal: #58959f;
  --brand-teal-light: #6badb8;
  --brand-teal-dark: #477781;
  --brand-orange: #e89a5e;
  --brand-orange-hover: #f0a66d;
  --surface: #fffffd;
  --surface-beige: #fcfcf9;
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.145 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.145 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.985 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.396 0.141 25.723);
  --destructive-foreground: oklch(0.637 0.237 25.331);
  --border: oklch(0.269 0 0);
  --input: oklch(0.269 0 0);
  --ring: oklch(0.439 0 0);
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
  --sidebar: oklch(0.205 0 0);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.269 0 0);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(0.269 0 0);
  --sidebar-ring: oklch(0.439 0 0);

  /* Dark mode overrides */
  --surface: #262828;
  --surface-beige: #1f2121;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);

  --font-sans: "Geist", "Geist Fallback";

  /* Brand colors */
  --color-brand-forest: var(--brand-forest);
  --color-brand-beige: var(--brand-beige);
  --color-brand-gold: var(--brand-gold);
  --color-brand-gold-dark: var(--brand-gold-dark);
  --color-brand-gold-light: var(--brand-gold-light);
  --color-brand-teal: var(--brand-teal);
  --color-brand-teal-light: var(--brand-teal-light);
  --color-brand-teal-dark: var(--brand-teal-dark);
  --color-brand-orange: var(--brand-orange);
  --color-brand-orange-hover: var(--brand-orange-hover);
  --color-surface: var(--surface);
  --color-surface-beige: var(--surface-beige);

  /* iOS 26 Design Tokens */
  --radius-card: 18px;
  --radius-button: 14px;
  --radius-pill: 24px;

  /* Typography Scale */
  --font-size-display: 64px;
  --font-size-h1: 48px;
  --font-size-h2: 32px;
  --font-size-h3: 24px;
  --font-size-body-lg: 18px;
  --font-size-body: 16px;
  --font-size-caption: 14px;

  /* Shadows */
  --shadow-card-light: 0 4px 12px rgba(44, 62, 44, 0.08), 0 2px 6px rgba(44, 62, 44, 0.04);
  --shadow-card-dark: 0 8px 24px rgba(0, 0, 0, 0.3), 0 4px 12px rgba(0, 0, 0, 0.25);
  --shadow-button: 0 2px 8px rgba(88, 149, 159, 0.2);
  --shadow-button-hover: 0 4px 16px rgba(88, 149, 159, 0.3);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
    font-family: var(--font-sans);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
}
```

---

## 4. Tailwind Config (tailwind.config.ts)

```ts
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        "brand-forest": "var(--brand-forest)",
        "brand-beige": "var(--brand-beige)",
        "brand-gold": "var(--brand-gold)",
        "brand-teal": "var(--brand-teal)",
        "brand-orange": "var(--brand-orange)",
        "surface-beige": "var(--surface-beige)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
```

---

## 5. Tech Stack & Dependencies

- **Framework**: Next.js 15 (App Router)
- **Animation**: Framer Motion (for scroll-based animations and crossfades)
- **Image Component**: Next.js `next/image` with optimization
- **Styling**: Tailwind CSS v4
- **Build**: TypeScript, React 19

### Key Framer Motion Usage:
- `useScroll` with `scrollYProgress` tracking
- `useTransform` for parallax effect on images
- `useMotionValueEvent` to track active feature index based on scroll position
- `motion.div` for fade animations

---

## 6. Animation Logic

1. **Scroll Detection**: As user scrolls through the `md:h-[400vh]` section (4x viewport height), `scrollYProgress` tracks position
2. **Active Index Calculation**: Divides scroll progress into segments (1/4 per feature) to determine which feature is "active"
3. **Image Display**: Only the active feature's image is shown (`hidden` class on inactive ones)
4. **Parallax**: Active image has `y: phoneParallax` which creates subtle vertical movement based on scroll
5. **Text Fade**: Left side text fades in/out based on `activeIndex` with opacity and y-position animation

---

## 7. What We've Tried (All Failed)

1. ✗ Removed aspect-ratio containers
2. ✗ Added explicit `background: transparent` everywhere
3. ✗ Applied Safari-specific GPU acceleration (`translateZ(0)`, `backface-visibility: hidden`)
4. ✗ Used `isolation: isolate` and `contain: strict`
5. ✗ Removed all outline, border, box-shadow properties
6. ✗ Changed from `fill` images to explicit width/height
7. ✗ Removed absolute positioning and overlapping layers
8. ✗ Tried `-webkit-tap-highlight-color: transparent`
9. ✗ Added `overflow: hidden` to parent containers
10. ✗ Simplified to single image display (no crossfade)

**Result**: White box STILL appears on iPad Safari Retina display around the phone mockup images.

---

## 8. Image Details

- **Image files**: PNG format, 768x1536px (iPhone 15 Pro mockup screenshots)
- **Aspect ratio**: 9:19.5 (standard iPhone aspect)
- **File names**: feature1.png, feature2.png, feature3.png, feature4.png
- **Images are uniform**: All have identical canvas size and phone positioning

---

## 9. Device/Browser Specifics

- **Problem occurs**: iPad (Retina display) using Safari
- **Works fine on**: 
  - Mobile phones (iPhone Safari)
  - Desktop Safari
  - Chrome (all devices)
  - Firefox

---

## Question for External AI

**Why would Safari on iPad specifically render a white box/container around these images when:**
1. No container has explicit background colors
2. Images use drop-shadow (not box-shadow)
3. Mobile view with similar setup works fine
4. The same code works on desktop Safari

**Is there a known iPad Safari compositor layer bug or specific CSS property that causes this?**

