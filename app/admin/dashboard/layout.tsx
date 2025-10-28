import Header from "@/components/layout/dashboard/header";
import { LayoutProps } from "@/types/ui";
import Image from "next/image";
import SideNav from "@/components/layout/dashboard/sidenav";

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <div className="relative w-full h-screen">
                <Image
                    src="/all-images/bg-pix/adminbg.jpg"
                    alt="background" fill
                    className="object-cover animate__animated animate__fadeIn"
                    priority
                />
                <Header />
                <div className="relative w-full h-[calc(100%-70px)] top-[70px]">
                    <SideNav />
                    <main className="relative left-[100px] w-[calc(100%-100px)] h-[calc(100%-20px)] flex justify-center overflow-auto">
                        <div className="w-[98%] pt-1">
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}

export default Layout
