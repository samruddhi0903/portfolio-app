import React from 'react';
import Badge from '../atoms/Badge';

export default function SkillRow({ icon, name, proficiency, exp, confidence }) {
    return (
        <div className="grid grid-cols-12 gap-4 items-center p-4 bg-surface-dark border-b border-border-dark last:border-b-0 hover:bg-white/2 transition-colors group">
            {/* Tech Name */}
            <div className="col-span-4 flex items-center gap-3">
                <span className="material-symbols-outlined text-text-muted group-hover:text-primary transition-colors">{icon}</span>
                <span className="font-bold text-text-primary font-mono text-sm">{name}</span>
            </div>

            {/* Proficiency */}
            <div className="col-span-4 flex flex-col justify-center">
                <div className="flex justify-between mb-1">
                    <span className="text-[10px] text-text-muted font-mono">Loading...</span>
                    <span className="text-xs font-bold text-primary">{proficiency}%</span>
                </div>
                <div className="h-1.5 w-full bg-border-dark rounded-full overflow-hidden">
                    <div
                        className="h-full bg-primary shadow-[0_0_8px_rgba(45,212,191,0.5)] relative"
                        style={{ width: `${proficiency}%` }}
                    >
                        <div className="absolute right-0 top-0 bottom-0 w-1 bg-white/50"></div>
                    </div>
                </div>
            </div>

            {/* Experience */}
            <div className="col-span-2 text-center">
                <span className="text-sm font-mono text-text-muted">{exp}</span>
            </div>

            {/* Confidence */}
            <div className="col-span-2 flex justify-end">
                <Badge variant={confidence === 'EXPERT' ? 'success' : 'primary'} className="min-w-[80px] justify-center text-[10px]">
                    {confidence}
                </Badge>
            </div>
        </div>
    );
}
