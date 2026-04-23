"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download, Award, Briefcase, Users, MapPin } from "lucide-react";

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { label: "Years of Experience", value: "2.9", icon: Award },
    { label: "Projects Completed", value: "15+", icon: Briefcase },
    { label: "Happy Clients", value: "10+", icon: Users },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 relative overflow-hidden"
    >
      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold tracking-tight sm:text-5xl font-display"
          >
            About <span className="text-gradient">Me</span>
          </motion.h2>
          <div className="w-24 h-1.5 mt-4 bg-indigo-500 rounded-full"></div>
        </div>

        <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition duration-500"></div>
            <div className="relative overflow-hidden rounded-2xl aspect-square glass p-2">
              <Image
                src="/images/my-photo.jpeg"
                alt="Akash Harale portrait"
                width={600}
                height={600}
                className="object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="mb-6 text-3xl font-bold font-display">
              Building Scalable Digital Solutions
            </h3>
            <p className="mb-6 text-lg text-muted-foreground leading-relaxed">
              I&apos;m Akash Harale, a dedicated Full Stack Developer with <span className="font-bold text-indigo-600 dark:text-indigo-400">2.9 years</span> of professional experience. I specialize in the MERN stack, crafting high-performance applications that bridge the gap between complex business needs and seamless user experiences.
            </p>
            <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
              Based in <span className="inline-flex items-center gap-1 font-medium text-foreground"><MapPin className="w-4 h-4 text-indigo-500" /> Delhi, India</span>, I have successfully delivered projects ranging from logistics tracking systems to secure messaging platforms, always prioritizing clean code and modular architecture.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="glass p-4 rounded-xl text-center hover:border-indigo-500/50 transition-colors group"
                >
                  <stat.icon className="w-6 h-6 mx-auto mb-2 text-indigo-500 group-hover:scale-110 transition-transform" />
                  <div className="text-2xl font-bold font-display">{stat.value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="rounded-full text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 px-8"
                asChild
              >
                <a
                  href="/Akash_Harale_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="w-4 text-white h-4 mr-2" /> Download Resume
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-indigo-600/50 text-indigo-600 hover:bg-indigo-50 dark:border-indigo-400/50 dark:text-indigo-400 dark:hover:bg-indigo-950/50 px-8"
                asChild
              >
                <a href="#contact">Hire Me</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
