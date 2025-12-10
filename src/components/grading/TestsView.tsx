import { Text } from '@radix-ui/themes';
import type { Test } from '../../types';
import Question from './Question';
import Button from '../common/Button';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  DocumentCheckIcon,
} from '@heroicons/react/16/solid';

interface TestViewProps {
  test: Test;
  currentStudentId: number;
  setStudentId: React.Dispatch<React.SetStateAction<number>>;
  numberOfStudents: number;
}

const TestsView = ({
  test,
  currentStudentId,
  setStudentId,
  numberOfStudents,
}: TestViewProps) => {
  const setNextStudentId = () => {
    const nextId = currentStudentId + 1;
    if (nextId > numberOfStudents) return;
    setStudentId(nextId);
  };

  const setPrevStudentId = () => {
    const nextId = currentStudentId - 1;
    if (nextId <= 0) return;
    setStudentId(nextId);
  };

  const selectedStudent = test.students?.find(
    (student) => student.id === currentStudentId,
  );
  const studentsAnswers = selectedStudent?.answers;

  return (
    <div className="rounded-lg shadow-md bg-white col-span-5 px-6 py-7">
      <div className="flex justify-between items-center">
        <Text size="5" weight="bold">
          {test.subject}
        </Text>
        <div className="flex gap-4 items-center">
          <div className="flex flex-col gap-1 items-center">
            <Text size="4" weight="medium">
              {selectedStudent?.name}
            </Text>
            <Text size="2" weight="medium">
              {selectedStudent?.className}
            </Text>
          </div>
          <Text size="6" weight="medium" className="text-primary">
            {selectedStudent?.score}/{selectedStudent?.maxScore} Pkt.
          </Text>
        </div>
      </div>
      <hr className="border-light-gray mt-4" />
      <Question asnwers={studentsAnswers ?? []} />
      <div className="flex justify-end gap-3 pt-3">
        <Button
          label="Poprzedni uczeń"
          size="sm"
          icon={ArrowLeftIcon}
          onClick={setPrevStudentId}
        />
        <Button label="Zapisz zmiany" size="sm" icon={DocumentCheckIcon} />
        <Button
          label="Następny uczeń"
          size="sm"
          icon={ArrowRightIcon}
          onClick={setNextStudentId}
        />
      </div>
    </div>
  );
};

export default TestsView;
