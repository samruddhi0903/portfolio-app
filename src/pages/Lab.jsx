import ProgressBar from '../components/atoms/ProgressBar';
import Badge from '../components/atoms/Badge';
import { LAB_DATA } from '../constants/data';
import StandardPageLayout from '../components/templates/StandardPageLayout';

export default function Lab() {
    return (
        <StandardPageLayout
            title="Evolution Lab"
            subtitle="VISION-DRIVEN GROWTH · COMPOUNDING SKILLS"
        >
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Column - Evolution Arc 01 */}
                <div className="lg:col-span-6 flex flex-col gap-6">
                    <div className="bg-card-dark border border-border-dark rounded p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="material-symbols-outlined text-primary">auto_awesome</span>
                            <h2 className="text-xl font-bold text-text-primary">Evolution Arc 01</h2>
                        </div>
                        <h3 className="text-2xl font-bold text-text-primary mb-2">Harry Potter Project</h3>
                        <p className="text-sm text-primary font-mono mb-6">REBUILD NARRATIVE — How my thinking evolved</p>

                        {/* Original Build */}
                        <div className="mb-6">
                            <h4 className="text-xs uppercase tracking-wider font-bold text-red-600 dark:text-red-400 mb-3 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                                Original Build (Student Era)
                            </h4>
                            <div className="bg-red-900/10 border border-red-900/30 rounded p-4 mb-3">
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {LAB_DATA.harryPotter.original.stack.map((tech) => (
                                        <span key={tech} className="px-2 py-1 text-xs font-mono bg-red-900/20 text-red-600 dark:text-red-400 border border-red-900/50 rounded">{tech}</span>
                                    ))}
                                </div>
                                <p className="text-xs text-text-muted mb-2">Limitations:</p>
                                <ul className="text-sm text-text-muted space-y-1">
                                    {LAB_DATA.harryPotter.original.limitations.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="text-red-500">✗</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Trigger */}
                        <div className="mb-6">
                            <h4 className="text-xs uppercase tracking-wider font-bold text-yellow-600 dark:text-yellow-400 mb-3 flex items-center gap-2">
                                <span className="material-symbols-outlined text-base">bolt</span>
                                Trigger for Evolution
                            </h4>
                            <ul className="text-sm text-text-muted space-y-2">
                                {LAB_DATA.harryPotter.trigger.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="text-yellow-500">→</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Rebuild Vision */}
                        <div className="mb-6">
                            <h4 className="text-xs uppercase tracking-wider font-bold text-green-600 dark:text-green-400 mb-3 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                Rebuild Vision
                            </h4>
                            <div className="bg-green-900/10 border border-green-900/30 rounded p-4">
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {LAB_DATA.harryPotter.rebuild.stack.map((tech) => (
                                        <span key={tech} className="px-2 py-1 text-xs font-mono bg-green-900/20 text-green-600 dark:text-green-400 border border-green-900/50 rounded">{tech}</span>
                                    ))}
                                </div>
                                <ul className="text-sm text-text-muted space-y-1">
                                    {LAB_DATA.harryPotter.rebuild.intent.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="text-green-500">✓</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Learning Outcome */}
                        <div className="bg-primary/5 border border-primary/20 rounded p-4">
                            <p className="text-xs text-text-muted uppercase mb-2">Learning Outcome</p>
                            <p className="text-sm text-text-primary italic">
                                "I don't abandon old work — I evolve it as my skill level increases."
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Column - Future Class */}
                <div className="lg:col-span-6 flex flex-col gap-6">
                    <div className="bg-card-dark border border-border-dark rounded p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="material-symbols-outlined text-primary">rocket_launch</span>
                            <h2 className="text-xl font-bold text-text-primary">Evolution Arc 02</h2>
                            <Badge variant="warning">Class in Progress</Badge>
                        </div>
                        <h3 className="text-2xl font-bold text-text-primary mb-2">AI & Automation Engineer</h3>
                        <p className="text-sm text-primary font-mono mb-6">FUTURE CLASS UNLOCK — Deliberate transition beyond frontend</p>

                        {/* Current Exploration */}
                        <div className="mb-6">
                            <h4 className="text-xs uppercase tracking-wider font-bold text-text-muted mb-3">Current Exploration</h4>
                            <div className="flex flex-wrap gap-2">
                                {LAB_DATA.futureClass.current.map((item) => (
                                    <span key={item} className="px-3 py-1.5 text-xs font-mono bg-surface-dark border border-border-dark text-text-primary rounded">{item}</span>
                                ))}
                            </div>
                        </div>

                        {/* Problems to Solve */}
                        <div className="mb-6">
                            <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-3">Problems I Intend to Solve</h4>
                            <ul className="text-sm text-slate-300 space-y-2">
                                {LAB_DATA.futureClass.problems.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="text-primary">◆</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Near-Term Vision */}
                        <div className="mb-6">
                            <h4 className="text-xs uppercase tracking-wider font-bold text-primary mb-3">Near-Term Vision (Next 6 Months)</h4>
                            <div className="bg-primary/5 border border-primary/20 rounded p-4">
                                <ul className="text-sm text-slate-300 space-y-2">
                                    {LAB_DATA.futureClass.vision.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="text-primary">→</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Trajectory Visualization */}
                        <div>
                            <h4 className="text-xs uppercase tracking-wider font-bold text-text-muted mb-3">Strategic Differentiation</h4>
                            <div className="bg-surface-dark border border-border-dark rounded p-4">
                                <p className="text-xs text-text-muted mb-3">Most frontend engineers stop at UI. My trajectory:</p>
                                <div className="flex items-center gap-2 flex-wrap">
                                    {LAB_DATA.futureClass.trajectory.map((step, i) => (
                                        <div key={step} className="flex items-center gap-2">
                                            <span className={`px-3 py-1.5 text-xs font-mono rounded border ${i === LAB_DATA.futureClass.trajectory.length - 1 ? 'bg-primary/20 text-primary border-primary/50' : 'bg-surface-dark text-text-primary border-border-dark'}`}>
                                                {step}
                                            </span>
                                            {i < LAB_DATA.futureClass.trajectory.length - 1 && <span className="text-primary">→</span>}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* XP & Loot Panel */}
                    <div className="bg-card-dark border border-border-dark rounded p-6">
                        <h3 className="text-sm uppercase tracking-wider font-bold text-primary mb-4 flex items-center gap-2">
                            <span className="material-symbols-outlined text-base">inventory_2</span>
                            Evolution Lab — Loot & XP
                        </h3>

                        <div className="mb-4">
                            <p className="text-xs text-text-muted mb-2">LOOT (Unlocked / In Progress)</p>
                            <div className="flex flex-wrap gap-2">
                                {LAB_DATA.loot.map((item) => (
                                    <Badge key={item} variant="success">{item}</Badge>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-3">
                            <p className="text-xs text-text-muted">XP ALLOCATION</p>
                            <div className="space-y-2">
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-xs text-text-muted font-mono">Growth XP</span>
                                        <span className="text-xs text-primary font-mono">Very High</span>
                                    </div>
                                    <ProgressBar value={95} showPercentage={false} glow />
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-xs text-text-muted font-mono">Future Readiness XP</span>
                                        <span className="text-xs text-primary font-mono">High</span>
                                    </div>
                                    <ProgressBar value={85} showPercentage={false} glow />
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-xs text-text-muted font-mono">Market Differentiation XP</span>
                                        <span className="text-xs text-hud-accent font-mono">High (if executed)</span>
                                    </div>
                                    <ProgressBar value={80} showPercentage={false} color="blue" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Summary - Phase 5 Style */}
            <div className="relative z-10 mt-8 p-6 bg-card-dark border border-primary/30 rounded">
                <h3 className="text-sm uppercase tracking-wider font-bold text-primary mb-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-base">psychology</span>
                    What This Achieves
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div className="p-4 bg-surface-dark border border-border-dark rounded">
                        <span className="material-symbols-outlined text-2xl text-hud-success mb-2 block">verified_user</span>
                        <p className="text-white font-medium text-sm">Safe for Enterprise Today</p>
                        <p className="text-xs text-text-muted mt-1">Proven reliability in compliance-sensitive environments</p>
                    </div>
                    <div className="p-4 bg-surface-dark border border-border-dark rounded">
                        <span className="material-symbols-outlined text-2xl text-primary mb-2 block">trending_up</span>
                        <p className="text-white font-medium text-sm">Ambitious for Tomorrow</p>
                        <p className="text-xs text-text-muted mt-1">Deliberate investment in future-proof skills</p>
                    </div>
                    <div className="p-4 bg-surface-dark border border-border-dark rounded">
                        <span className="material-symbols-outlined text-2xl text-purple-400 mb-2 block">hub</span>
                        <p className="text-white font-medium text-sm">Thinks in Systems</p>
                        <p className="text-xs text-text-muted mt-1">Not just screens — decision leverage</p>
                    </div>
                </div>
                <p className="text-center text-xs text-slate-500 mt-4 italic font-mono">
                    This combination is rare and valuable.
                </p>
            </div>
        </StandardPageLayout>
    );
}
