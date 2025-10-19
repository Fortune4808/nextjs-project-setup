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