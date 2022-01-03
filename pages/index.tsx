import { Heading, Link, Text, VStack } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { EyeCatcher } from '../components/EyeCatcher';
import { PageLayout } from '../components/Layout/PageLayout';
import { SocialMediaLinks } from '../components/SocialMediaLinks';

export const Home: NextPage = () => (
  <PageLayout>
    <Heading pt="15vh">Hey there!</Heading>
    <Text p="2rem">
      My name is Max. I'm a Web Developer at <Link href="https://www.incloud.de/">Incloud</Link>.
    </Text>
    <SocialMediaLinks />
    <VStack pt="5rem">
      <Text>This are my skills respectively is my preferred tech stack:</Text>
      <EyeCatcher />
    </VStack>
  </PageLayout>
);

export default Home;
