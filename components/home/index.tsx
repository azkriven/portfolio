import { BlurReveal } from "@/components/animations/blur";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import HomeBlog from "./home-blog";

export default function Hero() {
    return (
        <BlurReveal className="flex flex-col justify-center px-4 md:px-8 lg:px-16 gap-y-4 md:gap-y-5">
            <h1 className="font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
                Design engineer and builder
            </h1>
            <p className="text-muted-foreground font-medium text-xl md:text-2xl max-w-2xl">
                I'm Selene, a design engineer at FLY, where I craft intuitive
                user experiences. After hours, I build my own projects.
            </p>
            <Button className="group w-fit px-1.5 flex gap-5 rounded-full border border-white/30 hover:border-white/50 animate-border-pulse transition-all duration-300 hover:scale-105 mb-10">
                <Avatar>
                    <AvatarImage
                        src="https://github.com/azkriven.png"
                        alt="profile"
                    />
                    <AvatarFallback className="text-black">E</AvatarFallback>
                </Avatar>
                About me
                <ArrowRightIcon className="transition-transform duration-300 group-hover:translate-x-1" />
            </Button>

            <HomeBlog />
        </BlurReveal>
    );
}
