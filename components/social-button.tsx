import type React from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin } from "lucide-react"
import Link from "next/link"

interface SocialButtonProps {
  platform: "github" | "linkedin"
  href: string
  children: React.ReactNode
  size?: "default" | "sm" | "lg"
  variant?: "default" | "outline"
}

const socialColors = {
  github: {
    bg: "bg-[#333333] hover:bg-[#24292e]",
    border: "border-[#333333] hover:border-[#24292e] hover:bg-[#333333] hover:text-white",
    text: "text-[#333333] hover:text-white",
  },
  linkedin: {
    bg: "bg-[#0077B5] hover:bg-[#005885]",
    border: "border-[#0077B5] hover:border-[#005885] hover:bg-[#0077B5] hover:text-white",
    text: "text-[#0077B5] hover:text-white",
  },
}

export function SocialButton({ platform, href, children, size = "default", variant = "default" }: SocialButtonProps) {
  const colors = socialColors[platform]
  const Icon = platform === "github" ? Github : Linkedin

  const buttonClass =
    variant === "outline"
      ? `border-2 ${colors.border} ${colors.text} bg-transparent transition-all duration-300`
      : `${colors.bg} text-white border-0`

  return (
    <Button size={size} className={buttonClass} asChild>
      <Link href={href} target="_blank">
        <Icon className="mr-2 h-4 w-4" />
        {children}
      </Link>
    </Button>
  )
}
