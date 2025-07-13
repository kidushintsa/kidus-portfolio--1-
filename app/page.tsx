import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ContactForm } from "@/components/contact-form"
import { ProjectCard } from "@/components/project-card"
import { AnimatedSection } from "@/components/animated-section"
import { StaggeredContainer } from "@/components/staggered-container"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Online Art Gallery Platform",
    description:
      "A comprehensive full-stack platform enabling artists to showcase and sell their artwork with integrated payment processing and role-based dashboards.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Next.js", "Prisma", "MySQL", "Chapa API"],
    repoUrl: "https://github.com/kidushintsa/art-gallery-platform",
    liveUrl: "https://art-gallery-demo.vercel.app",
    featured: true,
  },
  {
    title: "Game Discovery App",
    description:
      "Modern web application for browsing and discovering video games using the RAWG API with smooth animations and detailed game information.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React.js", "RAWG API", "Zustand", "Tailwind CSS", "Framer Motion"],
    repoUrl: "https://github.com/kidushintsa/game-discovery-app",
    liveUrl: "https://game-discovery-demo.vercel.app",
    featured: true,
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900">
      <Navigation />
      <HeroSection />
      <AboutSection />

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Featured{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                Projects
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              A showcase of my recent work and{" "}
              <span className="font-semibold text-purple-400">technical expertise</span>
            </p>
          </AnimatedSection>

          <StaggeredContainer className="grid grid-cols-1 md:grid-cols-2 gap-8" staggerDelay={0.2}>
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </StaggeredContainer>

          <AnimatedSection className="mt-12 text-center">
            <p className="text-gray-300 mb-4">Want to see more of my work?</p>
            <a
              href="https://github.com/kidushintsa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors"
            >
              View all projects on GitHub
              <ExternalLink className="h-4 w-4" />
            </a>
          </AnimatedSection>
        </div>
      </section>

      <SkillsSection />

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Let's{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400">Connect</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Have a project in mind or just want to chat about{" "}
              <span className="font-semibold text-blue-400">technology</span>? I'd love to hear from you!
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <ContactForm />
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
