"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Github, ArrowRight } from "lucide-react";

export default function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Vehicle Location Tracking System (VLTS)",
      category: "Fleet Management",
      description:
        "A real-time vehicle monitoring platform built for enterprise fleet operations. Features live GPS tracking via WebSockets, interactive maps with trip history, and role-based analytics dashboards for monitoring fleet activity and driver behavior.",
      image: "/images/vlts1.gif",
      tags: ["React", "Node.js", "WebSockets", "Google Maps API", "Docker", "MongoDB"],
      liveUrl: "https://vlts.nutanteksolutions.cloud/",
      githubUrl: "",
      featured: true,
    },
    {
      title: "Freechats - Messaging Platform",
      category: "Communication",
      description:
        "A secure instant messaging web app featuring verified user connections and integrated payment gateways for premium features. Built with verified connection protocols to ensure secure and trusted user interactions.",
      image: "/images/freechats.gif",
      tags: ["React", "Node.js", "MongoDB", "JWT", "Docker", "Tailwind CSS"],
      githubUrl: "",
      featured: true,
    },
    {
      title: "ProcureX - RFQ Management",
      category: "Enterprise Software",
      description:
        "A scalable procurement management system that streamlines vendor-buyer interactions. Features dynamic form handling with real-time validations using TypeScript and Supabase for secure authentication.",
      image: "/images/gamp.jpg",
      tags: ["React", "TypeScript", "Supabase", "ShadCN", "Tailwind CSS"],
      githubUrl: "",
      featured: true,
    },
    {
      title: "MCQ Quiz App",
      category: "Mobile Development",
      description:
        "A cross-platform mobile application that allows users to practice multiple-choice questions across various subjects. Built with a focus on performance and intuitive user experience.",
      image: "/images/flair.jpg", // Reusing flair image or using a placeholder
      tags: ["Flutter", "Dart", "Mobile UI", "State Management"],
      githubUrl: "",
      featured: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="projects" ref={ref} className="py-24 relative overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold tracking-tight sm:text-5xl font-display"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <div className="w-24 h-1.5 mt-4 bg-indigo-500 rounded-full"></div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg text-muted-foreground max-w-2xl"
          >
            A collection of my most impactful work, combining clean code with exceptional user experience.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={cardVariants} className="group relative">
              <div className="glass rounded-3xl overflow-hidden h-full flex flex-col border-indigo-500/10 hover:border-indigo-500/30 transition-all duration-500">
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-60"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-indigo-500 text-white shadow-lg">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-3 font-display group-hover:text-indigo-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest rounded-md bg-indigo-500/5 border border-indigo-500/10 text-indigo-600 dark:text-indigo-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-4">
                    {project.liveUrl && (
                      <Button
                        size="sm"
                        className="rounded-full text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 shadow-md shadow-indigo-500/20 group/btn"
                        asChild
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          Live Demo <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    )}
                    
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full glass hover:bg-indigo-500 hover:text-white transition-all"
                      >
                        <Github className="w-5 h-5" />
                        <span className="sr-only">Source Code</span>
                      </a>
                    ) : (
                      <div className="text-[10px] font-bold text-indigo-500/60 uppercase tracking-widest border border-indigo-500/20 px-3 py-1.5 rounded-full glass">
                         Confidential Code
                       </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-20 text-center"
        >
          <Button
            size="lg"
            variant="outline"
            className="rounded-full border-2 border-indigo-600/50 text-indigo-600 hover:bg-indigo-50 dark:border-indigo-400/50 dark:text-indigo-400 dark:hover:bg-indigo-950/50 px-10 h-14 text-lg font-display"
            asChild
          >
            <a href="https://github.com/Akash-Harale" target="_blank" rel="noopener noreferrer">
              View All Repositories <Github className="w-5 h-5 ml-3" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
