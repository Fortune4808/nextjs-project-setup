import styles from "@/styles/main.module.css";
import { FaBell } from "react-icons/fa6";
import AutoTyping from "@/components/autotyping"
import ButtonLink from "@/components/ui/button-link";
import Layout from "@/components/layout/layout";

export default function Home() {
    return (
        <>
            <Layout>
                <section className={`w-full h-[calc(100vh-115px)] text-[var(--white-color)] ${styles.slideSection}`}>
                    <div className="w-[90%] max-w-[1200px] flex">
                        <div className={`w-[500px] flex flex-col gap-5 ${styles.textShadow}`}>
                            <div className="flex items-center bg-white/30 rounded-full gap-3 text-nowrap">
                                <div className="p-[10px] rounded-full bg-[var(--secondary-color)]"><FaBell /></div>
                                <div className="font-bold">WELCOME TO NEW PROJECT FOLDER SETUP IN NEXTJS</div>
                            </div>

                            <h1 className="font-extrabold text-6xl text-nowrap title">
                                I'm a professional <br />
                                #<span className="text-[var(--secondary-color)]"><AutoTyping /></span>
                            </h1>

                            <p>
                                I'm a professional Full-Stack Developer with a strong focus on building high-performance,
                                user-centric web applications. I specialize in both front-end and back-end development,
                                turning ideas into scalable, efficient, and visually appealing digital solutions. With a deep
                                understanding of modern frameworks, clean architecture, and collaborative workflows,
                                I bridge the gap between design and functionality to deliver complete, end-to-end web experiences.
                            </p>
                            <ButtonLink />
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}
