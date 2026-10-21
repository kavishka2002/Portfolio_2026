"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <div className="fixed left-[252px] top-0 z-40 hidden h-screen w-px bg-border/10 lg:block">
      <motion.div
        style={{ scaleY, transformOrigin: "top" }}
        className="h-full w-px bg-amber"
      />
    </div>
  );
}
