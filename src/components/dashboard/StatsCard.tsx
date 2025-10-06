import { Flex, Text } from '@radix-ui/themes';

interface StatsCardProps {
  icon: React.ElementType;
  value: number | string;
  description: string;
}

export default function StatsCard({
  icon: Icon,
  value,
  description,
}: StatsCardProps) {
  return (
    <div className="flex-1 shadow-md rounded-lg bg-white py-1">
      <Flex gap="4" align="center" className="px-5 py-4">
        <Flex
          align="center"
          justify="center"
          className="w-15 h-15 bg-light-gray rounded-full flex-shrink-0">
          <Icon className="w-7 text-primary" />
        </Flex>
        <Flex direction="column" gap="2">
          <Text as="div" size="6" weight="bold">
            {value}
          </Text>
          <Text className="text-gray" as="div" size="2" weight="medium">
            {description}
          </Text>
        </Flex>
      </Flex>
    </div>
  );
}
