"use client"

import { useEffect } from "react"
import { Logo } from "@/components/logo"
import Link from "next/link"

export default function PrivacyPage() {
  useEffect(() => {
    // Load Termly script
    const script = document.createElement('script')
    script.id = 'termly-jssdk'
    script.src = 'https://app.termly.io/embed-policy.min.js'
    script.async = true
    
    // Check if script is already loaded
    if (!document.getElementById('termly-jssdk')) {
      document.body.appendChild(script)
    }
    
    return () => {
      // Cleanup: remove script when component unmounts
      const existingScript = document.getElementById('termly-jssdk')
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="inline-block">
            <Logo />
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        {/* Termly Embed Container */}
        <div 
          // @ts-ignore - Termly requires the 'name' attribute
          name="termly-embed" 
          data-id="3dd649c4-25ad-4aad-965f-4c8b9fef5536"
          data-type="iframe"
          className="prose prose-slate dark:prose-invert max-w-none"
        />
      </main>

      {/* Footer */}
      <footer className="border-t mt-16 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            ← Back to Home
          </Link>
        </div>
      </footer>
    </div>
  )
}
