import type { ReactNode } from 'react';
import { motion, useReducedMotion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '../../../utils/cs';

export type FadeInDirection = 'up' | 'down' | 'left' | 'right' | 'none';

export type FadeInProps = Omit<HTMLMotionProps<'div'>, 'children'> & {
    children: ReactNode;
    direction?: FadeInDirection;
    delay?: number;
    duration?: number;
    className?: string;
    viewportAmount?: number;
    once?: boolean;
};

const getOffset = (direction: FadeInDirection) => {
    switch (direction) {
        case 'up':
            return { y: 24, x: 0 };
        case 'down':
            return { y: -24, x: 0 };
        case 'left':
            return { x: 24, y: 0 };
        case 'right':
            return { x: -24, y: 0 };
        case 'none':
        default:
            return { x: 0, y: 0 };
    }
};

export const FadeIn = ({
    children,
    direction = 'up',
    delay = 0,
    duration = 0.5,
    className,
    viewportAmount = 0.15,
    once = true,
    ...props
}: FadeInProps) => {
    const shouldReduceMotion = useReducedMotion();
    const offset = shouldReduceMotion ? { x: 0, y: 0 } : getOffset(direction);

    return (
        <motion.div
            initial={{
                opacity: 0,
                x: offset.x,
                y: offset.y,
            }}
            whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
            }}
            viewport={{
                once,
                amount: viewportAmount,
            }}
            transition={{
                duration: shouldReduceMotion ? 0 : duration,
                delay: shouldReduceMotion ? 0 : delay,
                ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className={cn(className)}
            {...props}
        >
            {children}
        </motion.div>
    );
};
