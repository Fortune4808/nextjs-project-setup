export type ButtonProps = {
    label: string;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
    className?: string;
    title: string;
    icon?: React.ReactNode;
    disabled?: boolean;
}

export interface LayoutProps {
    children: React.ReactNode;
}

export type AnimatedWrapperProps = {
    children: React.ReactNode;
    animation?: string;
    delay?: number;
};

export interface FloatingInputProps {
    label: string;
    type?: string;
    value?: string;
    className?: string;
    disabled?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}