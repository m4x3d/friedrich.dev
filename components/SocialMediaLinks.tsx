import Icon from '@chakra-ui/icon';
import { HStack, Link } from '@chakra-ui/layout';
import { FunctionComponent } from 'react';
import { FaGitlab, FaXing } from 'react-icons/fa';
import { GrGithub, GrLinkedinOption, GrMedium, GrTwitter } from 'react-icons/gr';

export const SocialMediaLinks: FunctionComponent = () => {
  const linkProps = { h: '2rem' };
  const iconProps = { boxSize: '2rem' };

  return (
    <HStack spacing="2rem">
      <Link href="https://gitlab.com/m4x3d" {...linkProps}>
        <Icon as={FaGitlab} {...iconProps} />
      </Link>
      <Link href="https://github.com/m4x3d" {...linkProps}>
        <Icon as={GrGithub} {...iconProps} />
      </Link>
      <Link href="https://medium.com/@m4x3d" {...linkProps}>
        <Icon as={GrMedium} {...iconProps} />
      </Link>
      <Link href="https://www.xing.com/profile/Max_Friedrich46/cv" {...linkProps}>
        <Icon as={FaXing} {...iconProps} />
      </Link>
      <Link href="https://www.linkedin.com/in/max-friedrich-119852206/" {...linkProps}>
        <Icon as={GrLinkedinOption} {...iconProps} />
      </Link>
      <Link href="https://twitter.com/m4xd_7" {...linkProps}>
        <Icon as={GrTwitter} {...iconProps} />
      </Link>
    </HStack>
  );
};
