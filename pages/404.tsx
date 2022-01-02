import { ArrowLeftIcon } from '@chakra-ui/icons';
import { Button, Heading, HStack, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import { PageLayout } from '../components/Layout/PageLayout';

export const NotFoundPage: NextPage = () => {
  const router = useRouter();

  return (
    <PageLayout>
      <Heading pt="20vh">404 - Page not found :(</Heading>
      <Button onClick={() => router.back()}>
        <HStack spacing="1rem">
          <ArrowLeftIcon />
          <Text>Go Back</Text>
        </HStack>
      </Button>
    </PageLayout>
  );
};

export default NotFoundPage;
