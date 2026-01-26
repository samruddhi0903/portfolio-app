export default function InfraCard({
    name,
    icon = 'cloud',
    status = 'production',
}) {
    const statusColors = {
        'Production Ready': 'bg-hud-success shadow-[0_0_5px_rgba(16,185,129,0.6)]',
        'Maintenance': 'bg-hud-accent',
        'Learning Phase': 'bg-hud-warning',
    };

    // Use direct status or default
    const colorClass = statusColors[status] || 'bg-text-muted';

    return (
        <div className="group bg-surface-dark border border-border-dark p-2 rounded hover:border-primary/40 transition-all cursor-default">
            <div className="flex justify-between items-start mb-2">
                <span className={`${icon} text-text-muted group-hover:text-primary transition-colors text-2xl`}>
                </span>
                <div className={`size-2 rounded-full ${colorClass}`}></div>
            </div>
            <p className="text-text-primary font-mono text-sm font-semibold">{name}</p>
            <p className="text-xs text-text-muted">{status}</p>
        </div>
    );
}
