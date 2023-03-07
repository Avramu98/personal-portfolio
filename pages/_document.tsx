import * as React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';

import createEmotionCache from 'createEmotionCache';

export default class MyDocument extends Document {
  render() {

    return (
            <Html lang='en'>
                <Head>
                    <meta name="emotion-insertion-point" content="" />
                    {/*@ts-ignore*/}
                    {this.props.emotionStyleTags}
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
    );
  }
}

MyDocument.getInitialProps = async ctx => {


  const originalRenderPage = ctx.renderPage;

  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App =>
        function EnhanceApp(props) {
          // @ts-ignore
          return <App emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(ctx);

  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style: { key: React.Key | null | undefined; ids: any[]; css: any; }) => (
        <style
            data-emotion={`${style.key} ${style.ids.join(' ')}`}
            key={style.key}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: style.css }}
        />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};