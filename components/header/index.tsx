import { person } from "@/resources/content";
import { BlurReveal } from "../animations/blur";
import { HeaderNav } from "./header-nav";
import TimeDisplay from "./time-display";

export default function Header() {
    return (
        <BlurReveal
            delay={2}
            direction="right"
            className="p-8 flex items-center justify-between"
        >
            <p>{person.location}</p>
            <HeaderNav />
            <TimeDisplay timeZone={person.location} />
        </BlurReveal>
    );
}
