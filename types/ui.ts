import { ReactNode } from "react";

export type ButtonProps = {
    label: string;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
    className?: string;
    title: string;
    icon?: ReactNode;
    disabled?: boolean;
}