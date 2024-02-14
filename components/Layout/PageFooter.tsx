import { HStack, Link, Text, VStack } from '@chakra-ui/react';
import NextLink from 'next/link';
import type { FunctionComponent } from 'react';
import { ChakraLogo } from '../ChakraLogo';

export const PageFooter: FunctionComponent = () => (
  <VStack as="footer" pos="absolute" bottom="4" w="full">
    <HStack>
      <Text>Made with</Text>
      <Link href="https://chakra-ui.com/" target="_blank">
        <ChakraLogo cursor="pointer" h="5" />
      </Link>
    </HStack>
    <HStack divider={<Text px="2">|</Text>}>
      <Text>&copy; 2021 - {new Date().getFullYear()}</Text>
      {/* <Link as={NextLink} fontWeight="bold" href="/imprint">
        Imprint
      </Link> */}
    </HStack>
  </VStack>
);
