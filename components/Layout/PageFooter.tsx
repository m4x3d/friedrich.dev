import { HStack, Link, Text, VStack } from '@chakra-ui/layout';
import { Icon } from '@chakra-ui/react';
import NextLink from 'next/link';
import type { FunctionComponent } from 'react';
import { FaHeart } from 'react-icons/fa';
import { ChakraLogo } from '../ChakraLogo';

const FooterDivider = () => <Text px="0.375rem">-</Text>;

export const PageFooter: FunctionComponent = () => (
  <VStack pos="absolute" bottom="1rem" w="full">
    <HStack>
      <Text>Made with</Text>
      <Link href="https://chakra-ui.com/">
        <ChakraLogo cursor="pointer" h="1.5rem" pb="0.3rem" />
      </Link>
      <Text>and</Text>
      <Icon as={FaHeart} pb="0.1rem" />
    </HStack>
    <HStack divider={<FooterDivider />}>
      <Text>&copy; {new Date().getFullYear()}</Text>
      <Text>Max Friedrich</Text>
      <Link as={NextLink} href="/imprint">
        Imprint
      </Link>
    </HStack>
  </VStack>
);
