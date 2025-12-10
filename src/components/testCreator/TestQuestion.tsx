import { Badge, RadioGroup, Text } from '@radix-ui/themes';
import Score from '../common/ScorePill';

const TestQuestion = () => {
  return (
    <div className="bg-gray-50 p-5 my-2 rounded-lg transition duration-300 ease border border-transparent hover:border-slate-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Text size="3" weight="medium">
            Pytanie 1: Wybierz odpowiedz
          </Text>
          <Badge>Jednokrotny wybór</Badge>
        </div>
        <Score pointsAwarded={undefined} />
      </div>
      <div className="py-3">
        <Text>Pytanie brzmi wybierz odpowiedz</Text>
        <RadioGroup.Root defaultValue="1" name="example">
          <div className="flex flex-col gap-2">
            <RadioGroup.Item value="1">Default</RadioGroup.Item>
            <RadioGroup.Item value="2">Comfortable</RadioGroup.Item>
            <RadioGroup.Item value="3">Compact</RadioGroup.Item>
          </div>
        </RadioGroup.Root>
      </div>
    </div>
  );
};

export default TestQuestion;
