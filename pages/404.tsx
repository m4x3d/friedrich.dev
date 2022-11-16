import { Button, Heading, HStack, Icon, Text } from '@chakra-ui/react';
import { type NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import { BsArrowLeft } from 'react-icons/bs';
import { PageLayout } from '../components/Layout/PageLayout';

export const NotFoundPage: NextPage = () => {
  const router = useRouter();

  return (
    <PageLayout>
      <Heading pt="20vh">404 - Page not found :(</Heading>
      <Button onClick={() => router.back()}>
        <HStack spacing="2">
          <Icon as={BsArrowLeft} boxSize="6" />
          <Text>Go Back</Text>
        </HStack>
      </Button>
    </PageLayout>
  );
};

export default NotFoundPage;
