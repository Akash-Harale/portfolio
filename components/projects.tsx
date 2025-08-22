"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Logitrack - Logistic Web App",
      description:
        "A robust logistics management platform designed to streamline shipment tracking, fleet management, and delivery operations. Features include real-time tracking, order management, route optimization, analytics dashboard, and role-based access for admins, drivers, and clients.",
      image: "/images/logistic.jpg",
      tags: [
        "React",
        "Typescript",
        "Javascript",
        "Next.js",
        "Redux",
        "Tailwind CSS",
      ],
      liveUrl: "https://logistic-two-pink.vercel.app/",
      githubUrl: "https://github.com/Akash-Harale/logistic",
    },
    {
      title: "Training Management System",
      description:
        "A comprehensive platform for managing corporate and educational training programs, featuring course creation, trainee enrollment, progress tracking, role-based access control, and secure payment integration for premium courses.",
      image: "/images/gamp.jpg",
      tags: ["React", "Node.js", "Express", "Redux"],
      note: "Client project (Admin side) - GitHub and live link not publicly available",
    },
    {
      title: "Flair Technologies - Online IT Courses",
      description:
        "An interactive e-learning platform by Flair Technologies offering a wide range of IT courses. Features include course browsing, video-based learning, expert instructor profiles, student progress tracking, certification, secure payments, and a seamless learning experience across devices.",
      image: "/images/flair.jpg",
      tags: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB",
      ],
      liveUrl: "https://flair-technologies-bice.vercel.app/",
      githubUrl: "https://github.com/Akash-Harale/flair-technologies",
    },
    {
      title: "Shop Now : E-Commerce Promotional Website",
      description:
        "A modern promotional website designed to showcase products, highlight seasonal offers, and drive customer engagement. Features include dynamic product showcases, promotional banners, responsive design, smooth animations, and integrated call-to-action sections for boosting sales conversions.",
      image: "/images/ecommerce.jpg",
      tags: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://ecommerce-promotion.vercel.app/",
      githubUrl: "https://github.com/Akash-Harale/ecommerce-promotion",
    },
    {
      title: "Relaxing Touch Massage",
      description:
        "A beautifully designed website for booking professional massage services, featuring an intuitive service selection, appointment scheduling, user authentication, and a smooth, relaxing user experience.",
      image: "/images/body-massage.png",
      tags: ["React", "Node.js", "Express", "MongoDB", "Redux", "Stripe"],
      liveUrl: "https://spa-pink-theta.vercel.app/",
      githubUrl: "https://github.com/Akash-Harale/spa",
    },

    {
      title: "Task Management App - Backend",
      description:
        "A collaborative task management application with real-time updates, task assignment, and progress tracking.",
      image: "/images/task-manager.jpg",
      tags: [
        "Next.js",
        "React.js",
        "Node.js",
        "Express",
        "MongoDB",
        "Tailwind CSS",
      ],
      githubUrl: "https://github.com/Akash-Harale/todo",
    },
    {
      title: "URL Shortener - Backend",
      description:
        "A simple URL shortening service that allows users to shorten long URLs and track click statistics.",
      image: "/images/url-shortner.png",
      tags: ["React", "Node.js", "MongoDB", "Material UI"],
      githubUrl: "https://github.com/Akash-Harale/Backend-of-URL-Shortner",
    },
    {
      title: "Roll Dice App - Android Application ( Flutter )",
      description:
        " A simple Flutter app that simulates rolling dice with animations and sound effects.",
      image: "/images/roll-dice.jpg",
      tags: ["FLutter", "Dart", "Animation"],
      githubUrl: "https://github.com/Akash-Harale/flutter_roll_dice_app",
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 bg-muted/30 dark:bg-slate-900/50"
    >
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            My Projects
          </motion.h2>
          <div className="w-20 h-1 mt-2 bg-indigo-500 dark:bg-indigo-400 rounded-full"></div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground max-w-2xl"
          >
            Here are some of my recent projects that showcase my skills and
            expertise in full-stack development.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className="overflow-hidden h-full dark:bg-slate-800/50 dark:border-slate-700">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                  <p className="mb-4 text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-medium rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.githubUrl && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-950/50"
                        asChild
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2" /> Code
                        </a>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button
                        size="sm"
                        className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
                        asChild
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                        </a>
                      </Button>
                    )}
                    {!project.githubUrl && !project.liveUrl && project.note && (
                      <p className="text-sm bg-indigo-100 dark:bg-indigo-600 px-5">
                        {project.note}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-950/50"
            asChild
          >
            <a
              href="https://github.com/Akash-Harale"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 mr-2" /> View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
