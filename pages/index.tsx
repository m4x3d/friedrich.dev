import { Heading, Highlight, Text } from '@chakra-ui/react';
import { type NextPage } from 'next';
import { PageLayout } from '../components/Layout/PageLayout';
import { SocialMediaLinks } from '../components/SocialMediaLinks';

export const Home: NextPage = () => (
  <PageLayout>
    <Heading pt="15vh">Hey there!</Heading>
    <Text p="8">
      <Highlight
        query={['frontends', 'react', 'typescript', 'serverless backends', 'aws', 'terraform']}
        styles={{
          textDecoration: 'underline double',
          color: 'inherit',
        }}
      >
        My name is Max. I'm a Web Developer with a focus on Frontends built with React and
        TypeScript as well as serverless backends with AWS and Terraform.
      </Highlight>
    </Text>
    <SocialMediaLinks />
  </PageLayout>
);

export default Home;
