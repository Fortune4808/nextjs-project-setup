import styles from "@/styles/main.module.css";
import { FaBell } from "react-icons/fa6";
import AutoTyping from "@/components/autotyping"
import ButtonLink from "@/components/ui/button-link";
import Layout from "@/components/layout/layout";
import AnimatedWrapper from "@/components/aos/aoswrapper";

export default function Home() {
    return (
        <>
            <Layout>
                <section className={`w-full h-[calc(100vh-115px)] text-[var(--white-color)] ${styles.section} ${styles.slideBg}`}>
                    <div className={`${styles.sectionIn} flex`}>
                        <div className={`w-[500px] flex flex-col gap-5 ${styles.textShadow}`}>
                            <AnimatedWrapper>
                                <div className="flex items-center bg-white/30 rounded-full gap-3">
                                    <div className="p-[10px] rounded-full bg-[var(--secondary-color)]"><FaBell /></div>
                                    <div className="font-bold text-[clamp(10px,1vw,15px)]">WELCOME TO NEW PROJECT FOLDER SETUP IN NEXTJS</div>
                                </div>
                            </AnimatedWrapper>
                            <AnimatedWrapper>
                                <h1 className="font-extrabold text-nowrap title">
                                    I'm a professional <br />
                                    #<span className="text-[var(--secondary-color)]"><AutoTyping /></span>
                                </h1>
                            </AnimatedWrapper>
                            <AnimatedWrapper>
                                <p>
                                    I'm a professional Full-Stack Developer with a strong focus on building high-performance,
                                    user-centric web applications. I specialize in both front-end and back-end development,
                                    turning ideas into scalable, efficient, and visually appealing digital solutions. With a deep
                                    understanding of modern frameworks, clean architecture, and collaborative workflows,
                                    I bridge the gap between design and functionality to deliver complete, end-to-end web experiences.
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
            </Layout >
        </>
    );
}
