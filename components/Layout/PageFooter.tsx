import { HStack, Link, Text, VStack } from '@chakra-ui/react';
import NextLink from 'next/link';
import type { FunctionComponent } from 'react';
import { ChakraLogo } from '../ChakraLogo';

export const PageFooter: FunctionComponent = () => (
  <VStack pos="absolute" bottom="1rem" w="full">
    <HStack>
      <Text>Made with</Text>
      <Link href="https://chakra-ui.com/">
        <ChakraLogo cursor="pointer" h="1.25rem" pb="0.05rem" />
      </Link>
    </HStack>
    <HStack divider={<Text px="0.5rem">|</Text>}>
      <Text>&copy; 2021 - {new Date().getFullYear()}</Text>
      <Text fontWeight="bold">
        <Link as={NextLink} href="/">
          Max Friedrich
        </Link>
      </Text>
      <Text fontWeight="bold">
        <Link as={NextLink} href="/imprint">
          Imprint
        </Link>
      </Text>
    </HStack>
  </VStack>
);
