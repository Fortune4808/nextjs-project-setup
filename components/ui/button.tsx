import { ButtonProps } from "@/types/ui";

const Button = ( props: ButtonProps ) => {
    const baseStyle = 'text-[10px] font-bold hover:bg-[var(--secondary-color)] hover:text-white py-[13px] px-[25px] rounded-full cursor-pointer flex justify-center items-center gap-1 whitespace-nowrap';
    return (
        <button type={props.type} title={props.title} onClick={props.onClick} disabled={props.disabled} className={`${baseStyle} ${props.className}`}>
             {props.icon && <span>{props.icon}</span>}
            {props.label}
        </button>
    );
};

export default Button;
