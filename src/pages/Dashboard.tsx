import StatsCard from '../components/StatsCard';
import UploadBox from '../components/UploadBox';
import {
  DocumentTextIcon,
  CheckBadgeIcon,
  ClockIcon,
  CheckCircleIcon,
  ArrowUpCircleIcon,
} from '@heroicons/react/16/solid';
import Header from '../components/Header';
import RecentTests from '../components/RecentTests';

const Dashboard = () => {
  return (
    <>
      <div className="px-3 md:px-5 bg-gray-50 min-h-screen">
        <main className="py-6 max-w-6xl mx-auto flex flex-col gap-6">
          <Header />
          <hr className="border-light-gray py-1" />
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
            />
          </div>
          <RecentTests />
        </main>
      </div>
    </>
  );
};

export default Dashboard;
