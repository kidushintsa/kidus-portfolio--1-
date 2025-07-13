import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Code, Star } from "lucide-react"
import { TechBadge } from "./tech-badge"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  technologies: string[]
  githubUrl?: string
  repoUrl?: string
  liveUrl?: string
  featured?: boolean
}

export function ProjectCard({
  title,
  description,
  image,
  technologies,
  githubUrl,
  repoUrl,
  liveUrl,
  featured = false,
}: ProjectCardProps) {
  const repositoryUrl = repoUrl || githubUrl

  return (
    <Card
      className={`group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-slate-700 bg-slate-800/80 backdrop-blur-sm ${
        featured ? "ring-2 ring-blue-500/50 shadow-xl" : ""
      }`}
    >
      {featured && (
        <div className="absolute top-4 right-4 z-10">
          <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg">
            <Star className="h-3 w-3 mr-1" />
            Featured
          </Badge>
        </div>
      )}

      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {repositoryUrl && (
          <Link href={repositoryUrl} target="_blank" className="absolute top-4 left-4 z-20">
            <div className="p-2 bg-slate-800/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-slate-700 transition-colors">
              <Github className="h-4 w-4 text-white" />
            </div>
          </Link>
        )}
      </div>

      <CardHeader className="pb-3">
        <CardTitle className="flex items-center justify-between">
          <span className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">{title}</span>
        </CardTitle>
        <CardDescription className="text-sm leading-relaxed text-gray-300">{description}</CardDescription>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <TechBadge key={tech} name={tech} showIcon={false} />
          ))}
        </div>

        <div className="flex gap-2">
          {repositoryUrl && (
            <Button
              variant="outline"
              size="sm"
              asChild
              className="flex-1 bg-transparent hover:bg-slate-700 hover:text-white transition-all duration-300 border-slate-600 text-gray-300"
            >
              <Link href={repositoryUrl} target="_blank">
                <Code className="mr-2 h-4 w-4" />
                Repository
              </Link>
            </Button>
          )}
          {liveUrl && (
            <Button
              variant="outline"
              size="sm"
              asChild
              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              <Link href={liveUrl} target="_blank">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </Link>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
