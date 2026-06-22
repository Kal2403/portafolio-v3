import type { HTMLAttributes } from "react";
import { cn } from "../../../utils/cs";

type CardProps = HTMLAttributes<HTMLDivElement>;

export const Card = ({ children, className, ...props }: CardProps) => {
    return (
        <div
            className={cn(
                'rounded-3xl border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md',
                className,
            )}
            {...props}
        >
            {children}
        </div>
    );
};
