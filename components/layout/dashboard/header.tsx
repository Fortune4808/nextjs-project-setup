import Image from "next/image"
import Navbar from "./navbar"

const Header = () => {
    return (
        <header className="fixed w-full min-h-[70px] bg-[var(--body-bg-color)] shadow flex justify-center items-center z-10">
            <div className="w-[98%]">
                <div className="flex justify-between items-center">
                    <div className="flex justify-center items-center">
                        <div className="max-w-[200px] h-[60px] overflow-hidden flex items-center">
                            <Image
                                src="/all-images/image-pix/logo.png"
                                width={200} height={60}
                                alt="logo"
                                className="max-w-full max-h-full object-contain object-left"
                                priority
                            />
                        </div>
                        <Navbar/>
                    </div>
                    <div>gdgggfgfgfgf</div>
                </div>
            </div>
        </header>
    )
}

export default Header
