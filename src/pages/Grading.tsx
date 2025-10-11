import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/16/solid';
import ViewToggle from '../components/grading/ViewToggle';
import GradingPanel from '../components/grading/GradingPanel';
import FeedbackAi from '../components/grading/FeedbackAi';

const Grading = () => {
  const feedbackText = [
    'Bardzo dobry wynik! Uczeń wykazał się bardzo dobrą znajomością podstawowych wartości funkcji trygonometrycznych. Jedyny błąd dotyczył pełnego zapisu rozwiązań równania trygonometrycznego.',
    'Znajomość wartości funkcji trygonometrycznych dla podstawowych kątów Umiejętność rozwiązywania prostych równań trygonometrycznych Dokładność obliczeń',
    'Zapominanie o okresowości funkcji trygonometrycznych przy zapisie pełnego rozwiązania równania',
    'W celu poprawy wyników w przyszłości, zalecam powtórzenie zagadnienia okresowości funkcji trygonometrycznych oraz zapisu pełnych rozwiązań równań z uwzględnieniem parametru k.'
  ]
  const [view, setView] = useState<'students' | 'test'>('students');
  const handleViewChange = () => {
    setView(view === 'test' ? 'students' : 'test');
  };
  return (
    <div className="flex flex-col gap-5 items-start">
      <Link to="/" className="flex gap-2 text-primary text-bold font-semibold">
        <ArrowLeftIcon className="w-4" />
        Powrót do dashboardu
      </Link>
      <div className="w-full">
        <ViewToggle view={view} onClick={handleViewChange} />
      </div>

      <GradingPanel />
      <FeedbackAi feedbackText={feedbackText}/>
    </div>
  );
};

export default Grading;
