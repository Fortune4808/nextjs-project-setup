import { LayoutProps } from "@/types/ui";

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <div className="fixed inset-0 backdrop-blur-sm bg-black/60 z-50">
                {children}
            </div>
        </>
    )
}

export default Layout