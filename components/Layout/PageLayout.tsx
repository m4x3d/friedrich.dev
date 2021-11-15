import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode';
import { Box, Center, VStack } from '@chakra-ui/layout';
import { FunctionComponent } from 'react';
import { PageFooter } from './PageFooter';
import { PageHeader } from './PageHeader';

export const PageLayout: FunctionComponent = ({ children }) => {
  const { colorMode } = useColorMode();
  const color = useColorModeValue('gray.800', 'teal.200');

  return (
    <Box
      minH="100vh"
      color={color}
      bg={colorMode === 'dark' ? 'gray.800' : undefined}
      bgImage={colorMode === 'light' ? `linear-gradient(to bottom right, #FC8181, #FBD38D)` : undefined}
    >
      <PageHeader />
      <Center>
        <VStack width={{ base: '80%', lg: '70%' }} maxW="80rem">
          {children}
        </VStack>
      </Center>
      <PageFooter />
    </Box>
  );
};
