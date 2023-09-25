import NextHead from 'next/head';
import type { FunctionComponent } from 'react';

export const Head: FunctionComponent = () => (
  <NextHead>
    <title>Max Friedrich</title>
    <meta
      name="description"
      content="Max Friedrich - Web Developer using React, TypeScript and AWS"
    />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </NextHead>
);
