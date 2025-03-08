"use client";

import { Button } from "@/components/ui/button";

interface ProjectsFilterProps {
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
}

export function ProjectsFilter({
    selectedCategory,
    onCategoryChange,
}: ProjectsFilterProps) {
    const categories = ["All", "Web Development", "Mobile Apps", "Design"];

    return (
        <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
                <Button
                    key={category}
                    variant={
                        selectedCategory === category ? "secondary" : "ghost"
                    }
                    size="sm"
                    onClick={() => onCategoryChange(category)}
                    className="rounded-full text-sm transition-all duration-300 border"
                >
                    {category}
                </Button>
            ))}
        </div>
    );
}
