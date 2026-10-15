import type { ReactNode } from 'react';
import {
    motion,
    useReducedMotion,
    type HTMLMotionProps,
    type Variants,
} from 'framer-motion';
import { cn } from '../../../utils/cs';

export type FadeInStaggerProps = Omit<HTMLMotionProps<'div'>, 'children'> & {
    children: ReactNode;
    staggerDelay?: number;
    className?: string;
    viewportAmount?: number;
    once?: boolean;
};

export const FadeInStagger = ({
    children,
    staggerDelay = 0.1,
    className,
    viewportAmount = 0.15,
    once = true,
    ...props
}: FadeInStaggerProps) => {
    const shouldReduceMotion = useReducedMotion();

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: shouldReduceMotion ? 0 : staggerDelay,
            },
        },
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount: viewportAmount }}
            className={cn(className)}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export type FadeInStaggerItemProps = Omit<
    HTMLMotionProps<'div'>,
    'children'
> & {
    children: ReactNode;
    className?: string;
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.21, 0.47, 0.32, 0.98],
        },
    },
};

export const FadeInStaggerItem = ({
    children,
    className,
    ...props
}: FadeInStaggerItemProps) => {
    return (
        <motion.div variants={itemVariants} className={cn(className)} {...props}>
            {children}
        </motion.div>
    );
};
