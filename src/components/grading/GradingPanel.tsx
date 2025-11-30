import {
  MagnifyingGlassIcon,
  SparklesIcon,
  DocumentCheckIcon,
  Cog6ToothIcon,
  TrashIcon,
} from '@heroicons/react/16/solid';
import { Select, Text, TextField } from '@radix-ui/themes';
import Button from '../common/Button';
import type { Test } from '../../types';
import type React from 'react';

interface GradingPanelProps {
  tests: Test[];
  currentTestId: number;
  setTestId: React.Dispatch<React.SetStateAction<number>>
}

const GradingPanel = ({ tests, setTestId }: GradingPanelProps ) => {
  const handleTestChange = (selectedSubject: string) => {
    const testId = tests.find((test) => test.subject === selectedSubject)?.id
    setTestId(Number(testId))
  }
  const openedTests = tests.filter((test) => test.id != 3);
  const gradedTests = tests.filter((test) => test.id === 3);

  return (
    <div className="rounded-lg shadow-lg bg-white p-5 w-full">
      <Text weight="bold" size="5">
        Wybierz test do oceniania
      </Text>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        <div className="flex flex-col gap-2 pt-5 col-span-2 lg:col-span-1">
          <Text size="2" className="text-gray">
            Test
          </Text>
          <Select.Root defaultValue={tests[0].subject} onValueChange={handleTestChange}>
            <Select.Trigger variant="surface" />
            <Select.Content>
              <Select.Group>
                <Select.Label>Otwarte</Select.Label>
                {openedTests.map((test) => (
                  <Select.Item key={test.id} value={test.subject}>
                    {test.subject}
                  </Select.Item>
                ))}
              </Select.Group>
              <Select.Separator />
              <Select.Group>
                <Select.Label>Ocenione</Select.Label>
                {gradedTests.map((test) => (
                  <Select.Item key={test.id} value={test.subject}>
                    {test.subject}
                  </Select.Item>
                ))}
              </Select.Group>
            </Select.Content>
          </Select.Root>
        </div>
        <div className="flex flex-col gap-2 pt-5 col-span-2 lg:col-span-1">
          <Text size="2" className="text-gray">
            Wyszukaj
          </Text>
          <TextField.Root placeholder="Wpisz nazwisko lub pytanie...">
            <TextField.Slot>
              <MagnifyingGlassIcon height="16" width="16" />
            </TextField.Slot>
          </TextField.Root>
        </div>
        <div className="flex flex-col md:flex-row gap-6 md:gap-3 col-span-2 pt-6">
          <Button
            label="Generuj feedback"
            icon={MagnifyingGlassIcon}
            size="sm"
            variant="success"
          />
          <Button
            label="Oceń test"
            icon={SparklesIcon}
            size="sm"
            variant="success"
          />
          <Button
            label="Zapisz zmiany"
            icon={DocumentCheckIcon}
            size="sm"
            variant="primary"
          />
          <Button
            label="Ustawienia testu"
            icon={Cog6ToothIcon}
            size="sm"
            variant="primary"
          />
          <Button
            label="Usuń test"
            icon={TrashIcon}
            size="sm"
            variant="danger"
          />
        </div>
      </div>
    </div>
  );
};

export default GradingPanel;
