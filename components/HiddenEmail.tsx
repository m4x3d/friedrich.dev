import { Button, Link, Popover, PopoverContent, PopoverTrigger, useColorMode, useToast } from '@chakra-ui/react';
import type { FunctionComponent } from 'react';
import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

export const HiddenEmail: FunctionComponent = () => {
  const toast = useToast();
  const [isMailVisible, setIsMailVisible] = useState<boolean>(false);
  const { colorMode } = useColorMode();

  return (
    <>
      {!isMailVisible && (
        <Popover>
          <PopoverTrigger>
            <Button size="sm">anzeigen</Button>
          </PopoverTrigger>
          <PopoverContent w="304px" h="78px">
            <ReCAPTCHA
              sitekey="6LdKLDUdAAAAAGZ-UY6V7p2WKfNa74Id1J2bhdrv"
              theme={colorMode}
              onChange={() => setIsMailVisible(true)}
              onExpired={() => setIsMailVisible(false)}
              onErrored={() =>
                toast({
                  title: 'reCAPTCHA error',
                  description: 'Please check your network connection.',
                  status: 'error',
                  duration: 10000,
                  isClosable: true,
                })
              }
            />
          </PopoverContent>
        </Popover>
      )}
      {isMailVisible && typeof window !== 'undefined' && <Link href="mailto:max@friedrich.dev">max@friedrich.dev</Link>}
    </>
  );
};
