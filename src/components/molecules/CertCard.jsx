export default function CertCard({
    title,
    issuer,
    tier = 'Professional',
    issuedDate,
    expiryDate,
    status = 'active',
    iconColor = 'primary',
    onVerify
}) {
    const statusConfig = {
        active: { bg: 'bg-hud-success/20', text: 'text-hud-success', border: 'border-hud-success/50', label: 'ACTIVE' },
        expiring: { bg: 'bg-hud-warning/20', text: 'text-hud-warning', border: 'border-hud-warning/50', label: 'EXPIRING_SOON' },
        expired: { bg: 'bg-red-900/20', text: 'text-red-400', border: 'border-red-900/50', label: 'EXPIRED' },
    };

    const config = statusConfig[status] || statusConfig.active;

    const colorClasses = {
        primary: 'text-primary bg-primary/50',
        blue: 'text-blue-400 bg-blue-500/50',
        purple: 'text-purple-400 bg-purple-500/50',
        yellow: 'text-yellow-500 bg-yellow-500/50',
    };

    return (
        <div className="group relative flex flex-col sm:flex-row gap-0 sm:gap-6 bg-card-dark border border-border-dark rounded hover:border-primary/30 transition-all duration-300 overflow-hidden">
            {/* Left Status Stripe */}
            <div className={`absolute left-0 top-0 bottom-0 w-1 ${colorClasses[iconColor]?.split(' ')[0] || 'bg-primary'}/50 group-hover:${colorClasses[iconColor]?.split(' ')[0] || 'bg-primary'} transition-colors`}></div>

            {/* Badge Area */}
            <div className="p-6 flex items-center justify-center sm:w-32 bg-background-dark/30 border-b sm:border-b-0 sm:border-r border-border-dark">
                <div className={`size-16 relative flex items-center justify-center ${colorClasses[iconColor]?.split(' ')[0] || 'text-primary'} opacity-80 group-hover:opacity-100 transition-opacity`}>
                    <span className="material-symbols-outlined text-5xl">verified</span>
                </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 p-5 pl-5 sm:pl-0 flex flex-col justify-between gap-4">
                <div className="flex justify-between items-start gap-4">
                    <div>
                        <h3 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors">
                            {title}
                        </h3>
                        <p className="text-text-muted text-sm mt-1">{tier} Tier • {issuer}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
