import Badge from '../atoms/Badge';
import { useState } from 'react';

export default function ProjectCard({ title, description, status = 'stable', tags = [], xp = 0, xpCategory = 'Dev', contributions = [], githubLink = ''}) {
    const [expanded, setExpanded] = useState(false);
    return (
        <article className="flex flex-col justify-between bg-card-dark border border-border-dark rounded p-6 hover:border-primary/50 transition-colors group">
            <div>
                <div className="flex justify-between items-start mb-4">
                    <div className="flex flex-col gap-1">
                        <h3 className="text-text-primary text-xl font-bold group-hover:text-primary transition-colors">
                            {title}
                        </h3>
                    </div>
                    <Badge variant='primary'>{status.toUpperCase()}</Badge>
                </div>
                <p className="text-text-muted text-sm leading-relaxed mb-6 line-clamp-3">
                    {description}
                </p>

                {contributions.length > 0 && <div className= {`rounded border border-border-dark bg-background-dark p-6`}>
                    <ul className="space-y-4 font-mono text-xs text-text-primary">
                        {(expanded ? contributions : contributions.slice(0, 3)).map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <span className="w-1 h-1 rounded-full bg-hud-accent" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>

                    {contributions.length > 2 && (
                        <button
                            onClick={() => setExpanded(!expanded)}
                            className="mt- text-xs font-mono text-hud-accent hover:underline"
                        >
                            {expanded ? 'Collapse Project Log' : 'Expand Project Log'}
                        </button>
                    )}
                </div>}
                
                <div className="flex flex-wrap gap-2 mt-6 mb-6">
                    {tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 rounded text-[10px] font-mono border bg-surface-dark border-border-dark text-primary">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            <div className="flex items-center justify-between border-t border-border-dark pt-2 mt-auto">
                <span className="text-text-muted text-xs font-mono flex items-center gap-1">
                    <span>{xpCategory}</span>
                </span>
                {githubLink.length > 0 && (
                    <a href={githubLink} className="text-inherit no-underline">
                        <span className={`devicon-github-plain text-text-muted group-hover:text-primary transition-colors text-xl`}></span>
                    </a>
                )}
            </div>
        </article>
    );
}
