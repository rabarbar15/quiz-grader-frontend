import { Text } from '@radix-ui/themes'
import type { Test } from '../../types'
import Question from './Question'

interface TestViewProps {
  test: Test
  currentStudentId: number
}

const TestsView = ({ test, currentStudentId } : TestViewProps) => {
  const selectedStudent = test.students?.find((student) => student.id === currentStudentId)
  const studentsAnswers = selectedStudent?.answers

  return (
    <div className='rounded-lg shadow-md bg-white col-span-5 px-6 py-7'>
      <div className='flex justify-between items-center'>
        <Text size="5" weight='bold'>{test.subject}</Text>
        <div className='flex gap-4 items-center'>
          <div className='flex flex-col gap-1 items-center'>
            <Text size="4" weight='medium'>{selectedStudent?.name}</Text>
            <Text size="2" weight='medium'>{selectedStudent?.className}</Text>
          </div>
          <Text size="6" weight='medium' className='text-primary'>{selectedStudent?.score}/{selectedStudent?.maxScore} Pkt.</Text>
        </div>
      </div>
      <hr className="border-light-gray my-4" />
      <Question asnwers={studentsAnswers ?? []} />
    </div>
  )
}

export default TestsView