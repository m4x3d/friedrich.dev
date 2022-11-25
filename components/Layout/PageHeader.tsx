import { useColorMode } from '@chakra-ui/color-mode';
import { Flex, Icon, IconButton, Link, Spacer } from '@chakra-ui/react';
import NextLink from 'next/link';
import { type FunctionComponent } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';

export const PageHeader: FunctionComponent = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex as="header" p="4">
      <Link as={NextLink} href="/">
        Max Friedrich
      </Link>
      <Spacer />
      <IconButton
        aria-label="toggle dark mode"
        onClick={toggleColorMode}
        icon={<Icon as={colorMode === 'light' ? BsMoon : BsSun} />}
      />
    </Flex>
  );
};
