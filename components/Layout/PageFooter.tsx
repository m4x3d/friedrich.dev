import { Box, HStack, Text } from '@chakra-ui/layout';
import { Center, Icon } from '@chakra-ui/react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import { FaHeart } from 'react-icons/fa';

const FooterBox = styled(Box)`
  position: absolute;
  bottom: 1rem;
  width: 100%;
`;

const FooterDivider = () => (
  <Text pl="0.375rem" pr="0.375rem">
    -
  </Text>
);

export const PageFooter: FunctionComponent = () => (
  <FooterBox>
    <Center>
      <HStack>
        <Text>Made with</Text>
        <Link href="https://chakra-ui.com/">Chakra UI</Link>
        <Text>and</Text>
        <Icon as={FaHeart} pb="0.1rem" />
      </HStack>
    </Center>
    <Center>
      <HStack divider={<FooterDivider />}>
        <Text>&copy; {new Date().getFullYear()}</Text>
        <Text>Max Friedrich</Text>
        <Link href="/imprint">Imprint</Link>
      </HStack>
    </Center>
  </FooterBox>
);
