"use client";

import { useEffect, useState } from "react";
import WaveReveal from "./wave-reveal";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

export interface CircleProps {
    height?: string;
    width?: string;
    bgColor?: string;
    borderRadius?: string;
}

interface CylinderProps {
    text?: string;
    height?: string;
    width?: string;
    bgColor?: string;
}

interface LineProps {
    className?: string;
    animationEnd: boolean;
}

function Circle({
    height = "h-8 md:h-16",
    width = "w-8 md:w-16",
    bgColor = "bg-white",
    borderRadius = "rounded-full",
}: CircleProps) {
    return <div className={cn(height, width, borderRadius, bgColor)} />;
}

function Cylinder({
    text,
    height = "h-8 md:h-16",
    width = "w-24 md:w-48",
    bgColor = "bg-white",
}: CylinderProps) {
    const textColor = bgColor === "bg-black" ? "text-white" : "text-black";
    return (
        <div
            className={cn(
                "relative flex items-center justify-center rounded-full",
                height,
                width,
                bgColor
            )}
        >
            <WaveReveal
                className={cn(
                    "min-w-fit px-4 text-xl font-bold md:px-6 md:text-6xl",
                    textColor
                )}
                text={text ?? ""}
                blur={false}
                direction="up"
                delay={200}
                duration="1000ms"
            />
        </div>
    );
}

function LineOne({ className, animationEnd }: LineProps) {
    return (
        <div
            className={cn(
                className,
                "duration-500",
                animationEnd
                    ? "animate-out fade-out slide-out-to-left-full"
                    : "animate-in fade-in slide-in-from-right-full"
            )}
        >
            <Circle borderRadius="rounded-t-full rounded-bl-full" />
            <Circle />
            <Cylinder bgColor="bg-black" />
            <Cylinder width="w-56 md:w-[300px]" />
            <Cylinder />
        </div>
    );
}

function LineTwo({ className, animationEnd }: LineProps) {
    return (
        <div
            className={cn(
                className,
                "duration-700",
                animationEnd
                    ? "animate-out fade-out slide-out-to-right-full"
                    : "animate-in fade-in slide-in-from-left-full"
            )}
        >
            <Circle />
            <Cylinder text="Welcome" width="w-64 md:w-[400px]" />
            <Circle borderRadius="rounded-t-full rounded-bl-full" />
            <Circle />
            <Cylinder bgColor="bg-black" />
        </div>
    );
}

function LineThree({ className, animationEnd }: LineProps) {
    return (
        <div
            className={cn(
                className,
                "duration-700",
                animationEnd
                    ? "animate-out fade-out slide-out-to-left-full"
                    : "animate-in fade-in slide-in-from-right-full"
            )}
        >
            <Cylinder />
            <Circle
                bgColor="bg-black"
                borderRadius="rounded-t-full rounded-br-full"
            />
            <Circle />
            <Cylinder text="to my" width="w-64 md:w-[600px]" />
            <Circle bgColor="bg-black" />
            <Cylinder />
        </div>
    );
}

function LineFour({ className, animationEnd }: LineProps) {
    return (
        <div
            className={cn(
                className,
                "duration-700",
                animationEnd
                    ? "animate-out fade-out slide-out-to-right-full"
                    : "animate-in fade-in slide-in-from-left-full"
            )}
        >
            <Circle />
            <Cylinder text="Portfolio website" width="w-96 md:w-[700px]" />
            <Circle borderRadius="rounded-t-full rounded-br-full" />
        </div>
    );
}

function LineFive({ className, animationEnd }: LineProps) {
    return (
        <div
            className={cn(
                className,
                animationEnd
                    ? "animate-out fade-out slide-out-to-left-full"
                    : "animate-in fade-in slide-in-from-right-full"
            )}
        >
            <Cylinder bgColor="bg-black" />
            <Cylinder width="w-32 md:w-[400px]" />
            <Circle />
            <Cylinder bgColor="bg-black" />
        </div>
    );
}

export default function IntroScreen({ animateOut }: { animateOut?: boolean }) {
    const [animationEnd, setAnimationEnd] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        if (!animateOut) return;

        // Wait 2 seconds before triggering exit animations
        const exitTimer = setTimeout(() => {
            setAnimationEnd(true);
            // Start fade out slightly later to maintain text visibility
            const hideTimer = setTimeout(() => setIsVisible(false), 500);
            return () => clearTimeout(hideTimer);
        }, 1500);

        return () => clearTimeout(exitTimer);
    }, [animateOut]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className={cn(
                        "flex flex-col items-center justify-center gap-1 overflow-hidden bg-black py-4 md:gap-3 h-screen w-full z-50 absolute top-0 bottom-0 left-0 right-0"
                    )}
                    exit={{ opacity: 0, transition: { duration: 0.5 } }}
                >
                    {[LineOne, LineTwo, LineThree, LineFour, LineFive].map(
                        (LineComponent, index) => (
                            <LineComponent
                                key={index}
                                className="flex duration-1000 ease-in-out fill-mode-forwards"
                                animationEnd={animationEnd}
                            />
                        )
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
