import { Link, useLocation } from 'react-router-dom';
import TestEditor from '../components/testCreator/TestEditor';
import { ArrowLeftIcon } from '@heroicons/react/16/solid';

const TestCreator = () => {
  return (
    <div className="bg-amber-100 grid grid-cols-6">
      <div className="col-span-4 flex flex-col gap-3">
        <Link
          to="/"
          className="flex gap-2 text-primary text-bold font-semibold">
          <ArrowLeftIcon className="w-4" />
          Powrót do dashboardu
        </Link>
        <TestEditor />
      </div>
    </div>
  );
};

export default TestCreator;
