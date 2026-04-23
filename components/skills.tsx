"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { 
  Database, 
  Layout, 
  Server, 
  Wrench,
  Zap
} from "lucide-react";

export default function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Layout,
      skills: ["React.js", "Next.js", "TypeScript", "Redux Toolkit", "Tailwind CSS", "Framer Motion", "HTML5/CSS3"],
      color: "from-blue-500 to-cyan-500",
      description: "Crafting responsive, interactive, and user-centric interfaces."
    },
    {
      title: "Backend & Systems",
      icon: Server,
      skills: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "Socket.IO", "Webhooks", "Nginx", "PM2"],
      color: "from-green-500 to-emerald-500",
      description: "Building robust, scalable, and secure server-side architectures."
    },
    {
      title: "Database & Cloud",
      icon: Database,
      skills: ["MongoDB", "Mongoose", "Supabase", "Firebase", "Redis", "PostgreSQL", "AWS S3", "CloudFront"],
      color: "from-orange-500 to-amber-500",
      description: "Managing data persistence and cloud-native solutions."
    },
    {
      title: "DevOps & Workflow",
      icon: Wrench,
      skills: ["Docker", "Docker Compose", "Git/GitHub", "Linux (Ubuntu)", "VPS Deployment", "Vite", "Postman", "CI/CD"],
      color: "from-purple-500 to-indigo-500",
      description: "Optimizing development cycles and infrastructure management."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="skills" ref={ref} className="py-24 relative overflow-hidden bg-slate-50/30 dark:bg-slate-900/10">
      {/* Background blobs for depth */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold tracking-tight sm:text-5xl font-display"
          >
            Technical <span className="text-gradient">Expertise</span>
          </motion.h2>
          <div className="w-24 h-1.5 mt-4 bg-indigo-500 rounded-full"></div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg text-muted-foreground max-w-2xl"
          >
            A comprehensive toolkit of modern technologies I use to bring ideas to life.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="glass p-8 rounded-3xl hover:border-indigo-500/50 transition-all duration-500 group"
            >
              <div className="flex items-start gap-6">
                <div className={`w-16 h-16 shrink-0 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg shadow-indigo-500/10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 font-display">{category.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, sIdx) => (
                      <motion.span
                        key={sIdx}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-indigo-500/5 border border-indigo-500/10 text-slate-700 dark:text-slate-300 hover:bg-indigo-500 hover:text-white hover:border-indigo-500 transition-all cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border-indigo-500/20 text-sm font-medium text-muted-foreground">
            <Zap className="w-4 h-4 text-amber-500" />
            <span>Always learning and exploring new technologies</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
