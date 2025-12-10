import { Text } from '@radix-ui/themes';
import TestQuestion from './TestQuestion';
import Button from '../common/Button';
import { PlusCircleIcon } from '@heroicons/react/16/solid';

const TestEditor = () => {
  return (
    <div className=" flex flex-col gap-2 bg-white rounded-lg shadow-md px-5 py-6">
      <Text size="5" weight="bold">
        Tworzenie nowego testu
      </Text>
      <Text size="2" weight="medium" className="text-gray py-2">
        Wprowadź informacje o teście
      </Text>
      <hr className="border-light-gray py-1" />
      <div className="flex flex-col pb-4">
        <Text size="3" weight="medium">
          Nazwa testu
        </Text>
        <input
          type="text"
          className="w-1/2 text-sm border-1 border-light-gray rounded-md p-2 my-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          placeholder="Matematyka - trygonometria"
        />

        <Text size="3" weight="medium">
          Opis testu
        </Text>
        <textarea
          className="border-1 text-sm border-light-gray rounded-md p-2 my-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          placeholder="Ekstremalnie trudny test dla wybitnych uczniów"
          rows={3}
        />
      </div>

      <div>
        <div className="flex justify-between mb-5 items-center">
          <Text size="4" weight="bold">
            Pytania testowe
          </Text>
          <Button label="Dodaj pytanie" icon={PlusCircleIcon} size="sm" />
        </div>
        <TestQuestion />
      </div>
    </div>
  );
};

export default TestEditor;
