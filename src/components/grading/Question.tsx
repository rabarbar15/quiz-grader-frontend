import type { TestViewAnswer } from '../../types';
import { Text, TextArea } from '@radix-ui/themes';
import Score from '../common/ScorePill';

interface QuestionProps {
  asnwers: TestViewAnswer[];
}

const Question = ({ asnwers }: QuestionProps) => {
  return (
    <div className="pt-2 pb-1">
      {asnwers.map((answer, index) => (
        <div className="border-1 border-light-gray rounded-md py-4 px-3 my-4">
          <div key={answer.questionId} className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <Text weight="bold">
                Pytanie {index + 1}: {answer.question}
              </Text>
              <Score
                pointsAwarded={answer.pointsAwarded}
                maxPoints={answer.maxPoints}
              />
            </div>
            <Text size="2" weight="medium" className="text-gray pt-2">
              Odpowiedź ucznia:
            </Text>
            <div className="bg-gray-100 p-3 rounded-xl">
              <Text size="2">{answer.studentAnswer}</Text>
            </div>

            <Text size="2" weight="medium" className="text-gray pt-2">
              Sugerowana poprawna odpowiedź:
            </Text>
            <div className="bg-emerald-100 p-3 rounded-xl border-emerald-600 border-l-2">
              <Text size="2">{answer.correctAnswer}</Text>
            </div>

            <Text size="2" weight="medium" className="text-gray pt-2">
              Komentarz AI:
            </Text>
            <div className="bg-blue-100 p-3 rounded-xl">
              <Text size="2">{answer.feedback}</Text>
            </div>

            <Text size="2" weight="medium" className="text-gray pt-2">
              Dodaj własny komentarz:
            </Text>
            <TextArea resize="vertical" placeholder="Dodaj komentarz…" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Question;
