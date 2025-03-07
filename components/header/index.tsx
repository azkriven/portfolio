import { BlurReveal } from "../animations/blur";

export default function Header() {
    return (
        <BlurReveal delay={2} direction="right" className="p-8">
            Asia/Jakarta
        </BlurReveal>
    );
}
