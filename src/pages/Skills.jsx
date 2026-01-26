import { SKILLS_DATA } from '../constants/data';
import SkillItem from '../components/molecules/SkillItem';
import InfraCard from '../components/molecules/InfraCard';
import SkillRadar from '../components/molecules/SkillRadar';
import AvatarImageDark from '../assets/avatar-img-dark.png';
import AvatarImageLight from '../assets/avatar-img-light.png';

export default function Skills() {
    return (
        <div className="max-w-[1400px] w-full mx-auto px-4 lg:px-8 py-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
                <div>
                    <div className="flex items-center gap-2 text-primary text-xs font-mono uppercase tracking-wider mb-2">
                        <span className="material-symbols-outlined text-sm">terminal</span>
                        <span>Technical Proficiency</span>
                    </div>
                    <h1 className="text-text-primary text-4xl font-bold tracking-tight mb-2 dark:text-transparent dark:bg-clip-text dark:bg-linear-to-r dark:from-primary dark:to-purple-200">Skills Matrix</h1>
                    <p className="text-text-muted max-w-xl text-sm">
                        Ownership-based technical proficiency and operational capabilities.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-12 lg:grid-cols-12 gap-6">
                <div className="xl:col-span-5 lg:col-span-6 space-y-4">
                    {/* Core Technologies */}
                    <div className="bg-background-dark border border-border-dark rounded overflow-hidden">
                        <div className="p-4 border-b border-border-dark flex justify-between items-center bg-surface-dark dark:bg-black/20">
                            <h2 className="text-lg font-bold text-text-primary border-l-4 border-primary pl-3 dark:drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]">
                                Core Technologies
                            </h2>
                            <span className="text-[10px] text-text-muted font-mono">PRIMARY OWNERSHIP</span>
                        </div>
                        <div className="p-2 space-y-2">
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                                {SKILLS_DATA.core.map((skill) => (
                                    <SkillItem key={skill.name} {...skill} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Working Knowledge */}
                    <div className="bg-background-dark border border-border-dark rounded overflow-hidden">
                        <div className="p-4 border-b border-border-dark flex justify-between items-center bg-surface-dark dark:bg-black/20">
                            <h2 className="text-lg font-bold text-text-primary border-l-4 border-hud-accent pl-3">
                                Working Knowledge
                            </h2>
                            <span className="text-[10px] text-text-muted font-mono">SUPPORTING STACK</span>
                        </div>
                        <div className="p-2 space-y-2">
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                                {SKILLS_DATA.working.map((skill) => (
                                    <SkillItem key={skill.name} {...skill} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Exposure / Familiarity */}
                    <div className="bg-background-dark border border-border-dark rounded overflow-hidden">
                        <div className="p-4 border-b border-border-dark flex justify-between items-center bg-surface-dark dark:bg-black/20">
                            <h2 className="text-lg font-bold text-text-primary border-l-4 border-border-dark pl-3">
                                Exposure & Familiarity
                            </h2>
                            <span className="text-[10px] text-text-muted font-mono">PRODUCTION AWARE</span>
                        </div>
                        <div className="p-2 space-y-2">
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                                {SKILLS_DATA.exposure.map((skill) => (
                                    <SkillItem key={skill.name} {...skill} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-3 space-y-4 hidden xl:block">
                    <div className="w-full overflow-hidden grid-cols-1 place-items-center ">
                        <div className="col-start-1 row-start-1 w-full h-150 relative z-0">
                            <img
                                id="avatar-img-light"
                                src={AvatarImageLight}
                                alt=""
                                className="absolute inset-0 w-auto h-150 object-cover object-center opacity-100 transition-opacity"
                            />
                            <img
                                id="avatar-img-dark"
                                src={AvatarImageDark}
                                alt=""
                                className="absolute inset-0 w-auto h-150 object-cover object-center opacity-0 transition-opacity"
                            />
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-4 lg:col-span-6 space-y-4">
                    {/* Operational Attributes (Radar) */}
                    <div className="bg-background-dark border border-border-dark rounded p-6 flex flex-col items-center">
                        <div className="w-full flex justify-between items-start mb-4">
                            <h2 className="text-lg font-bold text-text-primary border-l-4 border-primary pl-3">
                                Soft Skills & Leadership
                            </h2>
                        </div>

                        <div className="py-2">
                            <SkillRadar
                                labels={SKILLS_DATA.radar.labels}
                                data={SKILLS_DATA.radar.data}
                                size={300}
                            />
                        </div>

                        {/* Radar Stats Footer */}
                        <div className="grid grid-cols-2 w-full gap-4 mt-6 pt-6 border-t border-border-dark">
                            <div className="bg-surface-dark p-3 rounded border border-border-dark text-center dark:bg-black/20">
                                <span className="text-[10px] text-text-muted font-mono uppercase block mb-1">Leadership</span>
                                <div className="text-2xl font-bold text-text-primary">
                                    {SKILLS_DATA.radar.stats.leadership}<span className="text-text-muted text-sm">/100</span>
                                </div>
                            </div>
                            <div className="bg-surface-dark p-3 rounded border border-border-dark text-center dark:bg-black/20">
                                <span className="text-[10px] text-text-muted font-mono uppercase block mb-1">Soft Skills</span>
                                <div className="text-2xl font-bold text-text-primary">
                                    {SKILLS_DATA.radar.stats.softSkills}<span className="text-text-muted text-sm">/100</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tools & Infrastructure */}
                    <div className="bg-background-dark border border-border-dark rounded p-4 dark:shadow-[0_0_20px_rgba(56,189,248,0.1)]">
                        <h2 className="text-lg font-bold text-text-primary border-l-4 border-primary pl-3 mb-6">
                            Tools & Infrastructure
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                            {SKILLS_DATA.infrastructure.map((infra) => (
                                <InfraCard key={infra.name} {...infra} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
