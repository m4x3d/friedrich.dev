import NextHead from 'next/head';
import type { FunctionComponent } from 'react';

export const Head: FunctionComponent = () => (
  <NextHead>
    <script
      id="Cookiebot"
      src="https://consent.cookiebot.com/uc.js"
      data-cbid="52df5855-d487-436a-9979-431d1a967c8f"
      data-blockingmode="auto"
      type="text/javascript"
    ></script>
    <title>Max Friedrich</title>
    <meta
      name="description"
      content="Max Friedrich - Web Developer using React, TypeScript and Node.js"
    />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </NextHead>
);
