import { BlurReveal } from "@/components/animations/blur";

export default function Hero() {
    return (
        <BlurReveal className="flex flex-col justify-center px-4 md:px-8 lg:px-16 gap-y-4 md:gap-y-5">
            <h1 className="font-black text-5xl md:text-6xl lg:text-7xl leading-tight md:leading-normal">
                Design engineer <br className="hidden md:block" />
                and builder
            </h1>
            <p className="text-muted-foreground text-base md:text-lg lg:text-xl max-w-2xl">
                I'm Selene, a design engineer at FLY, where I craft intuitive
                user experiences. After hours, I build my own projects.
            </p>
        </BlurReveal>
    );
}
