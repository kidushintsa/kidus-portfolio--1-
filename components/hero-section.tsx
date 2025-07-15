"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SocialButton } from "./social-button";
import { Download, ChevronDown, Code2 } from "lucide-react";

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center overflow-hidden bg-slate-900">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-violet-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center w-full relative z-10"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
        >
          Hi, I'm{" "}
          <motion.span
            className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Kidus Hintsa
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.span>
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-xl sm:text-2xl text-gray-300 mb-4 flex items-center justify-center gap-2"
        >
          <Code2 className="h-6 w-6 text-blue-400" />
          <span className="relative">
            Full-Stack Developer
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"></span>
          </span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          <span className="font-semibold text-emerald-400">Self-taught</span>{" "}
          web developer passionate about creating{" "}
          <span className="font-semibold text-purple-400">
            innovative solutions
          </span>{" "}
          while pursuing{" "}
          <span className="font-semibold text-blue-400">Computer Science</span>
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          {/* <motion.div variants={buttonVariants}>
            <a href="/api/resume" target="_blank">
              <Button
                size="lg"
                className="w-full sm:w-auto group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Download Resume
              </Button>
            </a>
          </motion.div> */}

          <motion.div variants={buttonVariants} className="flex gap-4">
            <SocialButton
              platform="github"
              href="https://github.com/kidushintsa"
              variant="outline"
              size="lg"
            >
              GitHub
            </SocialButton>
            <SocialButton
              platform="linkedin"
              href="https://linkedin.com/in/kidus-hintsa"
              variant="outline"
              size="lg"
            >
              LinkedIn
            </SocialButton>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <p className="text-sm text-gray-500 mb-2">Scroll to explore</p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="p-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20"
          >
            <ChevronDown className="h-6 w-6 text-gray-400" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
