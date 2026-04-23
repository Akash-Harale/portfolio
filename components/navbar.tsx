"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["home", "about", "skills", "projects", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl border-b border-indigo-500/10 shadow-lg shadow-indigo-500/5"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between">
          <Link href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight font-display group-hover:text-indigo-600 transition-colors">
              Akash <span className="text-indigo-600">Harale</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative text-sm font-medium transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  {link.name}
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-indigo-600 rounded-full"
                    />
                  )}
                </Link>
              ))}
            </div>
            <div className="h-6 w-px bg-slate-200 dark:bg-slate-800"></div>
            <ThemeToggle />
            <Button
              className="rounded-full text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 px-6"
              asChild
            >
              <a href="#contact">Hire Me</a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-muted-foreground hover:text-indigo-600 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-indigo-500/10 overflow-hidden"
          >
            <div className="container px-4 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium transition-colors ${
                    activeSection === link.id
                      ? "text-indigo-600"
                      : "hover:text-indigo-600"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button
                className="rounded-full bg-indigo-600 w-full"
                asChild
              >
                <a href="#contact" onClick={() => setIsOpen(false)}>
                  Hire Me
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
