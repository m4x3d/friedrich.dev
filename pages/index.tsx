import { Heading, HStack, Text } from '@chakra-ui/layout';
import { Link } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { PageLayout } from '../components/Layout/PageLayout';
import { SocialMediaLinks } from '../components/SocialMediaLinks';

export const Home: NextPage = () => (
  <PageLayout>
    <Heading pt="20vh">Hey there!</Heading>
    <HStack p="2rem" minW="28rem">
      <Text>My name is Max. I'm a Web Developer at</Text>
      <Link href="https://www.incloud.de/">INCLOUD</Link>
      <Text marginInlineStart="0 !important">.</Text>
    </HStack>
    <SocialMediaLinks />
  </PageLayout>
);

export default Home;
