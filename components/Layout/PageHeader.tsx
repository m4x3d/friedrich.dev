import { Flex, Link, Spacer } from '@chakra-ui/react';
import NextLink from 'next/link';
import { type FunctionComponent } from 'react';
import { ColorModeButton } from '../ui/color-mode';

export const PageHeader: FunctionComponent = () => (
  <Flex as="header" p="4">
    <Link as={NextLink} href="/" variant="underline">
      Max Friedrich
    </Link>
    <Spacer />
    <ColorModeButton />
  </Flex>
);
