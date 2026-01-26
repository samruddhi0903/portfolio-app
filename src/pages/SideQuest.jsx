import { Link } from 'react-router-dom';
import Badge from '../components/atoms/Badge';
import { SIDE_QUEST_DATA } from '../constants/data';
import StandardPageLayout from '../components/templates/StandardPageLayout';

export default function SideQuest() {
    return (
        <StandardPageLayout
            title="Distributed Event Bus"
            subtitle={
                <div className="flex items-center gap-2 text-sm text-gray-500 font-mono">
                    <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                    <span className="text-gray-700">/</span>
                    <Link to="/projects" className="hover:text-primary transition-colors">Quests</Link>
                    <span className="text-gray-700">/</span>
                    <span className="text-primary">Distributed Event Bus</span>
                </div>
            }
        >
            {/* Main Quest Card */}
            <div className="bg-card-dark rounded-lg border border-border-dark overflow-hidden shadow-2xl relative group">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-linear-to-r from-transparent via-primary/50 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="p-6 md:p-10 flex flex-col gap-10">
                    {/* Header Section */}
                    <div className="flex flex-col md:flex-row justify-between gap-6 md:items-start border-b border-border-dark pb-8">
                        <div className="flex flex-col gap-4 max-w-2xl">
                            <div className="flex flex-wrap items-center gap-3">
                                <Badge variant="active" pulse>Active Research</Badge>
                                <Badge variant="secondary" icon="star">Level 4 Difficulty</Badge>
                            </div>
                            <div>
                                <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-2">Distributed Event Bus</h2>
                                <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                                    Mission: Decouple microservices using a custom implementation of the pub/sub pattern to reduce inter-service latency.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-start md:items-end gap-3 min-w-[200px]">
                            <button className="group flex items-center gap-2 text-primary font-mono text-sm font-bold hover:text-white transition-colors uppercase tracking-wide">
                                <span className="text-lg opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300">&gt;</span>
                                View Source Code
                                <span className="material-symbols-outlined text-sm">open_in_new</span>
                            </button>
                            <button className="group flex items-center gap-2 text-primary font-mono text-sm font-bold hover:text-white transition-colors uppercase tracking-wide">
                                <span className="text-lg opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300">&gt;</span>
                                Initialize Demo
                                <span className="material-symbols-outlined text-sm">play_arrow</span>
                            </button>
                        </div>
                    </div>

                    {/* Technical Objective */}
                    <section>
                        <h3 className="text-sm uppercase tracking-widest text-gray-500 font-bold mb-4 flex items-center gap-2">
                            <span className="material-symbols-outlined text-base">target</span> Technical Objective
                        </h3>
                        <div className="bg-background-dark border border-border-dark p-6 rounded relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-2 opacity-10">
                                <span className="material-symbols-outlined text-6xl text-white">architecture</span>
                            </div>
                            <p className="text-gray-300 leading-relaxed relative z-10">
                                The primary goal was to engineer a fault-tolerant message broker capable of handling <span className="text-primary font-mono">10k+ events/sec</span> with minimal overhead. The system needed to guarantee at-least-once delivery while providing a developer-friendly API for rapid service integration. This required solving complex challenges in data consistency and network partition handling.
                            </p>
                        </div>
                    </section>

                    {/* System Schema */}
                    <section>
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-sm uppercase tracking-widest text-gray-500 font-bold flex items-center gap-2">
                                <span className="material-symbols-outlined text-base">dns</span> System Schema
                            </h3>
                            <span className="text-xs text-gray-600 font-mono">v.1.0.4-stable</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {Object.entries(SIDE_QUEST_DATA.techStack).map(([category, techs]) => (
                                <div key={category} className="bg-background-dark border border-border-dark p-4 rounded hover:border-primary/30 transition-colors group/card">
                                    <div className="flex items-center gap-2 mb-3 text-gray-400 group-hover/card:text-primary transition-colors">
                                        <span className="material-symbols-outlined">
                                            {category === 'frontend' ? 'desktop_windows' : category === 'backend' ? 'settings_suggest' : category === 'database' ? 'database' : 'cloud'}
                                        </span>
                                        <span className="text-xs font-bold uppercase tracking-wider">{category}</span>
                                    </div>
                                    <ul className="space-y-2 font-mono text-sm text-gray-300">
                                        {techs.map((tech, i) => (
                                            <li key={tech} className="flex items-center gap-2">
                                                <div className={`w-1 h-1 ${i === 0 ? 'bg-primary' : 'bg-gray-600'} rounded-full`}></div>
                                                {tech}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Engineering Log */}
                    <section>
                        <h3 className="text-sm uppercase tracking-widest text-gray-500 font-bold mb-4 flex items-center gap-2">
                            <span className="material-symbols-outlined text-base">terminal</span> Engineering Log
                        </h3>
                        <div className="border-l-2 border-border-dark pl-6 space-y-6">
                            {SIDE_QUEST_DATA.logEntries.map((entry) => (
                                <div key={entry.id} className="relative">
                                    <div className={`absolute -left-[31px] top-1 h-4 w-4 rounded-full border-2 border-[#121821] ${entry.isLatest ? 'bg-primary' : 'bg-gray-600'}`}></div>
                                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-1">
                                        <span className={`font-mono text-xs font-bold ${entry.isLatest ? 'text-primary' : 'text-gray-400'}`}>{entry.id}</span>
                                        <span className="font-mono text-xs text-gray-600">[{entry.date}]</span>
                                    </div>
                                    <h4 className="text-white font-medium mb-1">{entry.title}</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">{entry.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <div className="h-px w-full bg-border-dark"></div>

                    {/* XP Earned Footer */}
                    <footer className="flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-xl">bolt</span>
                            <h3 className="text-white font-bold text-lg">XP Earned</h3>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {SIDE_QUEST_DATA.xpGains.map((item) => (
                                <div key={item.skill} className="group flex items-center bg-background-dark border border-border-dark hover:border-primary/50 rounded-md overflow-hidden transition-all duration-300">
                                    <div className="bg-border-dark px-3 py-2">
                                        <span className="material-symbols-outlined text-gray-400 text-sm">{item.icon}</span>
                                    </div>
                                    <div className="px-4 py-2 flex items-center gap-2">
                                        <span className="text-sm font-medium text-gray-200">{item.skill}</span>
                                        <span className="text-xs font-bold text-primary font-mono">+{item.xp}xp</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </footer>
                </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-between mt-8 text-sm font-mono text-gray-500">
                <Link to="/projects" className="flex items-center gap-2 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-base">arrow_back</span>
                    PREV_QUEST: Inventory System
                </Link>
                <Link to="/projects" className="flex items-center gap-2 hover:text-primary transition-colors">
                    NEXT_QUEST: Neural Net Optimizer
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                </Link>
            </div>
        </StandardPageLayout>
    );
}
