import StatsCard from '../components/dashboard/StatsCard';
import UploadBox from '../components/dashboard/UploadBox';
import {
  DocumentTextIcon,
  CheckBadgeIcon,
  ClockIcon,
  CheckCircleIcon,
  ArrowUpCircleIcon,
} from '@heroicons/react/16/solid';
import RecentTests from '../components/dashboard/RecentTests';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleGradingClick = () => {
    navigate('/grading');
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <StatsCard
          icon={DocumentTextIcon}
          value={24}
          description="Ocenione testy"
        />
        <StatsCard
          icon={CheckBadgeIcon}
          value="69%"
          description="Średnia zdawalność"
        />
        <StatsCard
          icon={ClockIcon}
          value="2.4h"
          description="Oszczędność czasu"
        />
      </div>
      <div className="flex flex-col justify-between gap-5 md:flex-row">
        <UploadBox
          header="Wgraj nowy test"
          description="Prześlij plik Excel z odpowiedziami uczniów, a AI zajmie się resztą!"
          buttonText="Wybierz plik"
          buttonIcon={ArrowUpCircleIcon}
        />
        <UploadBox
          header="Ostatnio ocenione testy"
          description="Przejrzyj i edytuj wyniki ostatnio sprawdzonych testów"
          buttonText="Przejdź do oceniania"
          buttonIcon={CheckCircleIcon}
          onClick={handleGradingClick}
        />
      </div>
      <RecentTests />
    </>
  );
};

export default Dashboard;
