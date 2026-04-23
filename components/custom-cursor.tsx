"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("button") ||
        target.closest("a")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none hidden md:block">
      <motion.div
        className="w-8 h-8 rounded-full border-2 border-indigo-500 flex items-center justify-center"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 2 : 1,
          backgroundColor: isHovering ? "rgba(99, 102, 241, 0.1)" : "transparent",
        }}
        transition={{ type: "spring", damping: 20, stiffness: 250, mass: 0.5 }}
      >
        <motion.div 
          className="w-1.5 h-1.5 bg-indigo-500 rounded-full"
          animate={{
            scale: isHovering ? 0 : 1
          }}
        />
      </motion.div>
    </div>
  );
}
