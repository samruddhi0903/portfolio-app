export default function TimelineItem({
    date,
    title,
    isLatest = false,
    children
}) {
    return (
        <div className="relative pl-5 group cursor-default">
            <div className={`absolute left-0 top-1.5 rounded-full z-10 transition-all duration-300 ${isLatest
                ? 'w-2.5 h-2.5 bg-surface-dark border border-primary shadow-[0_0_8px_rgba(41,244,255,0.4)] group-hover:bg-primary'
                : 'w-1.5 h-1.5 bg-surface-dark border border-border-dark group-hover:border-primary left-[2px]'
                }`}></div>
            <div className="flex flex-col">
                <span className={`font-mono text-[10px] mb-0.5 tracking-tight ${isLatest ? 'text-primary' : 'text-text-muted group-hover:text-primary/70'
                    } transition-colors`}>
                    {date}
                </span>
                <span className={`font-display text-sm font-medium transition-colors ${isLatest ? 'text-text-primary group-hover:text-primary' : 'text-text-muted group-hover:text-text-dim'
                    }`}>
                    {title}
                </span>
                {children}
            </div>
        </div>
    );
}
