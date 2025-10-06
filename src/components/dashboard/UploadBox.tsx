import { Flex, Text } from '@radix-ui/themes';
import React from 'react';
import Button from '../common/Button';

interface UploadBoxProps {
  header: string;
  description: string;
  buttonText: string;
  buttonIcon: React.ElementType;
  onClick?: () => void;
}

const UploadBox = ({
  header,
  description,
  buttonText,
  buttonIcon: Icon,
  onClick,
}: UploadBoxProps) => {
  return (
    <div className="flex-1 rounded-lg shadow-md bg-white">
      <div className="pt-9 pb-7 px-6">
        <Flex
          className="justify-center text-center items-center"
          direction="column"
          gap="4">
          <Text size="5" weight="bold">
            {header}
          </Text>
          <Text className="text-gray pb-2" size="3" weight="medium">
            {description}
          </Text>
          <Button label={buttonText} icon={Icon} onClick={onClick} />
        </Flex>
      </div>
    </div>
  );
};

export default UploadBox;
