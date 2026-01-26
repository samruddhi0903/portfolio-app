export default function SkillTag({ children, highlighted = false }) {
    return (
        <span className={`px-2 py-1 rounded text-xs font-mono border transition cursor-default ${highlighted
            ? 'bg-primary/10 border-primary/30 text-primary hover:bg-primary/20'
            : 'bg-surface-dark border-slate-700 text-slate-300 hover:border-slate-500'
            }`}>
            {children}
        </span>
    );
}
