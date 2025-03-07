"use client";

import {
    FeatherIcon,
    GithubIcon,
    HouseIcon,
    LinkedinIcon,
    MailIcon,
    XIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";

// import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Dock, DockIcon } from "../ui/dock";

export type IconProps = React.HTMLAttributes<SVGElement>;

const DATA = {
    home: { href: "/", icon: HouseIcon, label: "Home" },
    contact: {
        social: {
            GitHub: {
                name: "GitHub",
                url: "#",
                icon: GithubIcon,
            },
            LinkedIn: {
                name: "LinkedIn",
                url: "#",
                icon: LinkedinIcon,
            },
            X: {
                name: "X",
                url: "#",
                icon: XIcon,
            },
            email: {
                name: "Send Email",
                url: "#",
                icon: MailIcon,
            },
        },
    },
    blog: { href: "/", icon: FeatherIcon, label: "Blogs" },
};

export function DockDemo() {
    return (
        <div>
            <TooltipProvider>
                <Dock direction="middle">
                    <DockIcon>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href={DATA.home.href}
                                    aria-label={DATA.home.label}
                                    className={cn(
                                        buttonVariants({
                                            variant: "ghost",
                                            size: "icon",
                                        }),
                                        "size-12 rounded-full"
                                    )}
                                >
                                    <DATA.home.icon className="size-4" />
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{DATA.home.label}</p>
                            </TooltipContent>
                        </Tooltip>
                    </DockIcon>
                    <Separator orientation="vertical" className="h-full" />
                    {Object.entries(DATA.contact.social).map(
                        ([name, social]) => (
                            <DockIcon key={name}>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Link
                                            href={social.url}
                                            aria-label={social.name}
                                            className={cn(
                                                buttonVariants({
                                                    variant: "ghost",
                                                    size: "icon",
                                                }),
                                                "size-12 rounded-full"
                                            )}
                                        >
                                            <social.icon className="size-4" />
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>{name}</p>
                                    </TooltipContent>
                                </Tooltip>
                            </DockIcon>
                        )
                    )}
                    <Separator orientation="vertical" className="h-full py-2" />
                    <DockIcon>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href={DATA.blog.href}
                                    aria-label={DATA.blog.label}
                                    className={cn(
                                        buttonVariants({
                                            variant: "ghost",
                                            size: "icon",
                                        }),
                                        "size-12 rounded-full"
                                    )}
                                >
                                    <DATA.blog.icon className="size-4" />
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{DATA.blog.label}</p>
                            </TooltipContent>
                        </Tooltip>
                    </DockIcon>
                </Dock>
            </TooltipProvider>
        </div>
    );
}
