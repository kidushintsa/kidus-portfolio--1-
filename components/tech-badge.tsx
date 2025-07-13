import { Badge } from "@/components/ui/badge"
import Image from "next/image"

interface TechBadgeProps {
  name: string
  className?: string
  showIcon?: boolean
}

const techConfig = {
  // Programming Languages
  JavaScript: { color: "bg-[#F7DF1E] text-black", icon: "🟨" },
  TypeScript: { color: "bg-[#3178C6] text-white", icon: "🔷" },
  Java: { color: "bg-[#ED8B00] text-white", icon: "☕" },
  PHP: { color: "bg-[#777BB4] text-white", icon: "🐘" },
  "C++": { color: "bg-[#00599C] text-white", icon: "⚡" },

  // Frontend
  "React.js": { color: "bg-[#61DAFB] text-black", icon: "⚛️" },
  "Next.js": { color: "bg-black text-white", icon: "▲" },
  TailwindCSS: { color: "bg-[#06B6D4] text-white", icon: "🎨" },
  Bootstrap: { color: "bg-[#7952B3] text-white", icon: "🅱️" },
  jQuery: { color: "bg-[#0769AD] text-white", icon: "💫" },

  // Backend & Tools
  "Node.js": { color: "bg-[#339933] text-white", icon: "🟢" },
  "Express.js": { color: "bg-[#000000] text-white", icon: "🚀" },
  Docker: { color: "bg-[#2496ED] text-white", icon: "🐳" },
  "Git/GitHub": { color: "bg-[#F05032] text-white", icon: "📚" },
  Firebase: { color: "bg-[#FFCA28] text-black", icon: "🔥" },

  // Databases
  MySQL: { color: "bg-[#4479A1] text-white", icon: "🐬" },
  PostgreSQL: { color: "bg-[#336791] text-white", icon: "🐘" },
  MongoDB: { color: "bg-[#47A248] text-white", icon: "🍃" },
  "Prisma ORM": { color: "bg-[#2D3748] text-white", icon: "🔺" },

  // Additional
  Zustand: { color: "bg-[#FF6B6B] text-white", icon: "🐻" },
  "Framer Motion": { color: "bg-[#0055FF] text-white", icon: "🎭" },
  "RAWG API": { color: "bg-[#FF6B35] text-white", icon: "🎮" },
  "Chapa API": { color: "bg-[#00C851] text-white", icon: "💳" },
}

export function TechBadge({ name, className = "", showIcon = true }: TechBadgeProps) {
  const config = techConfig[name as keyof typeof techConfig] || { color: "bg-gray-500 text-white", icon: "🔧" }

  // Create a safe filename for the placeholder
  const safeFileName = name
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "-")
    .replace(/-+/g, "-")

  return (
    <Badge className={`${config.color} ${className} flex items-center gap-2 px-3 py-1.5 text-sm font-medium`}>
      {showIcon && (
        <div className="relative w-4 h-4 flex-shrink-0">
          <Image
            src={`/placeholder.svg?height=16&width=16&text=${name.charAt(0)}`}
            alt={`${name} logo`}
            width={16}
            height={16}
            className="rounded-sm object-contain"
            onError={(e) => {
              // Fallback to emoji if image fails to load
              const target = e.target as HTMLImageElement
              target.style.display = "none"
              const parent = target.parentElement
              if (parent) {
                parent.innerHTML = config.icon
                parent.className = "flex items-center justify-center w-4 h-4"
              }
            }}
          />
        </div>
      )}
      <span>{name}</span>
    </Badge>
  )
}
