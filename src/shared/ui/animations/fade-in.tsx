"use client";

import { motion, useInView } from "framer-motion";
import React from "react";

type DirectionType = "top" | "bottom" | "left" | "right";

export function FadeInAnimation({
  children,
  direction = "top",
}: {
  children: React.ReactNode;
  direction?: DirectionType;
}) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const getTransformValue = () => {
    switch (direction) {
      case "top":
        return "translateY(-20px)";
      case "bottom":
        return "translateY(20px)";
      case "left":
        return "translateX(-20px)";
      case "right":
        return "translateX(20px)";
      default:
        return "none";
    }
  };

  return (
    <motion.div
      ref={ref}
      style={{
        transform: isInView ? "none" : getTransformValue(),
        opacity: isInView ? 1 : 0,
        transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
      }}
    >
      {children}
    </motion.div>
  );
}
