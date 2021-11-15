import { useColorMode } from '@chakra-ui/color-mode';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Box, Button } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

export const PageHeader: FunctionComponent = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box p="1rem" w="100%" display="flex" justifyContent="flex-end">
      <Button onClick={toggleColorMode}>{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}</Button>
    </Box>
  );
};
