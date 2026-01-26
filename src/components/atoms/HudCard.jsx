export default function HudCard({ children, className = '', cornerAccents = false }) {
    return (
        <div className={`hud-card hud-border rounded p-5 relative overflow-hidden group ${className}`}>
            {cornerAccents && (
                <>
                    <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-primary"></div>
                    <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-primary"></div>
                    <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-primary"></div>
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-primary"></div>
                </>
            )}
            {children}
        </div>
    );
}
