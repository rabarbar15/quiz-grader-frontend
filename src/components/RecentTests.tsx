import { Table, Text } from '@radix-ui/themes';
import Button from './Button';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/16/solid';
import StatusBadge from './StatusBadge';

interface Test {
  id: number;
  name: string;
  date: string;
  numberOfStudents: number;
  averageGrade: number | null;
  status: 'complete' | 'pending' | 'unopened';
}

const RecentTests = () => {
  const testData: Test[] = [
    {
      id: 1,
      name: 'Matematyka - Dział trygonometria',
      date: '12.06.2023',
      numberOfStudents: 24,
      averageGrade: 4.2,
      status: 'complete',
    },
    {
      id: 2,
      name: 'Fizyka - Kinematyka',
      date: '10.06.2023',
      numberOfStudents: 22,
      averageGrade: 3.8,
      status: 'complete',
    },
    {
      id: 3,
      name: 'Matematyka - Prawdopodobieństwo',
      date: '05.06.2023',
      numberOfStudents: 26,
      averageGrade: null,
      status: 'unopened',
    },
    {
      id: 4,
      name: 'Matematyka - hello',
      date: '05.03.2023',
      numberOfStudents: 26,
      averageGrade: null,
      status: 'pending',
    },
  ];
  return (
    <div className="rounded-lg shadow-md bg-white p-6">
      <Text size="5" weight="bold">
        Ostatnie testy
      </Text>
      <div className="py-4 px-2">
        <Table.Root>
          <Table.Header className="text-sm">
            <Table.Row className="text-amber-50">
              <Table.ColumnHeaderCell>Nazwa testu</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Data</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Liczba uczniów</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Średnia ocen</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Akcje</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body className="text-base">
            {testData.map((test) => (
              <Table.Row key={test.id}>
                <Table.RowHeaderCell>{test.name}</Table.RowHeaderCell>
                <Table.Cell>{test.date}</Table.Cell>
                <Table.Cell>{test.numberOfStudents}</Table.Cell>
                <Table.Cell>{test.averageGrade}</Table.Cell>
                <Table.Cell>
                  <StatusBadge variant={test.status} />
                </Table.Cell>
                <Table.Cell>
                  <div className="flex gap-1">
                    <Button
                      label="Oceń"
                      icon={PencilSquareIcon}
                      variant="primary"
                      size="xs"
                    />
                    <Button
                      label="Usuń"
                      icon={TrashIcon}
                      variant="danger"
                      size="xs"
                    />
                  </div>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </div>
    </div>
  );
};

export default RecentTests;
