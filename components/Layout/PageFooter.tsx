import { HStack, Icon, Link, Text, VStack } from '@chakra-ui/react';
import NextLink from 'next/link';
import type { FunctionComponent } from 'react';
import { FaHeart } from 'react-icons/fa';
import { ChakraLogo } from '../ChakraLogo';

const FooterDivider = () => <Text px="0.5rem">|</Text>;

export const PageFooter: FunctionComponent = () => (
  <VStack pos="absolute" bottom="1rem" w="full">
    <HStack>
      <Text>Made with</Text>
      <Link href="https://chakra-ui.com/">
        <ChakraLogo cursor="pointer" h="1.25rem" pb="0.05rem" />
      </Link>
      <Text>and</Text>
      <Icon as={FaHeart} pb="0.1rem" />
    </HStack>
    <HStack divider={<FooterDivider />}>
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
