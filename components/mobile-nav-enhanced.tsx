"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SocialButton } from "./social-button";
import { smoothScrollTo } from "@/lib/smooth-scroll";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function MobileNavEnhanced() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  const handleNavClick = (href: string) => {
    smoothScrollTo(href);
    closeMenu();
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      x: 300,
      transition: {
        duration: 0.3,
        ease: "easeInOut" as any,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut" as any,
      },
    },
  };

  const linkVariants = {
    closed: {
      opacity: 0,
      y: 20,
    },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.1,
        duration: 0.3,
        ease: "easeOut" as any,
      },
    }),
  };

  const socialVariants = {
    closed: {
      opacity: 0,
      scale: 0.8,
    },
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.5,
        duration: 0.3,
        ease: "easeOut" as any,
      },
    },
  };

  return (
    <>
      {/* Hamburger Button */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden relative z-50"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <motion.div
          animate={isOpen ? "open" : "closed"}
          className="flex items-center justify-center"
        >
          <motion.div
            variants={{
              closed: { rotate: 0, opacity: 1 },
              open: { rotate: 180, opacity: 0 },
            }}
            transition={{ duration: 0.2 }}
            className="absolute"
          >
            <Menu className="h-6 w-6" />
          </motion.div>
          <motion.div
            variants={{
              closed: { rotate: -180, opacity: 0 },
              open: { rotate: 0, opacity: 1 },
            }}
            transition={{ duration: 0.2 }}
            className="absolute"
          >
            <X className="h-6 w-6" />
          </motion.div>
        </motion.div>
      </Button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop - Solid dark overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 z-40 md:hidden"
              onClick={closeMenu}
            />

            {/* Menu Panel - Gradient background option */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 h-full w-full z-40 md:hidden flex flex-col shadow-2xl"
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                // Alternative solid color: background: "#ffffff"
                // Alternative dark theme: background: "linear-gradient(135deg, #1f2937 0%, #111827 100%)"
              }}
            >
              {/* Menu Content */}
              <div className="flex-1 flex flex-col justify-center items-center px-6">
                {/* Navigation Links */}
                <nav className="flex flex-col items-center space-y-8 mb-12">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.href}
                      custom={i}
                      variants={linkVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                    >
                      <button
                        onClick={() => handleNavClick(link.href)}
                        className="text-2xl font-medium text-gray-900 hover:text-blue-600 transition-colors duration-200 py-3 px-6 rounded-xl hover:bg-white/50 active:scale-95 transform transition-transform"
                      >
                        {link.label}
                      </button>
                    </motion.div>
                  ))}
                </nav>

                {/* Social Links */}
                <motion.div
                  variants={socialVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="flex flex-col items-center space-y-4"
                >
                  <div className="flex space-x-4">
                    <SocialButton
                      platform="github"
                      href="https://github.com/kidushintsa"
                      variant="outline"
                    >
                      GitHub
                    </SocialButton>
                    <SocialButton
                      platform="linkedin"
                      href="https://linkedin.com/in/kidus-hintsa"
                      variant="outline"
                    >
                      LinkedIn
                    </SocialButton>
                  </div>

                  {/* Resume Button */}
                  {/* <Button className="mt-4 shadow-lg">Download Resume</Button> */}
                </motion.div>
              </div>

              {/* Footer */}
              <motion.div
                variants={socialVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="p-6 text-center border-t border-gray-200/50"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
              >
                <p className="text-sm text-gray-500">© 2024 Kidus Hintsa</p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
