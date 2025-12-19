import Image from "next/image"

interface LogoProps {
  size?: "sm" | "md" | "lg"
  className?: string
}

export function Logo({ size = "md", className = "" }: LogoProps) {
  const sizeClasses = {
    sm: "w-10 h-10",
    md: "w-24 h-24",
    lg: "w-32 h-32",
  }

  const sizePx = {
    sm: 40,
    md: 96,
    lg: 128,
  }

  return (
    <Image
      src="/logo-light.png"
      alt="PromptFolio Logo"
      width={sizePx[size]}
      height={sizePx[size]}
      className={`${sizeClasses[size]} ${className} object-contain`}
    />
  )
}
