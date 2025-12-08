import StatsCard from '../components/dashboard/StatsCard';
import UploadBox from '../components/dashboard/UploadBox';
import {
  DocumentTextIcon,
  CheckBadgeIcon,
  ClockIcon,
  CheckCircleIcon,
  PaintBrushIcon,
} from '@heroicons/react/16/solid';
import RecentTests from '../components/dashboard/RecentTests';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleGradingClick = () => {
    navigate('/grading');
  };

  const handleCreatorClick = () => {
    navigate('/testCreator');
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
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
          header="Stwórz nowy test"
          description="Utwórz test przy użyciu intuicyjnego kreatora testów"
          buttonText="Przejdź do kreatora"
          buttonIcon={PaintBrushIcon}
          onClick={handleCreatorClick}
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
