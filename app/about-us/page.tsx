import styles from "@/styles/main.module.css";
import ButtonLink from "@/components/ui/button-link";
import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";
import Layout from "@/components/layout/layout";
import AnimatedWrapper from "@/components/aos/aoswrapper";

export const metadata = {
    title: "Projects",
};

const AboutUs = () => {
    return (
        <>
            <Layout>
                <section className={`w-full min-h-[400px] text-[var(--white-color)] ${styles.titleBg}`}>
                    <div className="w-[90%] max-w-[1200px] flex">
                        <AnimatedWrapper animation="zoom-in">
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

                                <h1 className="font-extrabold text-6xl text-nowrap title">
                                    About Us
                                </h1>

                                <p>
                                    Welcome to the new project folder structure in Next.js.
                                    A modern, organized setup designed to make your development process cleaner,
                                    faster, and more maintainable.
                                </p>
                                <ButtonLink />
                            </div>
                        </AnimatedWrapper>
                    </div>
                </section>
            </Layout>
        </>
    )
}

export default AboutUs