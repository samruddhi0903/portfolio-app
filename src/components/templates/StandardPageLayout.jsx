export default function StandardPageLayout({ title, subtitle, children }) {
    return (
        <div className="max-w-[1200px] w-full mx-auto px-4 lg:px-8 py-8 animate-in fade-in duration-500">
            {/* Page Heading */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8 border-b border-border-dark pb-6">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-primary/70 text-xs font-mono uppercase tracking-wider">
                        <span className="material-symbols-outlined text-sm">terminal</span>
                        <span>System Module</span>
                    </div>
                    <h1 className="text-white text-3xl md:text-4xl font-bold leading-tight tracking-tight">{title}</h1>
                    {subtitle && (
                        <p className="text-text-muted text-sm md:text-base max-w-2xl mt-1">
                            {subtitle}
                        </p>
                    )}
                </div>
            </div>

            {/* Content */}
            {children}
        </div>
    );
}
