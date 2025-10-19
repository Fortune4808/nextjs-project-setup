import Link from "next/link"
import Button from "./button"
import { BsFillPencilFill } from "react-icons/bs";
import border from "@/styles/components/button.module.css";

const ButtonLink = () => {
    return (
        <>
            <div className="flex gap-5 flex-wrap">
                <Link href="">
                    <Button
                        label="PORTAL"
                        icon={<BsFillPencilFill />}
                        title="Apply for New Project"
                        className={`bg-[var(--primary-color)] ${border.buttonBorder}`}
                    />
                </Link>
                <Link href="">
                    <Button
                        label="PORTAL"
                        icon={<BsFillPencilFill />}
                        title="Apply for New Project"
                        className={`bg-[var(--white-color)] text-[var(--text-color)] ${border.buttonBorder}`}
                    />
                </Link>
                <Link href="">
                    <Button label="PORTAL"
                        icon={<BsFillPencilFill />}
                        title="Apply for New Project"
                        className={`bg-[var(--primary-color)] ${border.buttonBorder}`}
                    />
                </Link>
            </div>
        </>
    )
}

export default ButtonLink