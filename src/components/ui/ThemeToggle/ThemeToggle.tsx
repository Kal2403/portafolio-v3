import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../../hooks';
import { cn } from '../../../utils/cs';

type ThemeToggleProps = {
    className?: string;
};

export const ThemeToggle = ({ className }: ThemeToggleProps) => {
    const { theme, toggleTheme, isDarkMode } = useTheme();

    return (
        <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            className={cn(
                'inline-flex size-10 items-center justify-center rounded-xl border border-border bg-surface text-text-secondary transition-colors hover:border-primary/40 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
                className,
            )}
        >
            {isDarkMode ? (
                <Sun className="size-5 text-amber-400 transition-transform hover:rotate-45" aria-hidden="true" />
            ) : (
                <Moon className="size-5 transition-transform hover:-rotate-12" aria-hidden="true" />
            )}
            <span className="sr-only">Current theme: {theme}</span>
        </button>
    );
};
