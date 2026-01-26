import React from 'react';
import Badge from '../atoms/Badge';

export default function CertItem({ name, id, status, color }) {
    return (
        <div className="flex items-center justify-between p-3 bg-surface-dark border border-border-dark rounded hover:border-primary/30 transition-colors group">
            <div className="flex items-center gap-3">
                <div className={`p-2 rounded ${color}`}>
                    <span className="material-symbols-outlined text-sm">verified_user</span>
                </div>
                <div>
                    <h4 className="text-text-primary font-bold text-sm leading-tight">{name}</h4>
                    <p className="text-[10px] text-text-muted font-mono mt-0.5">ID: {id}</p>
                </div>
            </div>
            <Badge variant="success" className="text-[10px]">{status}</Badge>
        </div>
    );
}
