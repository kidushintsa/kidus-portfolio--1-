import Image from "next/image";

interface TechIconProps {
  name: string;
  className?: string;
}

const techConfig = {
  // Programming Languages
  JavaScript: { color: "#F7DF1E", bgColor: "#000" },
  TypeScript: { color: "#3178C6", bgColor: "#fff" },
  Java: { color: "#ED8B00", bgColor: "#fff" },
  PHP: { color: "#777BB4", bgColor: "#fff" },
  "C++": { color: "#00599C", bgColor: "#fff" },

  // Frontend
  "React.js": { color: "#61DAFB", bgColor: "#000" },
  "Next.js": { color: "#000", bgColor: "#fff" },
  TailwindCSS: { color: "#06B6D4", bgColor: "#fff" },
  Bootstrap: { color: "#7952B3", bgColor: "#fff" },
  jQuery: { color: "#0769AD", bgColor: "#fff" },

  // Backend & Tools
  "Node.js": { color: "#339933", bgColor: "#fff" },
  "Express.js": { color: "#000", bgColor: "#fff" },
  Docker: { color: "#2496ED", bgColor: "#fff" },
  "Git/GitHub": { color: "#F05032", bgColor: "#fff" },
  Firebase: { color: "#FFCA28", bgColor: "#000" },

  // Databases
  MySQL: { color: "#4479A1", bgColor: "#fff" },
  PostgreSQL: { color: "#336791", bgColor: "#fff" },
  MongoDB: { color: "#47A248", bgColor: "#fff" },
  "Prisma ORM": { color: "#2D3748", bgColor: "#fff" },

  // Additional
  Zustand: { color: "#FF6B6B", bgColor: "#fff" },
  "Framer Motion": { color: "#0055FF", bgColor: "#fff" },
  "RAWG API": { color: "#FF6B35", bgColor: "#fff" },
  "Chapa API": { color: "#00C851", bgColor: "#fff" },
};

export function TechIcon({ name, className = "" }: TechIconProps) {
  const config = techConfig[name as keyof typeof techConfig] || {
    color: "#6B7280",
    bgColor: "#fff",
  };

  // Create a safe filename for the placeholder
  const safeFileName = name
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "-")
    .replace(/-+/g, "-");

  return (
    <div
      className={`flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-gray-50 transition-colors ${className}`}
    >
      <div className="relative w-12 h-12 flex items-center justify-center">
        <Image
          src={`/techImg/tailwind.JPG`}
          alt={`${name} logo`}
          width={48}
          height={48}
          className="rounded-lg object-contain"
          style={{
            backgroundColor: config.bgColor,
            border: `1px solid ${config.color}20`,
          }}
        />
      </div>
    </div>
  );
}
