import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../../utils/cs';

export type ButtonVariant = 'primary' | 'secondary' | 'outline';

type ButtonBaseProps = {
    variant?: ButtonVariant;
    children: ReactNode;
    className?: string;
};

type ButtonAsButton = ButtonBaseProps &
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
        href?: undefined;
    };

type ButtonAsAnchor = ButtonBaseProps &
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
        href: string;
    };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const variants: Record<ButtonVariant, string> = {
    primary: 'bg-primary text-white hover:bg-primary-hover',
    secondary: 'bg-surface text-text-primary hover:bg-border',
    outline: 'border border-border bg-transparent text-text-primary hover:bg-surface',
};

const baseStyles =
    'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2';

export const Button = (props: ButtonProps) => {
    const { variant = 'primary', className, children, ...restProps } = props;

    if ('href' in props && typeof props.href === 'string') {
        const { href, ...anchorProps } = restProps as AnchorHTMLAttributes<HTMLAnchorElement>;
        return (
            <a
                href={href}
                className={cn(baseStyles, variants[variant], className)}
                {...anchorProps}
            >
                {children}
            </a>
        );
    }

    const { type = 'button', ...buttonProps } = restProps as ButtonHTMLAttributes<HTMLButtonElement>;

    return (
        <button
            type={type}
            className={cn(baseStyles, variants[variant], className)}
            {...buttonProps}
        >
            {children}
        </button>
    );
};
