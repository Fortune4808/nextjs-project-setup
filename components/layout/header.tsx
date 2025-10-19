import styles from "@/styles/components/header.module.css";
import { FaYoutube, FaFacebook, FaTwitter, FaInstagram, FaClock, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsFillPencilFill } from "react-icons/bs";
import Image from "next/image";
import Button from "@/components/ui/button";
import Link from "next/link";
import Navbar from "./navbar";
import border from "@/styles/components/button.module.css";

const Header = () => {
    return (
        <header className="w-full flex flex-col fixed z-10 animate__animated animate__fadeInDown">
            <div className="w-full min-h-[45px] bg-[var(--primary-color)] flex justify-center items-center">
                <div className={`${styles.container} text-[var(--white-color)] text-nowrap`}>
                    <div className={styles.flex}>
                        <div className="font-bold">Follow Us:</div>
                        <div className={styles.socialsIcon} title="Youtube"><FaYoutube /></div>
                        <div className={styles.socialsIcon} title="Facebook"><FaFacebook /></div>
                        <div className={styles.socialsIcon} title="Twitter"><FaTwitter /></div>
                        <div className={styles.socialsIcon} title="Instagram"><FaInstagram /></div>
                    </div>
                    <div className={styles.flex}>
                        <div className={`${styles.flex} ${styles.borderLeft}`}>
                            <FaClock className="text-[var(--secondary-color)]" />Monday - Friday (8am - 4pm)
                        </div>
                        <div className={`${styles.flex} ${styles.borderLeft}`}>
                            <MdEmail className="text-[var(--secondary-color)]" />info@theeverestgroupofschools.com
                        </div>
                        <div className={`${styles.flex}`}>
                            <FaPhone className="text-[var(--secondary-color)]" />(+234) 905 625 1889
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full min-h-[70px] bg-[var(--body-bg-color)] shadow flex justify-center items-center">
                <div className={styles.container}>
                    <Link href="/">
                        <div className="max-w-[200px] h-[60px] overflow-hidden flex items-center">
                            <Image
                                src="/all-images/image-pix/logo.png"
                                width={200} height={60}
                                alt="logo"
                                className="max-w-full max-h-full object-contain object-left"
                                priority
                            />
                        </div>
                    </Link>
                    <Navbar />
                    <Link href="">
                        <Button
                            label="PORTAL" icon={<BsFillPencilFill />}
                            title="Apply for New Project"
                            className={`bg-[var(--primary-color)] text-[var(--white-color)] ${border.buttonBorder}`}
                        />
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header