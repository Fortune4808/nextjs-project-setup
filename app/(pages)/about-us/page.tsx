import styles from "@/styles/main.module.css";
import ButtonLink from "@/components/ui/button-link";
import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";
import AnimatedWrapper from "@/components/aos/aoswrapper";

export const metadata = {
    title: "Projects",
};

const AboutUs = () => {
    return (
        <>
            <section className={`w-full min-h-[400px] text-[var(--white-color)] ${styles.titleBg}`}>
                <div className="w-[90%] max-w-[1200px] flex">
                    <div className={`w-[500px] flex flex-col gap-5 ${styles.textShadow}`}>
                        <div className="flex gap-3 text-nowrap font-bold">
                            <Link href="/"
                                className="flex items-center hover:text-[var(--secondary-color)]"
                                title="Home">Home <IoMdArrowDropright className="text-2xl" />
                            </Link>

                            <Link href="/about-us"
                                className="hover:text-[var(--secondary-color)]"
                                title="About Us">About Us
                            </Link>
                        </div>

                        <AnimatedWrapper animation="zoom-in">
                            <h1 className="font-extrabold text-nowrap">
                                About Us
                            </h1>
                        </AnimatedWrapper>
                        <AnimatedWrapper>
                            <p>
                                Welcome to the new project folder structure in Next.js.
                                A modern, organized setup designed to make your development process cleaner,
                                faster, and more maintainable.
                            </p>
                        </AnimatedWrapper>
                        <ButtonLink />
                    </div>
                </div>
            </section>

            <section className={`w-full min-h-[300px] ${styles.section}`}>
                <div className={`${styles.sectionIn}`}>

                </div>
            </section>
        </>
    )
}

export default AboutUs