import DashboardCard from '../atoms/DashboardCard';
import { GLOBAL_STATS_DATA } from '../../constants/data';

export default function GlobalStatsPanel() {
    return (
        <div className="flex flex-col gap-6">
            {/* Global Stats Matrix */}
            <div>
                <h3 className="text-md font-bold text-text-primary uppercase mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-lg">monitoring</span>
                    Global Stats
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {GLOBAL_STATS_DATA.matrix.map((stat, i) => (
                        <div key={i} className="bg-background-dark border border-border-dark p-3 rounded h-27 flex flex-col justify-between hover:border-primary/30 transition-colors">
                            <p className="text-[10px] text-text-muted font-bold">{stat.label}</p>
                            <div>
                                <p className={`text-lg font-bold font-mono ${stat.color || 'text-text-primary'}`}>{stat.value}</p>
                                {stat.sub && <p className="text-[9px] text-text-muted mt-1">{stat.sub}</p>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Core Gear */}
            <DashboardCard title="Core Gear">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
                    {GLOBAL_STATS_DATA.gear.map((item) => (
                        <div key={item} className="grid ">
                                <span className="px-2 py-1.5 text-xs font-bold text-center border border-border-dark bg-surface-dark text-text-primary rounded hover:border-primary/50 hover:text-primary transition-colors cursor-default">
                                    {item}
                                </span>
                            </div>
                    ))}
                </div>
            </DashboardCard>

            {/* Recent Learnings */}
            <DashboardCard title="Recent Learnings">
                <div className="flex flex-col gap-2">
                    {GLOBAL_STATS_DATA.recentLearnings.map((item) => (
                        <div key={item} className="flex items-center gap-3 p-2 bg-surface-dark border border-border-dark rounded hover:border-primary/30 transition-colors">
                            <span className="material-symbols-outlined text-primary text-sm">school</span>
                            <span className="text-xs font-bold text-text-primary">{item}</span>
                        </div>
                    ))}
                </div>
            </DashboardCard>
        </div>
    );
}
