import profileBgLight from '../../assets/profile-background-light.png';
import profileBgDark from '../../assets/profile-background-dark.jpg';

export default function DashboardLayout({ profile, questLog, stats }) {
    return (
        <div className="min-h-screen bg-background-dark text-text-primary font-mono">
            {/* ROW 1 - Profile Section (Hero with Background) */}
            <div className="w-full border-b border-border-dark overflow-hidden grid grid-cols-1 place-items-center">

                <div className="col-start-1 row-start-1 w-full h-full relative z-0">
                    <img
                        id="profile-bg-light"
                        src={profileBgLight}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover object-bottom opacity-100 transition-opacity duration-700 ease-in-out"
                    />
                    <img
                        id="profile-bg-dark"
                        src={profileBgDark}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover object-bottom opacity-0 transition-opacity duration-700 ease-in-out"
                    />
                </div>

                <div className="col-start-1 row-start-1 w-full z-10 flex items-center justify-center pointer-events-none">
                    <div className="w-full pointer-events-auto py-8">
                        {profile}
                    </div>
                </div>
            </div>

            {/* Remaining Dashboard Content */}
            <div className="max-w-6xl mx-auto p-4 md:p-8 flex flex-col gap-8">
                {/* ROW 2 - Stats */}
                <div className="w-full">
                    {stats}
                </div>

                {/* ROW 3 - Quest Log */}
                <div className="w-full">
                    {questLog}
                </div>
            </div>
        </div>
    );
}
