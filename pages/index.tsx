import { Heading, HStack, Text } from '@chakra-ui/layout';
import { Link } from '@chakra-ui/react';
import type { NextPage } from 'next';
import React from 'react';
import { PageLayout } from '../components/Layout/PageLayout';
import { SocialMediaLinks } from '../components/SocialMediaLinks';

export const Home: NextPage = () => (
  <PageLayout>
    <Heading pt="5rem">Hey!</Heading>
    <HStack p="2rem">
      <Text>My name is Max. I'm a Web Developer at</Text>
      <Link href="https://www.incloud.de/" fontWeight="bold">
        INCLOUD
      </Link>
      <Text marginInlineStart="0 !important">.</Text>
    </HStack>
    <SocialMediaLinks />
  </PageLayout>
);

export default Home;
