import { useColorMode } from '@chakra-ui/color-mode';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Flex, IconButton } from '@chakra-ui/react';
import type { FunctionComponent } from 'react';

export const PageHeader: FunctionComponent = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex as="header" p="1rem" justify="flex-end">
      <IconButton
        aria-label="toggle dark mode"
        onClick={toggleColorMode}
        icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      />
    </Flex>
  );
};
