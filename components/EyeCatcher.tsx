import { Box, Icon, useColorModeValue } from '@chakra-ui/react';
import { Text, TrackballControls } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import type { FunctionComponent } from 'react';
import { useMemo, useRef } from 'react';
import { BsArrowsMove } from 'react-icons/bs';
import { Color, Spherical, Vector3 } from 'three';

const techStack = [
  'React',
  'TypeScript',
  'Node.js',
  'Docker',
  'CI/CD',
  'Gatsby',
  'Next.js',
  'Cypress',
  'Jest',
  'AWS',
];

const textFontProps = {
  fontSize: 2.5,
  lineHeight: 1,
  'material-toneMapped': false,
};

// typing of text props of @react-three/drei is bad af
const Word: FunctionComponent<any> = ({ children, ...props }) => {
  const color = new Color();
  const ref = useRef();

  useFrame(({ camera }) => {
    // Make text face the camera
    (ref.current as any)?.quaternion.copy(camera.quaternion);
    // Animate font color
    (ref.current as any)?.material.color.lerp(color.set('white'), 0.1);
  });

  return <Text ref={ref} {...props} {...textFontProps} children={children} />;
};

interface CloudProps {
  count: number;
  radius: number;
}

const Cloud: FunctionComponent<CloudProps> = ({ count = 4, radius = 20 }) => {
  const words = useMemo(() => {
    const wordsArray = [];
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;
    const middleCircle = Math.round(count / 2);

    for (let i = 1; i < middleCircle + 1; i++)
      for (let j = 0; j < count; j++)
        // only render the middle circle of the sphere to get a circle
        i === middleCircle &&
          wordsArray.push([
            new Vector3().setFromSpherical(new Spherical().set(radius, phiSpan * i, thetaSpan * j)),
            techStack[j],
          ]);

    return wordsArray;
  }, [count, radius]);

  return (
    <>
      {words.map(([pos, word], index) => (
        <Word key={index} position={pos} children={word} />
      ))}
    </>
  );
};

// based on https://codesandbox.io/s/spherical-word-cloud-yup2o?file=/src/App.js
export const EyeCatcher: FunctionComponent = () => {
  const bg = useColorModeValue('gray.800', 'inherit');
  const borderColor = useColorModeValue('gray.800', 'teal.200');
  const iconColor = useColorModeValue('white', 'teal.200');

  return (
    <Box
      mt="3rem"
      w={{ sm: '90vw', lg: '50rem' }}
      h="30rem"
      border="1px solid"
      borderColor={borderColor}
      borderRadius="10px"
      cursor="move"
      bg={bg}
      pos="relative"
    >
      <Icon
        as={BsArrowsMove}
        pos="absolute"
        top="0.5rem"
        right="0.5rem"
        boxSize="1.5rem"
        color={iconColor}
      />
      <Canvas dpr={[1, 2]} camera={{ position: [0, 10, 30], fov: 90 }}>
        <fog attach="fog" args={['#202025', 0, 80]} />
        <Cloud count={techStack.length} radius={20} />
        <TrackballControls />
      </Canvas>
    </Box>
  );
};
