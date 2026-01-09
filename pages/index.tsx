import { Heading, Highlight, Text } from '@chakra-ui/react';
import { type NextPage } from 'next';
import { PageLayout } from '../components/Layout/PageLayout';
import { SocialMediaLinks } from '../components/SocialMediaLinks';

export const Home: NextPage = () => (
  <PageLayout>
    <Heading pt="15vh" size="3xl">Hey there!</Heading>
    <Text p="8" fontSize="lg">
      <Highlight
        query={['Frontends', 'React', 'TypeScript', 'serverless backends', 'AWS', 'Terraform']}
        styles={{
          textDecoration: 'underline double',
          color: 'inherit',
        }}
      >
        My name is Max. I&apos;m a Web Developer with a focus on Frontends built with React and
        TypeScript as well as serverless backends with AWS and Terraform.
      </Highlight>
    </Text>
    <SocialMediaLinks />
  </PageLayout>
);

export default Home;
