import { useColorModeValue } from '@chakra-ui/color-mode';
import { Box, Center, VStack } from '@chakra-ui/layout';
import { useTheme } from '@chakra-ui/react';
import type { FunctionComponent } from 'react';
import { PageFooter } from './PageFooter';
import { PageHeader } from './PageHeader';

export const PageLayout: FunctionComponent = ({ children }) => {
  const color = useColorModeValue('gray.800', 'teal.200');
  const theme = useTheme();
  const bg = useColorModeValue(
    `linear-gradient(to bottom right, ${theme.colors.gray[300]}, ${theme.colors.cyan[200]})`,
    'gray.800',
  );

  return (
    <Box minH="100vh" color={color} bg={bg}>
      <PageHeader />
      <Center as="main">
        <VStack width={{ base: '80%', lg: '70%' }} maxW="80rem" minH="25rem">
          {children}
        </VStack>
      </Center>
      <PageFooter />
    </Box>
  );
};
