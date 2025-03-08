"use client";

import { useState } from "react";
import { ProjectsFilter } from "@/components/projects/filter";
import { ProjectsGrid } from "@/components/projects/grid";

// Project data with realistic images
const projects = [
    {
        id: 1,
        title: "E-commerce Platform",
        description:
            "Full-stack online shopping platform with Next.js and Node.js",
        category: "Web Development",
        tech: ["react", "nextjs", "typescript", "nodejs"],
        image: "/placeholder.svg?height=600&width=800&text=E-commerce+Platform",
        links: {
            demo: "#",
            github: "#",
        },
    },
    {
        id: 2,
        title: "Fitness Mobile App",
        description: "Cross-platform fitness tracking application",
        category: "Mobile Apps",
        tech: ["react", "typescript", "nodejs"],
        image: "/placeholder.svg?height=600&width=800&text=Fitness+App",
        links: {
            demo: "#",
        },
    },
    {
        id: 3,
        title: "Portfolio Website",
        description: "Modern UI/UX design for portfolio website",
        category: "Design",
        tech: ["figma"],
        image: "/placeholder.svg?height=600&width=800&text=Portfolio+Design",
        links: {
            demo: "#",
        },
    },
    {
        id: 4,
        title: "Task Management",
        description:
            "Interactive dashboard for team task management with real-time updates",
        category: "Web Development",
        tech: ["react", "typescript", "tailwind"],
        image: "/placeholder.svg?height=600&width=800&text=Task+Dashboard",
        links: {
            demo: "#",
            github: "#",
        },
    },
    {
        id: 5,
        title: "Travel Blog",
        description:
            "Content management system for travel bloggers with media optimization",
        category: "Web Development",
        tech: ["nextjs", "nodejs", "tailwind"],
        image: "/placeholder.svg?height=600&width=800&text=Travel+Blog",
        links: {
            demo: "#",
            github: "#",
        },
    },
    {
        id: 6,
        title: "Restaurant Booking",
        description:
            "Mobile application for restaurant reservations and menu browsing",
        category: "Mobile Apps",
        tech: ["react", "typescript"],
        image: "/placeholder.svg?height=600&width=800&text=Restaurant+App",
        links: {
            demo: "#",
        },
    },
];

export default function ProjectsPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    return (
        <div className="container py-12">
            <h2 className="text-4xl font-bold mb-4">Projects</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl">
                A collection of my recent work across web development, mobile
                apps, and design.
            </p>

            <ProjectsFilter
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
            />

            <div className="mt-8">
                <ProjectsGrid
                    projects={projects}
                    selectedCategory={selectedCategory}
                />
            </div>
        </div>
    );
}
