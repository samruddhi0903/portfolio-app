import ProgressBar from '../atoms/ProgressBar';

export default function QuestCard({
    title,
    company,
    description,
    status = 'current',
    progress = 0,
    duration = '',
    onClick
}) {
    const isCurrent = status === 'current';

    return (
        <div
            className="group relative p-4 rounded border border-transparent hover:border-primary/30 hover:bg-white/5 transition-all duration-300 cursor-pointer"
            onClick={onClick}
        >
            <div className="flex justify-between items-start mb-2">
                <div>
                    <h4 className="text-text-primary font-bold text-base group-hover:text-primary transition-colors">
                        {title}
                    </h4>
                    <p className="text-text-muted text-sm">{company}</p>
                </div>
                <span className={`text-xs font-mono px-2 py-1 rounded border ${isCurrent
                    ? 'text-primary bg-primary/10 border-primary/20'
                    : 'text-text-muted bg-border-dark border-border-dark'
                    }`}>
                    {isCurrent ? 'Current' : 'Completed'}
                </span>
            </div>
            {
                description && (
                    <p className="text-text-muted text-sm leading-relaxed mb-4 line-clamp-2">
                        {description}
                    </p>
                )
            }
            <div className="grid grid-cols-2 gap-4 mb-2">
                <div>
                    <ProgressBar
                        value={progress}
                        label={isCurrent ? 'Mission Success' : 'Completion Rate'}
                    />
                </div>
                <div>
                    <div className="flex justify-between mb-1">
                        <span className="text-[10px] uppercase text-text-muted font-mono">Duration</span>
                        <span className="text-[10px] font-mono text-text-muted">{duration}</span>
                    </div>
                    <div className="h-1 w-full bg-border-dark rounded overflow-hidden">
                        <div className="h-full bg-text-muted w-full"></div>
                    </div>
                </div>
            </div>
        </div >
    );
}
