import * as ToggleGroup from '@radix-ui/react-toggle-group';
import {
  UserGroupIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/16/solid';

interface ToggleProps {
  view: 'students' | 'test';
  onClick: () => void;
}

const ViewToggle = ({ view, onClick }: ToggleProps) => {
  return (
    <ToggleGroup.Root
      type="single"
      defaultValue="students"
      className="inline-flex rounded-md bg-white cursor-pointer shadow-lg">
      <ToggleGroup.Item
        value="students"
        className="flex items-center gap-2 rounded-l-md px-5 py-2 text-sm font-medium
                   text-black data-[state=on]:bg-primary data-[state=on]:text-white
                   transition-colors duration-300 cursor-pointer"
        onClick={onClick}
        disabled={view === 'students'}>
        <UserGroupIcon className="w-5" />
        Widok uczniów
      </ToggleGroup.Item>

      <ToggleGroup.Item
        value="questions"
        className="flex items-center gap-2 rounded-r-md px-5 py-2 text-sm font-medium
                   text-black data-[state=on]:bg-primary data-[state=on]:text-white
                   transition-colors duration-300 cursor-pointer"
        onClick={onClick}
        disabled={view === 'test'}>
        <QuestionMarkCircleIcon className="w-4" />
        Widok pytań
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  );
};

export default ViewToggle;
