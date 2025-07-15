"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TechIcon } from "./tech-icon";
import { AnimatedSection } from "./animated-section";
import { StaggeredContainer } from "./staggered-container";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript", logo: "/techImg/js.JPG" },
      { name: "TypeScript", logo: "/techImg/tsJPG.JPG" },
      { name: "Java", logo: "/techImg/java.JPG" },
      { name: "PHP", logo: "/techImg/php.JPG" },
      { name: "C++", logo: "/techImg/c.JPG" },
    ],
  },
  {
    title: "Frontend Technologies",
    skills: [
      { name: "React.js", logo: "/techImg/React.JPG" },
      { name: "Next.js", logo: "/techImg/Next.JPG" },
      { name: "TailwindCSS", logo: "/techImg/tailwind.JPG" },
      { name: "Bootstrap", logo: "/techImg/bs.JPG" },
      { name: "jQuery", logo: "/techImg/jq.JPG" },
    ],
  },
  {
    title: "Backend & Tools",
    skills: [
      { name: "Node.js", logo: "/techImg/nj.JPG" },
      { name: "Express.js", logo: "/techImg/eJ.JPG" },
      { name: "Docker", logo: "/techImg/docker.JPG" },
      { name: "Git/GitHub", logo: "/techImg/git.JPG" },
      { name: "Firebase", logo: "/techImg/fb.JPG" },
    ],
  },
  {
    title: "Databases & ORMs",
    skills: [
      { name: "MySQL", logo: "/techImg/mysql.JPG" }, // If it exists
      { name: "PostgreSQL", logo: "/techImg/postgre.JPG" },
      { name: "MongoDB", logo: "/techImg/mongo.JPG" },
      { name: "Prisma ORM", logo: "/techImg/prisma.JPG" },
    ],
  },
];

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-slate-800 to-slate-900"
    >
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

        <StaggeredContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          staggerDelay={0.1}
        >
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-slate-700 bg-slate-800/80 backdrop-blur-sm overflow-hidden hover:border-blue-500/50"
            >
              <CardHeader className="pb-4 relative">
                <div className="flex items-center gap-3 relative z-10">
                  <CardTitle className="text-lg text-white">
                    {category.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-700/50 transition-colors"
                    >
                      <div
                        className={`flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-gray-50 transition-colors`}
                      >
                        <div className="relative w-12 h-12 flex items-center justify-center">
                          <Image
                            src={`${skill.logo}`}
                            alt={`logo`}
                            width={48}
                            height={48}
                            className="rounded-lg object-contain"
                            // style={{
                            //   backgroundColor: config.bgColor,
                            //   border: `1px solid ${config.color}20`,
                            // }}
                          />
                        </div>
                      </div>{" "}
                      <span className="text-sm font-medium text-gray-200">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </StaggeredContainer>

        <AnimatedSection className="mt-16 text-center">
          <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-slate-700">
            <h3 className="text-xl font-semibold text-white mb-4">
              Always learning, always growing
            </h3>
            <p className="text-gray-300 mb-6">
              Currently exploring{" "}
              <span className="font-semibold text-emerald-400">AI/ML</span>,
              <span className="font-semibold text-blue-400">
                {" "}
                Cloud Architecture
              </span>
              , and
              <span className="font-semibold text-purple-400">
                {" "}
                Web3 Technologies
              </span>
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                "Machine Learning",
                "AWS",
                "Blockchain",
                "GraphQL",
                "Microservices",
              ].map((tech) => (
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
  );
}
