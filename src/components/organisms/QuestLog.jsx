import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Badge from '../atoms/Badge';
import { QUEST_DATA } from '../../constants/data';

export default function QuestLog() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('PROFESSIONAL');
    const [filter, setFilter] = useState('ALL');

    const currentList = activeTab === 'PROFESSIONAL' ? QUEST_DATA.professional : QUEST_DATA.side;
    const filteredList = filter === 'ALL'
        ? currentList
        : currentList.filter(q => q.status === 'Completed' || q.status === 'Production');

    const handleQuestClick = (quest) => {
        if (quest.type === 'PROFESSIONAL') {
            navigate('/experience');
        } else {
            navigate('/projects');
        }
    };

    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4 border-b border-primary/20 pb-4">
                <h2 className="text-lg font-bold flex items-center gap-2 text-text-primary">
                    <span className="material-symbols-outlined text-primary">token</span>
                    {QUEST_DATA.sectionTitle}
                    <span className="text-xs text-text-muted font-normal ml-1">(Quest Visual)</span>
                </h2>

                <div className="flex items-center justify-between flex-wrap gap-4">
                    {/* Main Tabs */}
                    <div className="flex bg-surface-dark p-1 rounded-md border border-border-dark">
                        <button
                            onClick={() => { setActiveTab('PROFESSIONAL'); setFilter('ALL'); }}
                            className={`px-4 py-1.5 text-xs font-bold rounded transition-colors ${activeTab === 'PROFESSIONAL' ? 'bg-primary text-background-dark' : 'text-text-muted hover:text-text-primary'}`}
                        >
                            PROFESSIONAL
                        </button>
                        <button
                            onClick={() => { setActiveTab('SIDE'); setFilter('ALL'); }}
                            className={`px-4 py-1.5 text-xs font-bold rounded transition-colors ${activeTab === 'SIDE' ? 'bg-primary text-background-dark' : 'text-text-muted hover:text-text-primary'}`}
                        >
                            SIDE QUESTS
                        </button>
                    </div>

                    {/* Sub-Filters */}
                    <div className="flex gap-2">
                        <button
                            onClick={() => setFilter('ALL')}
                            className={`px-3 py-1 text-xs font-bold rounded border transition-colors ${filter === 'ALL' ? 'bg-primary/20 text-primary border-primary/30' : 'bg-transparent text-text-muted border-transparent hover:text-text-primary'}`}
                        >
                            ALL
                        </button>
                        <button
                            onClick={() => setFilter('COMPLETED')}
                            className={`px-3 py-1 text-xs font-bold rounded border transition-colors ${filter === 'COMPLETED' ? 'bg-primary/20 text-primary border-primary/30' : 'bg-transparent text-text-muted border-transparent hover:text-text-primary'}`}
                        >
                            COMPLETED
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-4">
                {filteredList.map((quest, i) => (
                    <div
                        key={i}
                        onClick={() => handleQuestClick(quest)}
                        className="bg-background-dark border border-border-dark p-6 rounded-lg relative group hover:border-primary/50 transition-colors cursor-pointer"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-lg font-bold text-text-primary group-hover:text-primary transition-colors">{quest.role}</h3>
                                <p className="text-text-muted text-sm">{quest.company}</p>
                            </div>
                            <Badge variant={quest.status === 'Current' ? 'active' : 'secondary'} className="text-xs uppercase">{quest.status}</Badge>
                        </div>

                        <p className="text-text-primary text-sm leading-relaxed mb-6 font-sans">
                            {quest.description}
                        </p>

                        <div className="grid grid-cols-1 items-end">
                            <div className="flex justify-between border-b border-border-dark pb-1">
                                <span className="text-[10px] uppercase font-bold text-text-muted">Duration</span>
                                <span className="text-xs font-mono text-text-primary">{quest.duration}</span>
                            </div>
                        </div>
                    </div>
                ))}

                {filteredList.length === 0 && (
                    <div className="p-8 text-center border border-dashed border-border-dark rounded-lg text-text-primary text-sm">
                        No quests match the current filter parameters.
                    </div>
                )}
            </div>
        </div>
    );
}
