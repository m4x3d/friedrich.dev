import { Button, Link } from '@chakra-ui/react';
import { useState, type FunctionComponent } from 'react';

export const HiddenEmail: FunctionComponent = () => {
  const [isMailVisible, setIsMailVisible] = useState<boolean>(false);

  if (isMailVisible && typeof window !== 'undefined') {
    return <Link href="mailto:max@friedrich.dev">max@friedrich.dev</Link>;
  }

  return (
    <Button size="sm" onClick={() => setIsMailVisible(true)}>
      anzeigen
    </Button>
  );
};
