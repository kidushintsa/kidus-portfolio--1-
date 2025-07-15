"use client";
import Image from "next/image";
import { AnimatedSection } from "./animated-section";
import { User, Heart, Lightbulb } from "lucide-react";

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg">
                <User className="h-6 w-6" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                About{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Me
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-gray-300 leading-relaxed">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-emerald-500/20 mt-1">
                  <Heart className="h-4 w-4 text-emerald-400" />
                </div>
                <p>
                  I'm a passionate{" "}
                  <span className="font-semibold text-emerald-400">
                    self-taught
                  </span>{" "}
                  full-stack developer currently pursuing Computer Science at
                  university. My journey in web development started with
                  curiosity and has evolved into a deep love for creating
                  <span className="font-semibold text-purple-400">
                    {" "}
                    innovative digital solutions
                  </span>
                  .
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-blue-500/20 mt-1">
                  <Lightbulb className="h-4 w-4 text-blue-400" />
                </div>
                <p>
                  I specialize in modern web technologies including{" "}
                  <span className="font-semibold text-blue-400">
                    React, Next.js, and Node.js
                  </span>
                  , with experience in both frontend and backend development. I
                  enjoy tackling complex problems and turning ideas into
                  functional, user-friendly applications.
                </p>
              </div>

              <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border-l-4 border-gradient-to-b from-blue-500 to-purple-500 border border-slate-700">
                <p className="text-gray-200">
                  I believe in continuous learning and staying updated with the
                  latest industry trends.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.2}>
            <div className="flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <Image
                  src="/techImg/linked.jpg"
                  alt="Kidus Hintsa"
                  width={400}
                  height={400}
                  className="relative rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
