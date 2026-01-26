import Badge from '../components/atoms/Badge';
import ProjectCard from '../components/molecules/ProjectCard';
import { PROJECTS_DATA } from '../constants/data';
import StandardPageLayout from '../components/templates/StandardPageLayout';

export default function Projects() {
    return (
        <StandardPageLayout
            title="Technical Quest Gallery"
            subtitle={
                <>
                    Showcase of delivered solutions across enterprise, freelance, and internship engagements.
                    <br className="hidden md:block" />
                    <span className="text-text-muted text-sm font-mono mt-1 block">Focused on business value, scalability, and user experience.</span>
                </>
            }
        >
            {/* XP Summary - Phase 5 Style */}
            <div className="mb-8 p-4 bg-surface-dark border border-border-dark rounded flex flex-wrap items-center gap-6">
                <span className="text-xs font-mono text-text-muted uppercase">Domain Mastery:</span>
                {PROJECTS_DATA.xpSummary.map((item) => (
                    <div key={item.skill} className="flex items-center gap-2 text-sm">
                        <span className="text-text-primary">{item.skill}:</span>
                        <Badge variant="success">{item.level}</Badge>
                    </div>
                ))}
            </div>

            {/* Grid - Phase 5 Style (Flat, Sharp) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {PROJECTS_DATA.projects.map((quest, i) => (
                    <ProjectCard key={i} {...quest} />
                ))}
            </div>

            {/* Iteration Insight Panel - Phase 5 Style */}
            <div className="mt-12 p-6 bg-card-dark border border-border-dark rounded relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary/50"></div>
                <h3 className="text-sm uppercase tracking-wider font-bold text-primary mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-base">architecture</span>
                    Engineering Philosophy
                </h3>
                <p className="text-text-muted text-sm mb-6 max-w-3xl">
                    Every project is approached with a "Zero Ambiguity" mindset, ensuring scalable architecture, strict typing, and maintainable codebases from Day 1.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-surface-dark border border-border-dark rounded p-5 dark:border-primary/20 dark:hover:border-primary/50 transition-colors">
                        <h4 className="text-text-primary font-bold text-sm mb-3 flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-sm">precision_manufacturing</span>
                            Scalability First
                        </h4>
                        <ul className="text-xs text-text-muted space-y-2 font-mono">
                            <li className="flex items-center gap-2"><span className="w-1 h-1 bg-text-dim rounded-full"></span>Microservices ready architecture</li>
                            <li className="flex items-center gap-2"><span className="w-1 h-1 bg-text-dim rounded-full"></span>Modular component design</li>
                            <li className="flex items-center gap-2"><span className="w-1 h-1 bg-text-dim rounded-full"></span>Performance optimized rendering</li>
                        </ul>
                    </div>
                    <div className="bg-surface-dark border border-border-dark rounded p-5 dark:border-primary/20 dark:hover:border-primary/50 transition-colors">
                        <h4 className="text-text-primary font-bold text-sm mb-3 flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-sm">verified_user</span>
                            Reliability
                        </h4>
                        <ul className="text-xs text-text-muted space-y-2 font-mono">
                            <li className="flex items-center gap-2"><span className="w-1 h-1 bg-text-dim rounded-full"></span>Strict TypeScript implementation</li>
                            <li className="flex items-center gap-2"><span className="w-1 h-1 bg-text-dim rounded-full"></span>Comprehensive error handling</li>
                            <li className="flex items-center gap-2"><span className="w-1 h-1 bg-text-dim rounded-full"></span>Accessibility compliance (WCAG)</li>
                        </ul>
                    </div>
                    <div className="bg-surface-dark border border-border-dark rounded p-5 dark:border-primary/20 dark:hover:border-primary/50 transition-colors">
                        <h4 className="text-text-primary font-bold text-sm mb-3 flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-sm">psychology</span>
                            User Centric
                        </h4>
                        <ul className="text-xs text-text-muted space-y-2 font-mono">
                            <li className="flex items-center gap-2"><span className="w-1 h-1 bg-text-dim rounded-full"></span>Intuitive UX patterns</li>
                            <li className="flex items-center gap-2"><span className="w-1 h-1 bg-text-dim rounded-full"></span>Responsive across devices</li>
                            <li className="flex items-center gap-2"><span className="w-1 h-1 bg-text-dim rounded-full"></span>Performance-driven interactions</li>
                        </ul>
                    </div>
                </div>
            </div>
        </StandardPageLayout>
    );
}
