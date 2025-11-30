import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/16/solid';
import ViewToggle from '../components/grading/ViewToggle';
import GradingPanel from '../components/grading/GradingPanel';
import FeedbackAi from '../components/grading/FeedbackAi';
import { useQuery } from '@tanstack/react-query';
import { getFeedbackById } from '../api/feedbackService';
import type { FeedbackRequest, Test } from '../types';
import StudentsList from '../components/grading/StudentsList';
import TestsView from '../components/grading/TestsView';

const Grading = () => {
  const studentData: FeedbackRequest = {
    "quizId": 1,
    "studentData": {
      "responses": {
        "Example question 1": {
          "answer": "Example answer 1",
          "feedback": "Example feedback 1"
        },
        "Example question 2": {
          "answer": "Example answer 2", 
          "feedback": "Example feedback 2"
        }
      }
    },
    "language": "English"
  }

  const feedbackText = [
    'Bardzo dobry wynik! Uczeń wykazał się bardzo dobrą znajomością podstawowych wartości funkcji trygonometrycznych. Jedyny błąd dotyczył pełnego zapisu rozwiązań równania trygonometrycznego.',
    'Znajomość wartości funkcji trygonometrycznych dla podstawowych kątów Umiejętność rozwiązywania prostych równań trygonometrycznych Dokładność obliczeń',
    'Zapominanie o okresowości funkcji trygonometrycznych przy zapisie pełnego rozwiązania równania',
    'W celu poprawy wyników w przyszłości, zalecam powtórzenie zagadnienia okresowości funkcji trygonometrycznych oraz zapisu pełnych rozwiązań równań z uwzględnieniem parametru k.'
  ]

const testsData: Test[] = [
  {
    id: 1,
    subject: "Matematyka - Dział trygonometria",

    students: [
      {
        id: 1,
        name: "Anna Nowak",
        className: "Klasa 3A",
        score: 28,
        maxScore: 30,

        answers: [
          {
            questionId: 1,
            question: "Oblicz sin(30°)",
            studentAnswer: "0.5",
            correctAnswer: "0.5",
            pointsAwarded: 2,
            maxPoints: 2,
            feedback: "Poprawnie!"
          },
          {
            questionId: 2,
            question: "Oblicz cos(60°)",
            studentAnswer: "0.5",
            correctAnswer: "0.5",
            pointsAwarded: 2,
            maxPoints: 2,
            feedback: "Poprawnie!"
          }
        ]
      },
      {
        id: 2,
        name: "Jan Kowalski",
        className: "Klasa 3A",
        score: 22,
        maxScore: 30,

        answers: [
          {
            questionId: 3,
            question: "Oblicz sin(30°)",
            studentAnswer: "0.4",
            correctAnswer: "0.5",
            pointsAwarded: 0,
            maxPoints: 2,
            feedback: "Zły wynik; pamiętaj o podstawowych kątach."
          },
          {
            questionId: 4,
            question: "Oblicz cos(60°)",
            studentAnswer: "0.5",
            correctAnswer: "0.5",
            pointsAwarded: 2,
            maxPoints: 2,
            feedback: "Poprawnie!"
          }
        ]
      }
    ]
  },

  {
    id: 2,
    subject: "Fizyka - Ruch jednostajny prostoliniowy",

    students: [
      {
        id: 3,
        name: "Katarzyna Zielińska",
        className: "Klasa 2B",
        score: 18,
        maxScore: 20,

        answers: [
          {
            questionId: 5,
            question: "Podaj wzór na prędkość w ruchu jednostajnym.",
            studentAnswer: "v = s/t",
            correctAnswer: "v = s/t",
            pointsAwarded: 2,
            maxPoints: 2,
            feedback: "Pełna poprawność."
          },
          {
            questionId: 6,
            question: "Oblicz drogę, jeśli prędkość wynosi 4 m/s a czas 5 s.",
            studentAnswer: "20 m",
            correctAnswer: "20 m",
            pointsAwarded: 2,
            maxPoints: 2,
            feedback: "Bardzo dobrze."
          }
        ]
      },

      {
        id: 4,
        name: "Marek Piotrowski",
        className: "Klasa 2B",
        score: 14,
        maxScore: 20,

        answers: [
          {
            questionId: 7,
            question: "Podaj wzór na prędkość w ruchu jednostajnym.",
            studentAnswer: "v = t/s",
            correctAnswer: "v = s/t",
            pointsAwarded: 0,
            maxPoints: 2,
            feedback: "Zamiana licznika z mianownikiem — klasyczny błąd."
          },
          {
            questionId: 8,
            question: "Oblicz drogę, jeśli prędkość wynosi 4 m/s a czas 5 s.",
            studentAnswer: "25 m",
            correctAnswer: "20 m",
            pointsAwarded: 0,
            maxPoints: 2,
            feedback: "Błąd w obliczeniach — upewnij się, że mnożysz poprawne wartości."
          }
        ]
      }
    ]
  },

  {
    id: 3,
    subject: "Język angielski - Past Simple vs Present Perfect",

    students: [
      {
        id: 5,
        name: "Oliwia Król",
        className: "Klasa 1C",
        score: 17,
        maxScore: 20,

        answers: [
          {
            questionId: 9,
            question: "Choose the correct form: 'I ___ (see) this movie three times.'",
            studentAnswer: "have seen",
            correctAnswer: "have seen",
            pointsAwarded: 2,
            maxPoints: 2,
            feedback: "Świetnie! Present Perfect jest poprawny."
          },
          {
            questionId: 10,
            question: "Choose the correct form: 'She ___ (go) to Paris last year.'",
            studentAnswer: "went",
            correctAnswer: "went",
            pointsAwarded: 2,
            maxPoints: 2,
            feedback: "Poprawne użycie Past Simple."
          }
        ]
      },

      {
        id: 6,
        name: "Tomasz Wiśniewski",
        className: "Klasa 1C",
        score: 11,
        maxScore: 20,

        answers: [
          {
            questionId: 11,
            question: "Choose the correct form: 'I ___ (see) this movie three times.'",
            studentAnswer: "saw",
            correctAnswer: "have seen",
            pointsAwarded: 0,
            maxPoints: 2,
            feedback: "To jest Present Perfect — czynność powtarzana w życiu."
          },
          {
            questionId: 12,
            question: "Choose the correct form: 'She ___ (go) to Paris last year.'",
            studentAnswer: "has gone",
            correctAnswer: "went",
            pointsAwarded: 0,
            maxPoints: 2,
            feedback: "Przeszły określony moment → Past Simple."
          }
        ]
      }
    ]
  }
];


  const [view, setView] = useState<'students' | 'test'>('students');
  const [testId, setTestId] = useState(1)
  const [studentId, setStudentId] = useState(1)
  const currentTest = testsData[testId - 1]
  const handleViewChange = () => {
    setView(view === 'test' ? 'students' : 'test');
  };

  useEffect(() => {
    if (currentTest.students?.length) {
      setStudentId(currentTest.students[0].id)
    }
  }, [testId])
  
  return (
    <div className="flex flex-col gap-5 items-start">
      <Link to="/" className="flex gap-2 text-primary text-bold font-semibold">
        <ArrowLeftIcon className="w-4" />
        Powrót do dashboardu
      </Link>
      <div className="w-full">
        <ViewToggle view={view} onClick={handleViewChange} />
      </div>

      <GradingPanel tests={testsData} currentTestId={testId} setTestId={setTestId}/>
      {/* <FeedbackAi feedbackText={feedbackText}/> */}
      <FeedbackAi quizId={studentData.quizId} studentData={studentData.studentData} language={studentData.language} />

      <div className='grid grid-cols-7 w-full gap-6'>
        <StudentsList studentsList={currentTest.students ?? []} currentStudentId={studentId} setStudentId={setStudentId}/>
        <TestsView currentStudentId={studentId} test={currentTest} />
      </div>
    </div>
  );
};

export default Grading;
