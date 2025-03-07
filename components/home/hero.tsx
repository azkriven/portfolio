import { BlurReveal } from "@/components/animations/blur";

export default function Hero() {
    return (
        <BlurReveal className="min-h-screen">
            <h1 className="font-black text-7xl">Design engineer and builder</h1>
            <p className="text-muted-foreground text-xl">
                I'm Selene, a design engineer at FLY, where I craft intuitive
                user experiences. After hours, I build my own projects.
            </p>
        </BlurReveal>
    );
}
