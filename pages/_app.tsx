import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Press_Start_2P, Encode_Sans_Condensed } from '@next/font/google';
import Head from 'next/head';

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

export default function App({ Component, pageProps }: AppProps) {
  return (
      <>
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
       <Component {...pageProps} />
      </>
  );
}
  