import React from 'react';
import type { AppProps } from 'next/app';
import LayoutContainer from './components/templates';
import { Fade, Reveal } from "react-awesome-reveal";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <LayoutContainer>
      <Component {...pageProps} />
    </LayoutContainer>
  );
};

export default MyApp;
