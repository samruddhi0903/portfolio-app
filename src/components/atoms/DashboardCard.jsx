export default function DashboardCard({ title, children, className = "" }) {
    return (
        <div className={`bg-background-dark/30 border border-border-dark p-4 rounded-lg relative overflow-hidden group ${className}`}>
            {/* Corner Accents */}
            <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-primary/50 rounded-tl-sm"></span>
            <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-primary/50 rounded-tr-sm"></span>
            <span className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-primary/50 rounded-bl-sm"></span>
            <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-primary/50 rounded-br-sm"></span>

            {title && <h3 className="text-sm font-bold text-text-primary uppercase mb-4 tracking-wider flex items-center gap-2">
                {title === 'Quest Log' && <span className="material-symbols-outlined text-sm">history_edu</span>}
                {title === 'Global Stats' && <span className="material-symbols-outlined text-sm">bar_chart</span>}
                {title === 'Core Gear' && <span className="material-symbols-outlined text-sm">settings_suggest</span>}
                {title}
            </h3>}
            {children}
        </div>
    );
}
