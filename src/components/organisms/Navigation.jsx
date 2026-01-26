import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../../constants/data';
import ThemeToggle from '../atoms/ThemeToggle';

export default function Navigation() {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    // Prevent scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border-dark bg-background-dark/95 backdrop-blur-md">
            <div className="max-w-[1600px] mx-auto px-4 lg:px-6">
                <div className="flex h-12 items-center justify-between">    
                    {/* Left: Hamburger & Logo Group */}
                    <div className="flex items-center gap-4">
                        {/* Hamburger Toggle (Mobile/Tablet) */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden flex items-center justify-center p-1 text-text-primary hover:text-primary transition-colors focus:outline-none"
                            aria-label="Toggle navigation"
                        >
                            <span className="material-symbols-outlined text-2xl">
                                {isOpen ? 'close' : 'menu'}
                            </span>
                        </button>
                        {/* Logo/Brand */}
                        <div className="flex items-center gap-2 text-sm">
                            <span className="material-symbols-outlined text-primary text-lg">terminal</span>
                            <Link to="/" className="text-primary/70 hover:text-primary transition-colors font-medium">
                                System
                            </Link>
                        </div>
                    </div>
                    {/* Center: Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-6">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`text-sm font-medium transition-colors ${
                                    location.pathname === link.path
                                        ? 'text-primary'
                                        : 'text-text-muted hover:text-primary'
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                    {/* Right: Actions */}
                    <div className="flex items-center gap-3">
                        <ThemeToggle />
                        {/* Resume Download (Hidden on very small screens) */}
                        <a
                            href="/resume.pdf"
                            download="Resume.pdf"
                            className="hidden md:flex items-center gap-2 px-3 py-1 text-xs font-mono text-primary border border-primary/30 hover:border-primary hover:bg-primary/5 rounded transition-all group"
                        >
                            <span className="material-symbols-outlined text-sm group-hover:animate-bounce">download</span>
                            <span className="hidden lg:inline">[Resume.pdf]</span>
                        </a>
                        <Link
                            to="/contact"
                            className="group relative flex items-center justify-center overflow-hidden rounded bg-primary/10 border border-primary/50 h-8 px-4"
                        >
                            <span className="text-primary text-[10px] font-bold uppercase tracking-wider font-mono flex items-center gap-2">
                                <span className="material-symbols-outlined text-sm">wifi_tethering</span>
                                <span className="hidden sm:inline">Initiate Contact</span>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
            {/* Mobile Menu (The "Disclosure" part from your reference) */}
            <div 
                className={`lg:hidden transition-all duration-300 ease-in-out border-t border-border-dark overflow-hidden ${
                    isOpen ? 'max-h-full opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                }`}
            >
                <div className="space-y-1 px-4 py-3 bg-background-dark/98">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => setIsOpen(false)} // Close menu on click
                            className={`block rounded-md px-3 py-2 text-base font-medium transition-colors ${
                                location.pathname === link.path
                                    ? 'bg-primary/10 text-primary'
                                    : 'text-text-muted hover:bg-white/5 hover:text-primary'
                            }`}
                        >
                            {link.label}
                        </Link>
                    ))}  
                    {/* Mobile-only Resume Link */}
                    <a
                        href="/resume.pdf"
                        className="flex lg:hidden items-center gap-2 px-3 py-2 text-base font-medium text-text-muted hover:text-primary"
                    >
                        <span className="material-symbols-outlined text-sm">download</span>
                        Download Resume
                    </a>
                </div>
            </div>
        </header>
    );
}
