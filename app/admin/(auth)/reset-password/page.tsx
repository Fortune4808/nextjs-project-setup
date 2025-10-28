"use client";
import InputField from "@/components/ui/input";
import Button from "@/components/ui/button";
import { CgProfile } from "react-icons/cg";
import { FaCheckDouble } from 'react-icons/fa';
import { useRouter } from "next/navigation";

const ResetPassword = () => {
    const router = useRouter();
    return (
        <div className="animate__animated animate__fadeIn">
            <div className="flex items-center gap-1 text-xl font-bold pb-2 title text-nowrap"><CgProfile /> Administrative Reset Password</div>
            <hr className="w-[150px]" />
            <div className="flex flex-col gap-5 pt-6">
                <InputField
                    label="Email Address"
                />
                <Button
                    type="submit"
                    label="Proceed"
                    icon={<FaCheckDouble />}
                    title="Proceed"
                    className="bg-[var(--primary-color)] text-white rounded-[5px]"
                />

                <div
                    className="bg-[#F8F1EE] text-[#838F90] text-[12px] border-[#F3BEA4] border py-[14px] px-[15px] rounded-[5px]">
                    Already have an account?{" "}
                    <span className="text-[#50A5DF] cursor-pointer" onClick={() => router.push('/admin/login')}>SIGN-IN</span>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword
