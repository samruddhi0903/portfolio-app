import DashboardCard from '../atoms/DashboardCard';
import Avatar from '../atoms/Avatar';
import StatRow from '../molecules/StatRow';
import { PROFILE_DATA } from '../../constants/data';

export default function OperativeProfile() {
    return (
        <div className="flex flex-wrap md:flex-row gap-6 w-full mx-auto px-4 md:px-8 items-center md:items-start justify-center">
            <div className="flex flex-row items-center justify-center gap-8 w-full px-6 mb-6">
                {/* Profile Card */}
                <DashboardCard className="flex flex-col items-center text-center py-8 border-primary/90 w-full md:w-10/12">
                    <div className="flex flex-col md:flex-row gap-8 w-full px-6 mb-6">
                        <div className="w-full md:w-1/3 flex flex-col items-center justify-center text-center border-primary/80">
                            <Avatar />
                            <div className="w-full px-6">
                                <div className="bg-primary/20 border border-primary/30 text-text-primary text-xs font-bold py-2 rounded flex items-center justify-center gap-2">
                                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                                    OPEN TO OPPORTUNITIES
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-2/3 flex flex-col items-center md:items-start text-center md:text-left py-2 md:py-8 border-primary/20">
                            <h1 className="text-xl md:text-3xl font-bold text-text-primary tracking-tight">Hi, I am Samruddhi Umarkar</h1>
                            <h2 className="text-primary font-semibold text-lg md:text-2xl mb-1">{PROFILE_DATA.title}</h2>
                            <p className="text-text-muted font-bold text-sm md:text-md mb-3">{PROFILE_DATA.subtitle}</p>
                            {/* Executive Summary */}
                            <p className="text-text-primary text-xs md:text-sm font-bold leading-relaxed px-0 md:px-0 mb-4 max-w-prose">
                                {PROFILE_DATA.executiveSummary}
                            </p>
                        </div>
                    </div>

                    {/* Top 4 Tech Stack */}
                    <div className="flex flex-wrap gap-2 justify-center mb-4 px-4">
                        {PROFILE_DATA.topTech.map(tech => (
                            <span key={tech} className="text-sm font-mono font-bold text-text-muted px-2 py-0.5 bg-surface-dark border border-border-dark rounded">
                                {tech}
                            </span>
                        ))}
                    </div>
                </DashboardCard>
            </div>

            {/* <div className="flex flex-wrap md:flex-row items-center md:items-start justify-center gap-4 md:gap-8 w-full px-0 md:px-6 mb-6">
                <div className="w-full md:w-auto bg-background-dark border border-border-dark rounded-lg p-2 font-mono text-xs">
                    <StatRow label="LOCATION" value={PROFILE_DATA.stats.location} />
                    <StatRow label="EXPERIENCE" value={PROFILE_DATA.stats.experience} />
                    <StatRow label="JOINED" value={PROFILE_DATA.stats.joined} />
                    <StatRow label="SPECIALTY" value={PROFILE_DATA.stats.specialty} />
                </div>

                <DashboardCard title="Growth Arc" className="w-full md:w-auto min-w-[300px]">
                    <div className="relative pl-4 border-l border-border-dark space-y-6 py-2">
                        {PROFILE_DATA.timeline.map((item, i) => (
                            <div key={i} className="relative">
                                <span className={`absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full border-2 ${i === 0 ? 'bg-primary border-primary' : 'bg-background-dark border-border-dark'}`}></span>
                                <p className={`text-xs ${i === 0 ? 'text-primary font-bold' : 'text-text-muted'}`}>{item.year}</p>
                                <p className={`text-sm ${i === 0 ? 'text-text-primary font-bold' : 'text-text-dim'}`}>{item.label}</p>
                            </div>
                        ))}
                    </div>
                </DashboardCard>
            </div> */}
        </div>
    );
}
