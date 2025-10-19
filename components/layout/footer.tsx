import styles from '@/styles/components/footer.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { FaYoutube, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="w-full flex flex-col bg-black/80">
            <div className={`w-full min-h-[400px] text-[var(--white-color)] ${styles.container} ${styles.footerBg}`}>
                <div className={`${styles.child} py-[30px]`}>
                    <div className="flex flex-wrap gap-10">
                        <div className={`${styles.linkContainer}`}>
                            <Link href="">
                                <div className="max-w-[200px] h-[60px] overflow-hidden flex items-center bg-[var(--white-color)]/80 rounded-[5px]">
                                    <Image
                                        src="/all-images/image-pix/logo.png"
                                        width={200} height={60}
                                        alt="logo"
                                        className="max-w-full max-h-full object-contain"
                                    />
                                </div>
                            </Link>

                            <p>
                                I'm a professional Full-Stack Developer with a strong focus on building high-performance, 
                                user-centric web applications. I specialize in both front-end and back-end development, 
                                turning ideas into scalable, efficient, and visually appealing digital solutions.
                            </p>

                            <div className="flex items-center gap-3">
                                <div className={styles.socialsIcon} title="Youtube"><FaYoutube /></div>
                                <div className={styles.socialsIcon} title="Facebook"><FaFacebook /></div>
                                <div className={styles.socialsIcon} title="Twitter"><FaTwitter /></div>
                                <div className={styles.socialsIcon} title="Instagram"><FaInstagram /></div>
                            </div>
                        </div>

                        <div className={`${styles.linkContainer}`}>
                            <div id="quick-links-title" className={`${styles.title} title`}>Quick Links<hr className={`${styles.hr}`} /></div>
                            <nav aria-labelledby="quick-links-title">
                                <ul className={`${styles.list}`}>
                                    <li>1</li>
                                    <li>2</li>
                                    <li>3</li>
                                    <li>4</li>
                                    <li>5</li>
                                </ul>
                            </nav>
                        </div>

                        <div className={`${styles.linkContainer}`}>
                            <div id="official-links-title" className={`${styles.title} title`}>Official Links<hr className={`${styles.hr}`} /></div>
                            <nav aria-labelledby="official-links-title">
                                <ul className={`${styles.list}`}>
                                    <li>1</li>
                                    <li>2</li>
                                    <li>3</li>
                                    <li>4</li>
                                    <li>5</li>
                                </ul>
                            </nav>
                        </div>

                        <div className={`${styles.linkContainer}`}>
                            <div id="portal-links-title" className={`${styles.title} title`}>Portal<hr className={`${styles.hr}`} /></div>
                            <nav aria-labelledby="portal-links-title">
                                <ul className={`${styles.list}`}>
                                    <li>1</li>
                                    <li>2</li>
                                    <li>3</li>
                                    <li>4</li>
                                    <li>5</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`w-full min-h-[60px] ${styles.container}`}>
                <div className={`${styles.child} border-t border-white/20 p-10`}>
                    <div className="flex justify-between text-sm font-bold">
                        <p>© 2025 - {new Date().getFullYear()} New Project Folder Setup in NextJs. All rights reserved.</p>
                        <p>Developed By: <span className="text-[var(--white-color)]">FortuneTech Global IT Solution</span></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer