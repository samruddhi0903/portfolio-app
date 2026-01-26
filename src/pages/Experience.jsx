import { Link } from 'react-router-dom';
import JobCard from '../components/molecules/JobCard';
import { EXPERIENCE_DATA } from '../constants/data';

export default function Experience() {
    return (
        <div className="flex h-full grow flex-col">
            {/* Navigation */}
            <div className="w-full px-6 md:px-40 pt-8 pb-4">
                <div className="max-w-[960px] mx-auto w-full">
                    <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium leading-normal group">
                        <span className="material-symbols-outlined text-[16px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
                        Back to Quest Log
                    </Link>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 px-6 md:px-40 pb-20 flex justify-center">
                <div className="w-full max-w-[960px] flex flex-col gap-12">
                    {EXPERIENCE_DATA.map((job, index) => (
                        <JobCard key={index} {...job} />
                    ))}
                </div>
            </div>
        </div>
    );
}
