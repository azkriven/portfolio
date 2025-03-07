"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface BlurRevealProps {
    children: ReactNode;
    direction?: "left" | "right" | "top" | "bottom";
    blurStrength?: number;
    duration?: number;
    delay?: number;
    className?: string;
}

export function BlurReveal({
    children,
    direction = "right",
    blurStrength = 10,
    duration = 1,
    delay = 2,
    className = "",
}: BlurRevealProps) {
    const getClipPath = (): string => {
        switch (direction) {
            case "left":
                return "inset(0 0 0 100%)";
            case "right":
                return "inset(0 100% 0 0)";
            case "top":
                return "inset(100% 0 0 0)";
            case "bottom":
                return "inset(0 0 100% 0)";
            default:
                return "inset(0 0 0 100%)";
        }
    };

    const variants: Variants = {
        hidden: {
            clipPath: getClipPath(),
            filter: `blur(${blurStrength}px)`,
            opacity: 0,
        },
        visible: {
            clipPath: "inset(0 0 0 0)",
            filter: "blur(0px)",
            opacity: 1,
            transition: {
                duration: duration,
                delay: delay,
                ease: "easeInOut",
            },
        },
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            className={className}
        >
            {children}
        </motion.div>
    );
}
