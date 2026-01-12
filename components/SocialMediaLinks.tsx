import { ClientOnly, HStack, Icon, Link, LinkProps, Skeleton } from '@chakra-ui/react';
import type { FunctionComponent, PropsWithChildren } from 'react';
import { BsStrava } from 'react-icons/bs';
import { GrGithub, GrLinkedinOption, GrTwitter } from 'react-icons/gr';
import { useColorModeValue } from './ui/color-mode';

const SocialMediaLink: FunctionComponent<PropsWithChildren<LinkProps>> = ({
  children,
  ...rest
}) => (
  <Link h="8" target="_blank" {...rest}>
    {children}
  </Link>
);

export const SocialMediaLinks: FunctionComponent<LinkProps> = ({ h, boxSize = 8 }) => {
  const iconColor = useColorModeValue('gray.800', 'teal.200');
  const sharedIconProps = { boxSize, color: iconColor };

  return (
    <ClientOnly fallback={<Skeleton width="60" height="8" />}>
      <HStack gap="8">
        <SocialMediaLink href="https://github.com/m4x3d" h={h}>
          <Icon {...sharedIconProps} as={GrGithub} />
        </SocialMediaLink>
        <SocialMediaLink href="https://www.linkedin.com/in/max-friedrich-119852206/" h={h}>
          <Icon {...sharedIconProps} as={GrLinkedinOption} />
        </SocialMediaLink>
        <SocialMediaLink href="https://twitter.com/m4x3d_" h={h}>
          <Icon {...sharedIconProps} as={GrTwitter} />
        </SocialMediaLink>
        <SocialMediaLink href="https://strava.com/athletes/m4x_d" h={h}>
          <Icon {...sharedIconProps} as={BsStrava} />
        </SocialMediaLink>
      </HStack>
    </ClientOnly>
  );
};
