import type { BoxProps } from '@chakra-ui/react';
import { Box, Center, VStack } from '@chakra-ui/react';
import type { FunctionComponent } from 'react';
import { PageFooter } from './PageFooter';
import { PageHeader } from './PageHeader';

export const PageLayout: FunctionComponent<BoxProps> = ({ children, ...props }) => (
  <Box minH="100vh" pb="32" {...props} >
    <PageHeader />
    <Center as="main">
      <VStack width={{ base: '80%', lg: '70%', xl: '60%' }} maxW="80rem" minH="25rem">
        {children}
      </VStack>
    </Center>
    <PageFooter />
  </Box>
);
