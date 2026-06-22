import type { ButtonHTMLAttributes } from "react";
import { cn } from "../../../utils/cs";

type ButtonVariant = 'primary' | 'secondary' | 'outline';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
};

const variants: Record<ButtonVariant, string> = {
    primary: 'bg-primary text-white hover:bg-primary-hover',
    secondary: 'bg-surface text-text-primary hover:bg-border',
    outline: 'border border-border bg-transparent text-text-primary hover: bg-surface',
};

export const Button = ({
    children,
    className,
    variant = 'primary',
    type = 'button',
    ...props
}: ButtonProps) => {
    return (
        <button 
            type={type}
            className={cn(
                'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
                variants[variant],
                className,
            )}
            {...props}
        >
            {children}
        </button>
    );
};
