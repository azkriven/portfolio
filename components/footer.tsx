// components/site-footer.tsx
import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
    return (
        <footer className="pt-10 pb-40">
            <div className="container max-w-4xl mx-auto px-4">
                {/* Newsletter Section */}
                <div className="mb-12 text-center">
                    <div className="mb-4 flex items-center justify-center gap-2">
                        <Mail className="h-5 w-5" />
                        <h3 className="text-lg font-medium">
                            Subscribe to Selene's Newsletter
                        </h3>
                    </div>
                    <p className="text-muted-foreground mb-4 max-w-xl mx-auto">
                        I occasionally write about design, technology, and share
                        thoughts on the intersection of creativity and
                        engineering.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                        <Input
                            placeholder="Email"
                            className="text-center sm:text-left"
                        />
                        <Button variant="default" className="shrink-0">
                            Subscribe
                        </Button>
                    </div>
                </div>

                {/* Social Icons */}
                <div className="flex justify-center space-x-4 mb-8">
                    <Button variant="ghost" size="icon" asChild>
                        <Link href="https://github.com" target="_blank">
                            <Github className="h-5 w-5" />
                            <span className="sr-only">GitHub</span>
                        </Link>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                        <Link href="https://twitter.com" target="_blank">
                            <Twitter className="h-5 w-5" />
                            <span className="sr-only">Twitter</span>
                        </Link>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                        <Link href="https://linkedin.com" target="_blank">
                            <Linkedin className="h-5 w-5" />
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                    </Button>
                </div>

                {/* Copyright */}
                <div className="text-center text-sm text-muted-foreground">
                    <p>
                        © 2025 / Selene Yu / Build your portfolio with Once UI
                    </p>
                </div>
            </div>
        </footer>
    );
}
