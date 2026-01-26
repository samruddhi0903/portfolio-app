import { useState, useEffect } from 'react';

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        // Check localStorage for saved theme preference
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = savedTheme === 'dark' || (!savedTheme && true); // Default to dark

        setIsDark(prefersDark);

        // Tailwind's native dark mode: add 'dark' class to <html> for dark mode
        if (prefersDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleTheme = () => {
        const newIsDark = !isDark;
        setIsDark(newIsDark);

        // Toggle Tailwind's dark class on html element
        if (newIsDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        // Save to localStorage
        localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
    };

    return (
        <button
            onClick={toggleTheme}
            className="relative w-14 h-7 rounded-full border border-slate-300 dark:border-border-dark bg-slate-200 dark:bg-surface-dark transition-all duration-300 hover:border-primary/50 dark:hover:border-primary/50 group"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            {/* Track */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
                <div className={`absolute inset-0 transition-opacity duration-300 ${isDark ? 'opacity-100' : 'opacity-0'}`}>
                    {/* Dark mode background - night sky */}
                    <div className="w-full h-full bg-linear-to-r from-background-dark to-[#121821]"></div>
                </div>
                <div className={`absolute inset-0 transition-opacity duration-300 ${!isDark ? 'opacity-100' : 'opacity-0'}`}>
                    {/* Light mode background - golden hour */}
                    <div className="w-full h-full bg-linear-to-r from-[#F5F7FA] to-[#E2E8F0]"></div>
                </div>
            </div>

            {/* Toggle Circle */}
            <div
                className={`absolute top-0.5 w-6 h-6 rounded-full transition-all duration-300 flex items-center justify-center ${isDark ? 'left-0.5 bg-primary' : 'left-7 bg-[#FF8C42]'
                    }`}
            >
                {/* Icon */}
                <span className="material-symbols-outlined text-xs text-white">
                    {isDark ? 'dark_mode' : 'light_mode'}
                </span>
            </div>

            {/* Glow effect on hover */}
            <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isDark ? 'shadow-[0_0_12px_rgba(42,246,255,0.3)]' : 'shadow-[0_0_12px_rgba(255,140,66,0.3)]'
                }`}></div>
        </button>
    );
}
