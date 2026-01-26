export default function ProgressBar({
    value = 0,
    label = '',
    showPercentage = true,
    color = 'primary',
    size = 'default',
    glow = true
}) {
    const height = size === 'sm' ? 'h-1' : size === 'lg' ? 'h-2' : 'h-1.5';

    const colorClasses = {
        primary: 'bg-primary',
        blue: 'bg-blue-500',
        green: 'bg-emerald-500',
        purple: 'bg-purple-500',
        gray: 'bg-slate-500',
    };

    return (
        <div className="w-full">
            {(label || showPercentage) && (
                <div className="flex justify-between mb-1">
                    {label && <span className="text-xs text-text-muted font-mono uppercase">{label}</span>}
                    {showPercentage && <span className="text-xs font-mono text-primary">{value}%</span>}
                </div>
            )}
            <div className={`${height} w-full bg-slate-800 rounded overflow-hidden`}>
                <div
                    className={`h-full ${colorClasses[color] || colorClasses.primary} rounded transition-all duration-500 ${glow ? 'shadow-[0_0_8px_rgba(41,244,255,0.4)]' : ''}`}
                    style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
                />
            </div>
        </div>
    );
}
