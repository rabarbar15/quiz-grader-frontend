import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/16/solid';
import ViewToggle from '../components/grading/viewToggle';

const Grading = () => {
  const [view, setView] = useState<'students' | 'test'>('students');
  const handleViewChange = () => {
    setView(view === 'test' ? 'students' : 'test');
  };
  return (
    <div className="flex flex-col gap-4 items-start">
      <Link to="/" className="flex gap-2 text-primary text-bold font-semibold">
        <ArrowLeftIcon className="w-4" />
        Powrót do dashboardu
      </Link>
      <ViewToggle view={view} onClick={handleViewChange} />
    </div>
  );
};

export default Grading;
