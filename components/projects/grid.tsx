"use client";

import Image from "next/image";
import Link from "next/link";

interface Project {
    id: number;
    title: string;
    description: string;
    category: string;
    tech: string[];
    image: string;
    links: {
        demo?: string;
        github?: string;
    };
}

interface ProjectsGridProps {
    projects: Project[];
    selectedCategory: string;
}

export function ProjectsGrid({
    projects,
    selectedCategory,
}: ProjectsGridProps) {
    const filteredProjects =
        selectedCategory === "All"
            ? projects
            : projects.filter(
                  (project) => project.category === selectedCategory
              );

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project) => (
                <Link
                    key={project.id}
                    href={project.links.demo || project.links.github || "#"}
                    target="_blank"
                    className="group relative overflow-hidden rounded-lg aspect-[4/3] bg-black"
                >
                    <div className="absolute inset-0 w-full h-full">
                        <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            fill
                            className="object-cover transition-all duration-300 group-hover:scale-105 group-hover:opacity-90"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center">
                        <span className="text-white font-medium text-sm bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                            {project.title}
                        </span>

                        {project.category === "Web Development" && (
                            <span className="text-white text-xs bg-black/50 px-2 py-1 rounded-full backdrop-blur-sm flex items-center">
                                <svg
                                    className="w-3 h-3 mr-1"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12 2L2 7L12 12L22 7L12 2Z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M2 17L12 22L22 17"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M2 12L12 17L22 12"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                Vercel
                            </span>
                        )}
                    </div>
                </Link>
            ))}
        </div>
    );
}
