import Badge from '../components/atoms/Badge';
import CertCard from '../components/molecules/CertCard';
import ProgressBar from '../components/atoms/ProgressBar';
import { CERTIFICATIONS_DATA } from '../constants/data';
import StandardPageLayout from '../components/templates/StandardPageLayout';

export default function Certifications() {
    return (
        <StandardPageLayout
            title="Professional Certifications"
            subtitle="Verified Technical Credentials"
        >
            {/* Verification Statement */}
            <div className="mb-6 p-3 bg-primary/10 border border-primary/20 rounded">
                <p className="text-xs text-text-muted text-center">
                    {CERTIFICATIONS_DATA.verificationStatement}
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Left Column - Cert List */}
                <div className="flex-1 flex flex-col gap-6">
                    {/* Filters */}
                    <div className="flex flex-wrap items-center justify-between gap-4 py-2 border-b border-border-dark pb-4">
                        <div className="flex flex-wrap gap-2">
                            <button className="group flex h-8 items-center gap-2 rounded bg-card-dark border border-border-dark px-3 hover:border-primary/50 transition-colors">
                                <span className="text-xs font-mono text-text-muted group-hover:text-primary transition-colors">SORT: DATE_DESC</span>
                                <span className="material-symbols-outlined text-text-muted text-[16px] group-hover:text-primary">arrow_drop_down</span>
                            </button>
                            <button className="group flex h-8 items-center gap-2 rounded bg-card-dark border border-border-dark px-3 hover:border-primary/50 transition-colors">
                                <span className="text-xs font-mono text-text-muted group-hover:text-primary transition-colors">FILTER: ISSUER</span>
                                <span className="material-symbols-outlined text-text-muted text-[16px] group-hover:text-primary">filter_list</span>
                            </button>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-text-muted font-mono">
                            <span>DISPLAYING {CERTIFICATIONS_DATA.list.length} RECORDS</span>
                        </div>
                    </div>

                    {/* Cert Cards */}
                    <div className="flex flex-col gap-4">
                        {CERTIFICATIONS_DATA.list.map((cert, i) => (
                            <CertCard key={i} {...cert} onVerify={() => { }} />
                        ))}
                    </div>
                </div>

                {/* Right Column - Stats Sidebar */}
                <div className="lg:w-80 flex flex-col gap-6 shrink-0">
                    {/* Main Stats Widget */}
                    <div className="bg-card-dark border border-border-dark rounded p-6 sticky top-24">
                        <div className="flex items-center gap-2 mb-6 border-b border-border-dark pb-4">
                            <span className="material-symbols-outlined text-primary">donut_large</span>
                            <h3 className="font-bold text-text-primary">Global Proficiency</h3>
                        </div>

                        {/* Circular Progress */}
                        <div className="flex flex-col items-center justify-center py-4 relative">
                            <div className="relative size-32">
                                <svg className="size-full -rotate-90" viewBox="0 0 36 36">
                                    <path
                                        className="text-border-dark"
                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    />
                                    <path
                                        className="text-primary drop-shadow-[0_0_8px_rgba(41,241,255,0.6)]"
                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeDasharray="75, 100"
                                        strokeWidth="2"
                                    />
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="text-3xl font-black text-text-primary">78</span>
                                    <span className="text-[10px] text-text-muted font-mono uppercase">SYS_LEVEL</span>
                                </div>
                            </div>
                        </div>

                        {/* XP Progress */}
                        <div className="flex flex-col gap-4 mt-6">
                            <div className="space-y-1">
                                <div className="flex justify-between text-xs text-text-muted font-mono">
                                    <span>TOTAL_XP</span>
                                    <span className="text-text-primary">7,800 / 10,000</span>
                                </div>
                                <ProgressBar value={84} showPercentage={false} glow />
                            </div>
                            <div className="grid grid-cols-2 gap-3 mt-2">
                                <div className="bg-background-dark p-3 rounded border border-border-dark flex flex-col items-center text-center">
                                    <span className="text-2xl font-bold text-text-primary">4</span>
                                    <span className="text-[10px] text-text-muted font-mono mt-1">VERIFIED_CERTS</span>
                                </div>
                                <div className="bg-background-dark p-3 rounded border border-border-dark flex flex-col items-center text-center">
                                    <span className="text-2xl font-bold text-text-primary">1</span>
                                    <span className="text-[10px] text-text-muted font-mono mt-1">PENDING_RENEW</span>
                                </div>
                            </div>
                        </div>

                        {/* Next Milestone */}
                        <div className="mt-6 pt-6 border-t border-border-dark">
                            <h4 className="text-xs font-bold text-text-muted mb-3 uppercase tracking-wider">Next Milestone</h4>
                            <div className="flex items-center gap-3">
                                <div className="size-8 rounded bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                                    <span className="material-symbols-outlined text-[18px]">military_tech</span>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-text-primary">Senior Software Engineer</p>
                                    <p className="text-[10px] text-text-muted font-mono">REQ: RSYSTEM_OWNERSHIP + SCALE</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </StandardPageLayout>
    );
}
