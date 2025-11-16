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

  return (
    <picture className={`${sizeClasses[size]} ${className}`}>
      {/* Show dark logo when user prefers dark mode */}
      <source srcSet="/logo-dark.png" media="(prefers-color-scheme: dark)" />
      {/* Show light logo by default or when user prefers light mode */}
      <img src="/logo-light.png" alt="PromptFolio Logo" className={`${sizeClasses[size]} object-contain`} />
    </picture>
  )
}
