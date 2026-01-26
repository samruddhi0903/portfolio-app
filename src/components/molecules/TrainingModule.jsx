export default function TrainingModule({
    title,
    description,
    progress = 0,
    moduleId = '',
    xp = 0,
    status = 'syncing'
}) {
    const statusConfig = {
        syncing: { color: 'text-primary', bg: 'bg-primary', label: 'SYNCING...' },
        processing: { color: 'text-hud-accent', bg: 'bg-hud-accent', label: 'PROCESSING...' },
        queued: { color: 'text-text-muted', bg: 'bg-border-dark', label: 'QUEUED' },
        complete: { color: 'text-hud-success', bg: 'bg-hud-success', label: 'COMPLETE' },
    };

    const config = statusConfig[status] || statusConfig.syncing;
    const isActive = status !== 'queued';

    return (
        <div className={`group bg-card-dark border border-border-dark rounded-lg p-6 hover:border-primary/50 transition-all relative overflow-hidden ${!isActive ? 'opacity-70 hover:opacity-100' : ''}`}>
            {/* Status Badge */}
            <div className="absolute top-0 right-0 p-4">
                <span className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-sm bg-background-dark border border-border-dark text-[10px] font-mono font-bold tracking-wide ${config.color} shadow-sm`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${config.bg} ${status === 'syncing' ? 'animate-pulse' : status === 'processing' ? 'animate-spin' : ''}`}></span>
                    {config.label}
                </span>
            </div>

            <h4 className={`text-xl font-bold mb-1 ${isActive ? 'text-text-primary' : 'text-text-muted'}`}>{title}</h4>
            <p className={`text-sm font-medium mb-5 ${isActive ? 'text-text-muted' : 'text-text-dim'}`}>{description}</p>

            {/* Progress Bar */}
            <div className="flex items-center gap-3 mb-4">
                <div className="flex-1 h-1 bg-background-dark rounded-full overflow-hidden">
                    <div
                        className={`h-full ${config.bg} ${isActive ? 'group-hover:brightness-110' : ''} transition-colors`}
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
                <span className={`text-xs font-mono ${config.color}`}>{progress}%</span>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center pt-4 border-t border-border-dark/50">
                <span className="text-[10px] font-mono text-text-muted">
                    MODULE_ID: <span className={isActive ? 'text-text-muted' : 'text-text-dim'}>{moduleId}</span>
                </span>
                <span className={`text-xs font-mono font-bold ${isActive ? 'text-hud-success bg-hud-success/5 border-hud-success/20' : 'text-text-muted border-border-dark'} px-2 py-0.5 rounded border`}>
                    {isActive ? `+${xp} XP GAIN` : 'PENDING XP'}
                </span>
            </div>
        </div>
    );
}
