import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Press_Start_2P, Encode_Sans_Condensed } from '@next/font/google';
import Head from 'next/head';
// eslint-disable-next-line import/named
import { CacheProvider, EmotionCache } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';

import createEmotionCache from 'createEmotionCache';
import PageTransitionWrapper from '@/components/shared/animations/PageTransitionWrapper';


const enhanced = Press_Start_2P({
  weight: ['400'],
  display: 'swap',
  subsets: ['latin'],
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

const standard = Encode_Sans_Condensed({
  weight: ['400'],
  display: 'swap',
  subsets: ['latin'],
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

export default function App(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width"/>
        </Head>
        <style jsx global>
          {`
            :root {
              --enhanced-font: ${enhanced.style.fontFamily};
              --standard-font: ${standard.style.fontFamily};
            } 
          `}
        </style>
        <CssBaseline />

        <PageTransitionWrapper>
            <Component {...pageProps} />
        </PageTransitionWrapper>

    </CacheProvider>
  );
}
  