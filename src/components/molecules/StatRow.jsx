export default function StatRow({ label, value }) {
    return (
        <div className="flex justify-between py-2 border-b border-border-dark last:border-0 hover:bg-primary/5 transition-colors px-2 rounded">
            <span className="text-text-primary">{label}</span>
            <span className="text-text-primary font-bold">{value}</span>
        </div>
    );
}
