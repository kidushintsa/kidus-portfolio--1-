"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TechIcon } from "./tech-icon"
import { AnimatedSection } from "./animated-section"
import { StaggeredContainer } from "./staggered-container"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["JavaScript", "TypeScript", "Java", "PHP", "C++"],
  },
  {
    title: "Frontend Technologies",
    skills: ["React.js", "Next.js", "TailwindCSS", "Bootstrap", "jQuery"],
  },
  {
    title: "Backend & Tools",
    skills: ["Node.js", "Express.js", "Docker", "Git/GitHub", "Firebase"],
  },
  {
    title: "Databases & ORMs",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Prisma ORM"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Skills &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Technologies
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I work with to bring{" "}
            <span className="font-semibold text-blue-400">ideas to life</span>
          </p>
        </AnimatedSection>

        <StaggeredContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-slate-700 bg-slate-800/80 backdrop-blur-sm overflow-hidden hover:border-blue-500/50"
            >
              <CardHeader className="pb-4 relative">
                <div className="flex items-center gap-3 relative z-10">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt={category.title}
                    width={40}
                    height={40}
                    className="rounded-lg shadow-lg"
                  />
                  <CardTitle className="text-lg text-white">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-700/50 transition-colors"
                    >
                      <TechIcon name={skill} />
                      <span className="text-sm font-medium text-gray-200">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </StaggeredContainer>

        <AnimatedSection className="mt-16 text-center">
          <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-slate-700">
            <h3 className="text-xl font-semibold text-white mb-4">Always learning, always growing</h3>
            <p className="text-gray-300 mb-6">
              Currently exploring <span className="font-semibold text-emerald-400">AI/ML</span>,
              <span className="font-semibold text-blue-400"> Cloud Architecture</span>, and
              <span className="font-semibold text-purple-400"> Web3 Technologies</span>
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {["Machine Learning", "AWS", "Blockchain", "GraphQL", "Microservices"].map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="border-slate-600 text-gray-300 hover:border-blue-400 hover:bg-blue-500/20 transition-all"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
