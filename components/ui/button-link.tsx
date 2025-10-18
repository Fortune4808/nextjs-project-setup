import Link from "next/link"
import Button from "./button"
import { BsFillPencilFill } from "react-icons/bs";

const ButtonLink = () => {
    return (
        <>
            <div className="flex gap-5 flex-wrap">
                <Link href="">
                    <Button
                        label="PORTAL"
                        icon={<BsFillPencilFill />}
                        title="Apply for New Project"
                        className="bg-[var(--primary-color)] "
                    />
                </Link>
                <Link href="">
                    <Button
                        label="PORTAL"
                        icon={<BsFillPencilFill />}
                        title="Apply for New Project"
                        className="bg-[var(--body-bg-color)] text-[var(--text-color)]"
                    />
                </Link>
                <Link href="">
                    <Button label="PORTAL"
                        icon={<BsFillPencilFill />}
                        title="Apply for New Project"
                        className="bg-[var(--primary-color)]"
                    />
                </Link>
            </div>
        </>
    )
}

export default ButtonLink