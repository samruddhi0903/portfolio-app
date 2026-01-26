import DashboardLayout from '../components/templates/DashboardLayout';
import OperativeProfile from '../components/organisms/OperativeProfile';
import QuestLog from '../components/organisms/QuestLog';
import GlobalStatsPanel from '../components/organisms/GlobalStatsPanel';

export default function Home() {
    return (
        <DashboardLayout
            profile={<OperativeProfile />}
            questLog={<QuestLog />}
            stats={<GlobalStatsPanel />}
        />
    );
}
