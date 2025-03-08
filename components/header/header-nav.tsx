"use client";

import {
    FeatherIcon,
    FoldersIcon,
    GithubIcon,
    HouseIcon,
    LinkedinIcon,
    MailIcon,
    PhoneCallIcon,
    UserCircleIcon,
    XIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";

// import { ModeToggle } from "@/components/mode-toggle";
import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Dock } from "../ui/dock";
import { usePathname } from "next/navigation";

export type IconProps = React.HTMLAttributes<SVGElement>;

const DATA = {
    home: { href: "/", icon: HouseIcon, label: "Home" },
    navigation: [
        { href: "/about", icon: UserCircleIcon, label: "About" },
        { href: "/work", icon: FoldersIcon, label: "Work" },
        {
            href: "https://portfolio-blog-starter.vercel.app/",
            icon: FeatherIcon,
            label: "Blog",
            external: true,
        },
        { href: "/contact", icon: PhoneCallIcon, label: "Contact" },
    ],
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

export function HeaderNav() {
    const path = usePathname();
    return (
        <nav className="bg-black rounded-xl">
            <TooltipProvider>
                <Dock direction="middle">
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href={DATA.home.href}
                                aria-label={DATA.home.label}
                                className={cn(
                                    buttonVariants({
                                        variant:
                                            path === DATA.home.href
                                                ? "default"
                                                : "ghost",
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
                    <Separator orientation="vertical" className="h-full" />
                    {DATA.navigation.map((data) => (
                        <Link
                            key={data.label}
                            href={data.href}
                            target={data.external ? "_blank" : "_parent"}
                        >
                            <Button
                                variant={
                                    path === data.href ? "default" : "ghost"
                                }
                                className="border border-white/0 hover:bg-transparent hover:border-white hover:text-white"
                            >
                                <data.icon />{" "}
                                <span className="hidden md:inline">
                                    {data.label}
                                </span>
                            </Button>
                        </Link>
                    ))}
                    {/* {Object.entries(DATA.contact.social).map(
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
                                                    // size: "icon",
                                                })
                                                // "size-12 rounded-full"
                                            )}
                                        >
                                            <social.icon className="size-4" />
                                            About
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>{name}</p>
                                    </TooltipContent>
                                </Tooltip>
                            </DockIcon>
                        )
                    )} */}
                </Dock>
            </TooltipProvider>
        </nav>
    );
}
