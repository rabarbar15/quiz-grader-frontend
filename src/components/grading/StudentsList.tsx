import { Text } from "@radix-ui/themes"
import type { TestViewStudent } from "../../types";

interface StudentsListProps {
  studentsList: TestViewStudent[]
  currentStudentId: number
  setStudentId: React.Dispatch<React.SetStateAction<number>>
}

const StudentsList = ({ studentsList, currentStudentId, setStudentId }: StudentsListProps) => {
  console.log(currentStudentId);
  
  return (
    <div className="flex-1 rounded-lg shadow-md bg-white px-5 pt-5 pb-3 col-span-2">
        <Text weight="bold" size="5">Lista uczniów</Text>
        <hr className="border-light-gray my-3" />
        <div>
          {studentsList.map(student => (
            <div 
              key={student.id}
              className={`flex justify-between ${student.id === currentStudentId ? `bg-primary text-white` : `hover:bg-gray-100` } cursor-pointer rounded-xl transition p-4 my-2`}
              onClick={() => {
                setStudentId(student.id)
              }}
            >
              <Text size="3" weight="medium">{student.name}</Text>
              <Text size="2" weight="medium">{student.score}/{student.maxScore}</Text>
            </div>
          ))}
        </div>
    </div>
  )
}

export default StudentsList