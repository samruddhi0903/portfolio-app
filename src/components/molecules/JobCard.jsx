import { useState } from 'react';
import Badge from '../atoms/Badge';
import SkillTag from '../atoms/SkillTag';
import ProjectCard from './ProjectCard';

export default function JobCard({
    company,
    role,
    period,
    location,
    description,
    type,
    active,
    visibility,
    responsibility,
    projects = [],
    tech = [],
    highlights = [],
    metrics = []
}) {
    const [expanded, setExpanded] = useState(false);

    return (
        <article className="w-full rounded border border-border-dark bg-card-dark overflow-hidden">

            {/* HEADER */}
            <div className="relative p-8 md:p-10 border-b border-border-dark bg-surface-dark/50">
                <div className="flex flex-col md:flex-row md:justify-between gap-6">
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-wrap gap-2 mb-2">
                            {active && <Badge variant="active">Current Quest</Badge>}
                            <Badge variant="purple">{type}</Badge>
                            {visibility && (
                                <Badge variant="outline">{visibility}</Badge>
                            )}
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary">
                            {company}
                        </h1>
                        <p className="text-lg md:text-xl font-medium text-text-muted">
                            {role}
                        </p>
                        <p className="text-sm text-text-muted">
                            {location}
                        </p>
                        {responsibility && (
                            <p className="mt-3 text-xs font-mono text-hud-accent">
                                Responsibility: {responsibility}
                            </p>
                        )}
                    </div>
                    <div className="self-start flex items-center gap-2 rounded border border-border-dark bg-border-dark/50 px-3 py-1.5">
                        <span className="material-symbols-outlined text-[18px] text-text-muted">
                            schedule
                        </span>
                        <span className="font-mono text-sm text-text-muted">
                            {period}
                        </span>
                    </div>

                </div>
            </div>

            {/* BODY */}
            <div className="p-8 md:p-10 space-y-10">
                {/* CONTEXT */}
                <section className="space-y-3">
                    <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-text-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-hud-accent" />
                        Context
                    </h3>
                    <p className="text-sm leading-relaxed text-text-primary">
                        {description}
                    </p>
                </section>
                {/* ENGINEERING ACTIONS */}
                {highlights.length > 0 && (
                    <section className="space-y-4">
                        <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-text-muted">
                            <span className="w-1.5 h-1.5 rounded-full bg-hud-accent" />
                            Engineering Actions
                        </h3>

                        <div className="rounded border border-border-dark bg-background-dark p-6">
                            <ul className="space-y-4 font-mono text-xs lg:text-sm text-text-primary">
                                {(expanded ? highlights : highlights.slice(0, 3)).map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="mt-1 text-hud-success">➜</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            {highlights.length > 3 && (
                                <button
                                    onClick={() => setExpanded(!expanded)}
                                    className="mt-4 text-xs font-mono text-hud-accent hover:underline"
                                >
                                    {expanded ? 'Collapse Engineering Log' : 'Expand Engineering Log'}
                                </button>
                            )}
                        </div>
                    </section>
                )}

                {/*PROJECTS */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>

                {/* IMPACT */}
                {metrics.length > 0 && (
                    <section className="space-y-4">
                        <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-text-muted">
                            <span className="w-1.5 h-1.5 rounded-full bg-hud-success" />
                            Impact
                        </h3>

                        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                            {metrics.map((metric, i) => (
                                <div
                                    key={i}
                                    className="flex flex-col gap-1 rounded border border-hud-success/20 bg-hud-success/5 p-4"
                                >
                                    <span className=" text-lg lg:text-2xl font-mono font-bold text-hud-success">
                                        {metric.value}
                                    </span>
                                    <span className="text-xs font-medium text-text-primary/80">
                                        {metric.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

            </div>

            {/* TECH STACK */}
            <footer className="flex flex-col md:flex-row gap-4 border-t border-border-dark bg-surface-dark px-8 md:px-10 py-6">
                <span className="flex items-center gap-2 whitespace-nowrap text-xs font-bold uppercase tracking-wider text-text-muted">
                    <span className="material-symbols-outlined text-[16px]">
                        backpack
                    </span>
                    Tech Stack
                </span>

                <div className="flex flex-wrap gap-2">
                    {tech.map((t, i) => (
                        <SkillTag key={i} highlighted={i < 3}>
                            {t}
                        </SkillTag>
                    ))}
                </div>
            </footer>

        </article>
    );
}