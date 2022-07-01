import { Heading, Link, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { PageLayout } from '../components/Layout/PageLayout';
import { SocialMediaLinks } from '../components/SocialMediaLinks';

export const Home: NextPage = () => (
  <PageLayout>
    <Heading pt="15vh">Hey there!</Heading>
    <Text p="2rem">
      My name is Max. I'm a Web Developer at <Link href="https://www.incloud.de/">Incloud</Link>.
    </Text>
    <SocialMediaLinks />
  </PageLayout>
);

export default Home;
