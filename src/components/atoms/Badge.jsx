const variants = {
    primary: 'bg-primary/10 text-primary border-primary/20',
    success: 'bg-hud-success/10 text-hud-success border-hud-success/20',
    warning: 'bg-hud-warning/10 text-hud-warning border-hud-warning/20',
    info: 'bg-hud-accent/10 text-hud-accent border-hud-accent/20',
    secondary: 'bg-border-dark text-text-muted border-border-dark',
    active: 'bg-primary/10 text-primary border-primary/20',
    completed: 'bg-border-dark text-text-muted border-border-dark',
    purple: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
};

export default function Badge({
    children,
    variant = 'primary',
    icon = null,
    pulse = false,
    className = ''
}) {
    return (
        <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono font-medium border ${variants[variant]} ${className}`}>
            {pulse && (
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-current"></span>
                </span>
            )}
            {icon && <span className="material-symbols-outlined text-sm">{icon}</span>}
            {children}
        </span>
    );
}
