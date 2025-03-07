import { BlurReveal } from "../animations/blur";
import { Dock, DockDemo } from "./dock";
import TimeDisplay from "./time-display";
import { person } from "@/resources/content";

export default function Header() {
    return (
        <BlurReveal
            delay={2}
            direction="right"
            className="p-8 flex items-center justify-between"
        >
            <p>{person.location}</p>
            <DockDemo />
            <TimeDisplay timeZone={person.location} />
        </BlurReveal>
    );
}
