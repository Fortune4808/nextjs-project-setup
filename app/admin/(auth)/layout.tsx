import Background from "@/components/background";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import AnimatedWrapper from "@/components/aos/aoswrapper";
import { LayoutProps } from "@/types/ui";

const AdminLoginPage = ({ children }: LayoutProps) => {
    return (
        <>
            <Background />
            <header className="fixed w-full min-h-[60px] bg-white/90 shadow flex justify-center z-10">
                <div className="w-[90%] flex justify-between items-center max-w-[1200px]">
                    <div className="max-w-[200px] h-[50px] overflow-hidden flex items-center">
                        <Image
                            src="/all-images/image-pix/logo.png"
                            width={200} height={45}
                            alt="logo"
                            className="max-w-full max-h-full object-contain object-left"
                            priority
                        />
                    </div>

                    <div className="p-[15px] bg-black/70 flex justify-center items-center cursor-pointer" title="Website Home">
                        <FaHome className="text-white text-3xl" />
                    </div>
                </div>
            </header>

            <div className="absolute w-full h-[calc(100%-60px)] top-[60px] flex justify-center items-center overflow-hidden">
                <div className="w-[80%] h-[200px] flex items-center max-w-[1200px]">
                    <div className="w-[400px] min-h-[350px] bg-white/40 flex flex-1 items-center justify-center rounded-l-full">
                        <AnimatedWrapper animation="fade-left">
                            <h1 className="text-white text-center !text-3xl px-[5px]">
                                Welcome To Project Setup With Nextjs<br /> Administrative Login Portal
                            </h1>
                        </AnimatedWrapper>
                    </div>

                    <AnimatedWrapper animation="fade-right">
                        <div className="w-[400px] h-[500px] bg-white/90 rounded-t-[5px]">
                            <div className="w-full h-full flex flex-col justify-between">
                                <div className="w-full h-full flex justify-center items-center">
                                    <div className="w-[80%]">
                                        {children}
                                    </div>
                                </div>

                                <div className="p-[25px] bg-black/70 text-center text-white text-[12px] leading-[1]">
                                    © 2025 - {new Date().getFullYear()}. ALL RIGHT RESERVED <br />
                                    <span className="text-[8px] text-white/70">POWERED BY: FORTUNETECH GLOBAL.</span>
                                </div>
                            </div>
                        </div>
                    </AnimatedWrapper>
                </div>
            </div>
        </>
    )
}

export default AdminLoginPage
