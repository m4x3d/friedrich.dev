import { useColorMode } from '@chakra-ui/color-mode';
import { Flex, Icon, IconButton } from '@chakra-ui/react';
import { type FunctionComponent } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';

export const PageHeader: FunctionComponent = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex as="header" p="4" justify="flex-end">
      <IconButton
        aria-label="toggle dark mode"
        onClick={toggleColorMode}
        icon={<Icon as={colorMode === 'light' ? BsMoon : BsSun} />}
      />
    </Flex>
  );
};
