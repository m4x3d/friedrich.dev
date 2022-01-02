import { Heading, HStack, Link, Text, VStack } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { EyeCatcher } from '../components/EyeCatcher';
import { PageLayout } from '../components/Layout/PageLayout';
import { SocialMediaLinks } from '../components/SocialMediaLinks';

export const Home: NextPage = () => (
  <PageLayout>
    <Heading pt="15vh">Hey there!</Heading>
    <HStack p="2rem" minW="28rem">
      <Text>My name is Max. I'm a Web Developer at</Text>
      <Link href="https://www.incloud.de/">Incloud</Link>
      <Text marginInlineStart="0 !important">.</Text>
    </HStack>
    <SocialMediaLinks />
    <VStack pt="5rem">
      <Text>This are my skills respectively is my preferred tech stack:</Text>
      <EyeCatcher />
    </VStack>
  </PageLayout>
);

export default Home;
