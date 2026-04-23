"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const texts = ["Full Stack Developer", "MERN Specialist", "Tech Enthusiast"];

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);

  if (!mounted) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen pt-16 overflow-hidden"
    >
      <div className="container relative z-10 px-4 mx-auto text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="inline-block px-4 py-1 mb-6 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 font-medium text-sm">
            Available for new opportunities
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl font-bold tracking-tight sm:text-7xl md:text-8xl font-display">
            <span className="block mb-2">
              Hi, I&apos;m{" "}
              <span className="text-gradient">
                Akash Harale
              </span>
            </span>
            <div className="h-[1.2em] relative flex justify-center items-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={textIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="absolute text-3xl sm:text-5xl md:text-6xl text-slate-700 dark:text-slate-300 font-medium"
                >
                  {texts[textIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.h1>

          <motion.p variants={itemVariants} className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Crafting high-performance, scalable web applications with the MERN stack. 
            Focused on clean architecture and exceptional user experiences.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4 mt-10">
            <Button
              size="lg"
              className="rounded-full text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 shadow-lg shadow-indigo-500/25 px-10 h-14 text-lg"
              asChild
            >
              <a href="#projects">View Projects</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-2 border-indigo-600/50 text-indigo-600 hover:bg-indigo-50 dark:border-indigo-400/50 dark:text-indigo-400 dark:hover:bg-indigo-950/50 px-10 h-14 text-lg backdrop-blur-sm"
              asChild
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center justify-center gap-8 mt-16">
            {[
              { icon: Github, href: "https://github.com/Akash-Harale", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/akash-v-harale/", label: "LinkedIn" },
              { icon: Twitter, href: "https://x.com/akash_v_harale", label: "Twitter" },
              { icon: Mail, href: "mailto:akash.v.harale@gmail.com", label: "Email" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-muted-foreground transition-colors hover:text-indigo-600 dark:hover:text-indigo-400 p-2"
              >
                <social.icon className="w-6 h-6 md:w-7 md:h-7" />
                <span className="sr-only">{social.label}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-indigo-600 dark:hover:text-indigo-400"
        >
          <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
          <ArrowDown className="w-5 h-5" />
        </motion.a>
      </motion.div>
    </section>
  );
}
