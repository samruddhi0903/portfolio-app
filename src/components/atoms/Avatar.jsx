import profileImg from '../../assets/profile.jpg';

export default function Avatar({ className = '' }) {
    return (
        <div className={`relative mb-4 ${className}`}>
            <div className="w-50 h-50 rounded-md border-2 border-primary/50 flex items-center justify-center bg-surface-dark relative z-10 overflow-hidden ">
                <img
                    src={profileImg}
                    alt="Profile"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="absolute inset-0 border border-dashed border-primary/80 rounded-md animate-spin-slow w-58 h-58 -m-4"></div>
        </div>
    );
}
