"use client";

import { motion } from "framer-motion";

export default function GridBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Animated Mesh Background */}
      <div className="absolute inset-0 bg-slate-50 dark:bg-[#020617]">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-indigo-500/10 dark:bg-indigo-600/20 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-purple-500/10 dark:bg-purple-600/10 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-[10%] left-[20%] w-[60%] h-[60%] rounded-full bg-blue-500/5 dark:bg-blue-600/10 blur-[120px]"
        />
      </div>

      {/* Subtle Grid Overlay */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]"
        style={{
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 80% 50% at 50% 0%, #000 70%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 50% at 50% 0%, #000 70%, transparent 100%)",
        }}
      />
    </div>
  );
}