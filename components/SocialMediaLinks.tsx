import { HStack, Icon, Link, LinkProps } from '@chakra-ui/react';
import type { FunctionComponent, PropsWithChildren } from 'react';
import { BsStrava } from 'react-icons/bs';
import { GrGithub, GrLinkedinOption, GrTwitter } from 'react-icons/gr';

const SocialMediaLink: FunctionComponent<PropsWithChildren<LinkProps>> = ({
  children,
  ...rest
}) => (
  <Link h="8" target="_blank" {...rest}>
    {children}
  </Link>
);

export const SocialMediaLinks: FunctionComponent<LinkProps> = ({ h, boxSize = 8 }) => (
  <HStack spacing="8">
    <SocialMediaLink href="https://github.com/m4x3d" h={h}>
      <Icon as={GrGithub} boxSize={boxSize} />
    </SocialMediaLink>
    <SocialMediaLink href="https://www.linkedin.com/in/max-friedrich-119852206/" h={h}>
      <Icon as={GrLinkedinOption} boxSize={boxSize} />
    </SocialMediaLink>
    <SocialMediaLink href="https://twitter.com/m4x3d_" h={h}>
      <Icon as={GrTwitter} boxSize={boxSize} />
    </SocialMediaLink>
    <SocialMediaLink href="https://strava.com/athletes/m4x_d" h={h}>
      <Icon as={BsStrava} boxSize={boxSize} />
    </SocialMediaLink>
  </HStack>
);
