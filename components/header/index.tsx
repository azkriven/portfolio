import { person } from "@/resources/content";
import { BlurReveal } from "../animations/blur";
import { HeaderNav } from "./header-nav";
import TimeDisplay from "./time-display";

export default function Header() {
    return (
        <BlurReveal className="z-50 fixed bottom-0 left-1/2 -translate-x-1/2 w-full p-8 flex items-center justify-center  md:justify-between">
            <p className="hidden md:flex">{person.location}</p>
            <HeaderNav />
            <TimeDisplay
                className="hidden md:flex"
                timeZone={person.location}
            />
        </BlurReveal>
    );
}
