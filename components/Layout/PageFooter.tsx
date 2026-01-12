import { ClientOnly, HStack, Link, Skeleton, Text, VStack } from '@chakra-ui/react';
import type { FunctionComponent } from 'react';
import { ChakraLogo } from '../ChakraLogo';

export const PageFooter: FunctionComponent = () => (
  <VStack as="footer" pos="absolute" bottom="4" w="full">
    <HStack>
      <Text>Made with</Text>
      <Link href="https://chakra-ui.com/" target="_blank" rel="noopener noreferrer">
      <ClientOnly fallback={<Skeleton h="5" w="20" />}>
        <ChakraLogo cursor="pointer" h="5" />
      </ClientOnly>
      </Link>
    </HStack>
    <HStack>
      <Text>&copy; 2021 - {new Date().getFullYear()}</Text>
      {/* <Link as={NextLink} fontWeight="bold" href="/imprint">
        Imprint
      </Link> */}
    </HStack>
  </VStack>
);
