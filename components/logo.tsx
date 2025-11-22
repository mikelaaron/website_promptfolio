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
    <img 
      src="/logo-light.png" 
      alt="PromptFolio Logo" 
      className={`${sizeClasses[size]} ${className} object-contain`} 
    />
  )
}
