import { useCallback, useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

const THEME_STORAGE_KEY = 'portfolio-theme';
const DARK_MODE_MEDIA_QUERY = '(prefers-color-scheme: dark)';

const isTheme = (value: string | null): value is Theme => {
    return value === 'light' || value === 'dark';
};

const getStoredTheme = (): Theme | null => {
    if (typeof window === 'undefined') {
        return null;
    }

    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

    return isTheme(storedTheme) ? storedTheme : null;
};

const getSystemTheme = (): Theme => {
    if (typeof window === 'undefined') {
        return 'light';
    }

    return window.matchMedia(DARK_MODE_MEDIA_QUERY).matches
        ? 'dark'
        : 'light';
};

const getInitialTheme = (): Theme => {
    return getStoredTheme() ?? getSystemTheme();
};

const applyTheme = (theme: Theme) => {
    document.documentElement.dataset.theme = theme;
};

export const useTheme = () => {
    const [theme, setTheme] = useState<Theme>(getInitialTheme);

    useEffect(() => {
        applyTheme(theme);
        window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    }, [theme]);

    useEffect(() => {
        const mediaQuery = window.matchMedia(DARK_MODE_MEDIA_QUERY);

        const handleSystemThemeChange = (event: MediaQueryListEvent) => {
            const storedTheme = getStoredTheme();

            if (storedTheme) {
                return;
            }

            setTheme(event.matches ? 'dark' : 'light');
        };

        mediaQuery.addEventListener('change', handleSystemThemeChange);

        return () => {
            mediaQuery.removeEventListener('change', handleSystemThemeChange);
        };
    }, []);

    const toggleTheme = useCallback(() => {
        setTheme((currentTheme) =>
            currentTheme === 'dark' ? 'light' : 'dark',
        );
    }, []);

    const setLightTheme = useCallback(() => {
        setTheme('light');
    }, []);

    const setDarkTheme = useCallback(() => {
        setTheme('dark');
    }, []);

    return {
        theme,
        isDarkMode: theme === 'dark',
        toggleTheme,
        setLightTheme,
        setDarkTheme,
    };
};
