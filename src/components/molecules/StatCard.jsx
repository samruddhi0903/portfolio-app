export default function StatCard({
    label,
    value,
    sublabel = null,
    progress = null,
    className = ''
}) {
    return (
        <div className={`hud-card hud-border rounded p-3 flex flex-col justify-between h-24 hover:border-primary/50 transition-colors group ${className}`}>
            <span className="text-[10px] text-text-muted font-mono uppercase">{label}</span>
            <span className="text-2xl text-text-primary font-mono font-bold group-hover:text-primary transition-colors">
                {value}
            </span>
            {sublabel && <span className="text-[10px] text-text-muted">{sublabel}</span>}
            {progress !== null && (
                <div className="w-full h-0.5 bg-border-dark mt-2">
                    <div className="h-full bg-primary" style={{ width: `${progress}%` }}></div>
                </div>
            )}
        </div>
    );
}
