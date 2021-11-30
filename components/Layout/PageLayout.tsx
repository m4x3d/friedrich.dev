import { useColorModeValue } from '@chakra-ui/color-mode';
import { Box, Center, VStack } from '@chakra-ui/layout';
import type { FunctionComponent } from 'react';
import { PageFooter } from './PageFooter';
import { PageHeader } from './PageHeader';

export const PageLayout: FunctionComponent = ({ children }) => {
  const color = useColorModeValue('gray.800', 'teal.200');
  const bg = useColorModeValue(`linear-gradient(to bottom right, #FC8181, #FBD38D)`, 'gray.800');

  return (
    <Box minH="100vh" color={color} bg={bg}>
      <PageHeader />
      <Center as="main">
        <VStack width={{ base: '80%', lg: '70%' }} maxW="80rem">
          {children}
        </VStack>
      </Center>
      <PageFooter />
    </Box>
  );
};
