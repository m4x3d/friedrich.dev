import { useColorModeValue } from '@chakra-ui/color-mode';
import { Box, Center, VStack } from '@chakra-ui/layout';
import { FunctionComponent } from 'react';
import { PageFooter } from './PageFooter';
import { PageHeader } from './PageHeader';

export const PageLayout: FunctionComponent = ({ children }) => {
  const bg = useColorModeValue('teal.200', 'gray.800');
  const color = useColorModeValue('gray.800', 'teal.200');

  return (
    <Box bg={bg} minH="100vh" color={color}>
      <PageHeader />
      <Center>
        <VStack width={{ base: '80%', lg: '70%' }}>{children}</VStack>
      </Center>
      <PageFooter />
    </Box>
  );
};
