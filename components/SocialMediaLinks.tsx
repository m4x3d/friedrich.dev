import { HStack, Icon, Link, LinkProps } from '@chakra-ui/react';
import type { FunctionComponent } from 'react';
import { FaGitlab, FaXing } from 'react-icons/fa';
import { GrGithub, GrLinkedinOption, GrTwitter } from 'react-icons/gr';

export const SocialMediaLinks: FunctionComponent<LinkProps> = ({
  h = '2rem',
  boxSize = '2rem',
}) => (
  <HStack spacing="2rem">
    <Link href="https://github.com/m4x3d" h={h}>
      <Icon as={GrGithub} boxSize={boxSize} />
    </Link>
    <Link href="https://gitlab.com/m4x3d" h={h}>
      <Icon as={FaGitlab} boxSize={boxSize} />
    </Link>
    <Link href="https://www.linkedin.com/in/max-friedrich-119852206/" h={h}>
      <Icon as={GrLinkedinOption} boxSize={boxSize} />
    </Link>
    <Link href="https://www.xing.com/profile/Max_Friedrich46/cv" h={h}>
      <Icon as={FaXing} boxSize={boxSize} />
    </Link>
    <Link href="https://twitter.com/m4x3d_" h={h}>
      <Icon as={GrTwitter} boxSize={boxSize} />
    </Link>
  </HStack>
);
