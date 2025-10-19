import Header from "./header";
import Footer from "./footer";
import { LayoutProps } from "@/types/ui";

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Header />
            <div className="absolute w-full h-full top-[115px]">
                <main>{children}</main>
                <Footer />
            </div>
        </>
    );
}

export default Layout 