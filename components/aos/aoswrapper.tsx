"use client";
import { AnimatedWrapperProps } from "@/types/ui";

export default function AnimatedWrapper({ children, animation = "fade-up", delay = 0, }: AnimatedWrapperProps) {
    return (
        <div data-aos={animation} data-aos-delay={delay}>
            {children}
        </div>
    );
}
