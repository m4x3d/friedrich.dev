import { createSystem, defaultConfig } from '@chakra-ui/react';
import recipes from './recipes';

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: 'Work Sans, Arial, sans-serif' },
        body: { value: 'Work Sans, Arial, sans-serif' },
      },
    },
    recipes,
  },
  globalCss: {
    a: {
      color: "inherit !important",
    },
    body: {
      color: { base: "gray.800", _dark: "teal.200" },
      bg: {
        base: "linear-gradient(to bottom right, var(--chakra-colors-yellow-100), var(--chakra-colors-red-200))",
        _dark: "teal.950"
      }
    }
  }
});
