import React from 'react';

export default function SkillItem({ name, level, exp, icon }) {
    return (
        <div className="flex items-center justify-between p-4 bg-surface-dark border border-border-dark rounded hover:border-primary/20 transition-colors group">
            <div className="flex flex-wrap items-center gap-2 flex-1">
                {/* Changed class to devicon setup */}
                <span className={`${icon} text-text-muted group-hover:text-primary transition-colors text-md`}>
                </span>
                <div className="flex-1">
                    <h4 className="text-text-primary font-bold text-sm mb-0.5">{name}</h4>
                    <p className="text-text-muted text-xs">{level} ({exp})</p>
                </div>
            </div>
        </div>

    );
}
